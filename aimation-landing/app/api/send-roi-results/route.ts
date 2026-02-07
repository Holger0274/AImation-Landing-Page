import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ROIResultsRequest {
  email: string;
  name?: string;
  input: {
    numEmployees: number;
    hourlyWage: number;
    weeklyHours: number;
    priority: string;
  };
  results: {
    annualSavings: number;
    hoursSaved: number;
    costReduction: number;
    roiMonths: number;
    weeklyHoursSaved: number;
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat('de-DE').format(num);
}

function getPriorityLabel(priority: string): string {
  const labels: Record<string, string> = {
    documentation: 'Dokumentation',
    email: 'E-Mail-Kommunikation',
    research: 'Recherche',
    reporting: 'Reporting',
  };
  return labels[priority] || priority;
}

function createEmailHTML(data: ROIResultsRequest): string {
  const { name, input, results } = data;
  const greeting = name ? `Hallo ${name}` : 'Hallo';

  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ihr KI-ROI-Ergebnis</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #faf9f7;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f7; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #071013, #1a1f23); padding: 40px 30px; text-align: center;">
                  <h1 style="color: #ffffff; font-size: 32px; margin: 0 0 10px 0; font-weight: bold;">
                    Ihr <span style="color: #f90093;">KI-Potenzial</span>
                  </h1>
                  <p style="color: #d1d5db; font-size: 16px; margin: 0;">
                    Hier ist Ihre persönliche ROI-Berechnung
                  </p>
                </td>
              </tr>

              <!-- Main Result -->
              <tr>
                <td style="padding: 40px 30px; text-align: center; background: linear-gradient(to bottom, #f3f4f6, #ffffff);">
                  <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px;">
                    🎯 Jährliches Einsparpotenzial
                  </p>
                  <p style="color: #f90093; font-size: 56px; font-weight: bold; margin: 0 0 10px 0; line-height: 1;">
                    ${formatCurrency(results.annualSavings)}
                  </p>
                  <p style="color: #6b7280; font-size: 14px; margin: 0;">
                    pro Jahr durch KI-Automatisierung
                  </p>
                </td>
              </tr>

              <!-- Breakdown -->
              <tr>
                <td style="padding: 0 30px 40px 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="33%" style="padding: 20px; text-align: center; border-right: 1px solid #e5e7eb;">
                        <p style="color: #f90093; font-size: 14px; margin: 0 0 5px 0;">⏱</p>
                        <p style="color: #071013; font-size: 28px; font-weight: bold; margin: 0 0 5px 0;">
                          ${formatNumber(results.hoursSaved)}
                        </p>
                        <p style="color: #6b7280; font-size: 12px; margin: 0;">Stunden/Jahr</p>
                      </td>
                      <td width="33%" style="padding: 20px; text-align: center; border-right: 1px solid #e5e7eb;">
                        <p style="color: #f90093; font-size: 14px; margin: 0 0 5px 0;">💰</p>
                        <p style="color: #071013; font-size: 28px; font-weight: bold; margin: 0 0 5px 0;">
                          ${results.costReduction}%
                        </p>
                        <p style="color: #6b7280; font-size: 12px; margin: 0;">Kostenreduktion</p>
                      </td>
                      <td width="33%" style="padding: 20px; text-align: center;">
                        <p style="color: #f90093; font-size: 14px; margin: 0 0 5px 0;">📈</p>
                        <p style="color: #071013; font-size: 28px; font-weight: bold; margin: 0 0 5px 0;">
                          ${results.roiMonths}
                        </p>
                        <p style="color: #6b7280; font-size: 12px; margin: 0;">Monate bis ROI</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Personalization -->
              <tr>
                <td style="padding: 0 30px 40px 30px;">
                  <div style="background-color: #f9fafb; border-left: 4px solid #f90093; padding: 20px; border-radius: 4px;">
                    <p style="color: #071013; font-size: 14px; font-weight: bold; margin: 0 0 10px 0;">
                      Basierend auf Ihren Angaben:
                    </p>
                    <ul style="color: #6b7280; font-size: 14px; margin: 0; padding-left: 20px;">
                      <li style="margin-bottom: 8px;">${input.numEmployees} Mitarbeiter im Unternehmen</li>
                      <li style="margin-bottom: 8px;">Schwerpunkt: ${getPriorityLabel(input.priority)}</li>
                      <li>Durchschnittlicher Stundenlohn: ${formatCurrency(input.hourlyWage)}</li>
                    </ul>
                  </div>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding: 0 30px 40px 30px; text-align: center;">
                  <p style="color: #071013; font-size: 16px; margin: 0 0 20px 0;">
                    Möchten Sie besprechen, wie wir das umsetzen?
                  </p>
                  <a href="https://calendly.com" style="display: inline-block; background: linear-gradient(135deg, #f90093, #ff4ecd); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 6px; font-weight: bold; font-size: 16px;">
                    Kostenloses Erstgespräch buchen
                  </a>
                  <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 0 0;">
                    30 Minuten • Unverbindlich • Sofort verfügbare Termine
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="color: #071013; font-size: 18px; font-weight: bold; margin: 0 0 10px 0;">
                    AI<span style="color: #f90093;">.</span>mation
                  </p>
                  <p style="color: #6b7280; font-size: 12px; margin: 0 0 15px 0;">
                    Automatisierung mit Intelligenz
                  </p>
                  <p style="color: #9ca3af; font-size: 11px; margin: 0;">
                    Diese E-Mail wurde automatisch generiert, weil Sie den KI-ROI-Rechner auf unserer Website genutzt haben.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: ROIResultsRequest = await request.json();

    // Validate required fields
    if (!data.email || !data.input || !data.results) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const emailHtml = createEmailHTML(data);

    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@ai-mation.de',
      to: data.email,
      subject: `Ihr KI-Potenzial: ${formatCurrency(data.results.annualSavings)} Einsparpotenzial`,
      html: emailHtml,
    });

    // Also send a copy to the business owner (optional)
    if (process.env.RESEND_TO_EMAIL) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@ai-mation.de',
        to: process.env.RESEND_TO_EMAIL,
        subject: `Neuer ROI-Rechner Lead: ${data.email}`,
        html: `
          <h2>Neuer Lead vom ROI-Rechner</h2>
          <p><strong>E-Mail:</strong> ${data.email}</p>
          <p><strong>Name:</strong> ${data.name || 'Nicht angegeben'}</p>
          <p><strong>Mitarbeiter:</strong> ${data.input.numEmployees}</p>
          <p><strong>Schwerpunkt:</strong> ${getPriorityLabel(data.input.priority)}</p>
          <p><strong>Berechnetes Potenzial:</strong> ${formatCurrency(data.results.annualSavings)}/Jahr</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      emailId: emailResult.data?.id,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
