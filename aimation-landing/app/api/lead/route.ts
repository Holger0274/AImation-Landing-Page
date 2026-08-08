import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase';

// Validation schema matching the form
// Nur Name, E-Mail, Datenschutz sind Pflicht, siehe
// aimation-website-specs/2026-07-18_spec-05-formulare-rechner.md Punkt 1.
const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  firma: z.string().optional(),
  unternehmensgroesse: z.string().optional(),
  telefon: z.string().optional(),
  herausforderung: z.string().max(500).optional(),
  datenschutz: z.boolean(),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Formular fragt nur noch ein Namensfeld ab, DB-Schema behaelt vorname/nachname
    // (keine Migration noetig), daher hier serverseitig aufteilen.
    const [vorname, ...rest] = validatedData.name.trim().split(/\s+/);
    const nachname = rest.join(' ') || '';

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    // Save to Supabase (always)
    try {
      const supabase = createServerClient();
      const { error: dbError } = await supabase.from('leads').insert({
        vorname,
        nachname,
        email: validatedData.email,
        firma: validatedData.firma || null,
        unternehmensgroesse: validatedData.unternehmensgroesse || null,
        telefon: validatedData.telefon || null,
        herausforderung: validatedData.herausforderung || null,
        datenschutz_zugestimmt: validatedData.datenschutz,
      });

      if (dbError) {
        console.error('Supabase insert error:', dbError);
      }
    } catch (dbError) {
      console.error('Error saving lead to database:', dbError);
    }

    if (!n8nWebhookUrl) {
      console.warn('N8N_WEBHOOK_URL not configured - lead data not sent to n8n');

      return NextResponse.json(
        {
          success: true,
          message: 'Lead received (webhook not configured)'
        },
        { status: 200 }
      );
    }

    // Prepare payload for n8n
    const payload = {
      ...validatedData,
      vorname,
      nachname,
      timestamp: new Date().toISOString(),
      source: 'landing-page-form',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Send to n8n webhook
    const webhookResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      throw new Error(`n8n webhook failed with status ${webhookResponse.status}`);
    }

    console.log('Lead successfully sent to n8n:', {
      email: validatedData.email,
      firma: validatedData.firma,
      timestamp: payload.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead erfolgreich übermittelt'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validierungsfehler',
          details: error.issues
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Interner Serverfehler'
      },
      { status: 500 }
    );
  }
}

// Prevent caching
export const dynamic = 'force-dynamic';
