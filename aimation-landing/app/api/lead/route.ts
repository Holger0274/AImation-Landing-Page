import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema matching the form
const leadSchema = z.object({
  vorname: z.string().min(2),
  nachname: z.string().min(2),
  email: z.string().email(),
  firma: z.string().min(2),
  unternehmensgroesse: z.enum(['10-50', '50-250', '250-1000', '1000+']),
  telefon: z.string().optional(),
  herausforderung: z.string().min(10).max(500),
  datenschutz: z.boolean(),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      console.warn('N8N_WEBHOOK_URL not configured - lead data not sent to n8n');
      console.log('Lead data received:', validatedData);

      // Return success even if webhook not configured (for development)
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

    // Log success
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
