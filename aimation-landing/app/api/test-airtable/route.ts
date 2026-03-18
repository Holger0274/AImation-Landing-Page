import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'ROI-Rechner Leads';

  if (!apiKey || !baseId) {
    return NextResponse.json({ error: 'Nicht konfiguriert', apiKey: !!apiKey, baseId: !!baseId });
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Name': 'Debug Test',
          'E-Mail': 'debug@test.de',
          'Status': 'Neu',
        }
      }),
    });

    const responseText = await response.text();

    return NextResponse.json({
      url,
      tableName,
      status: response.status,
      ok: response.ok,
      response: responseText,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) });
  }
}
