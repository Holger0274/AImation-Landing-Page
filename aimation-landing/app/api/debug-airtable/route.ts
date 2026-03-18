import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'ROI-Rechner Leads';

  if (!apiKey || !baseId) {
    return NextResponse.json({ error: 'Not configured', apiKey: !!apiKey, baseId: !!baseId });
  }

  const results: Record<string, unknown> = {
    baseId,
    tableName,
    keyLength: apiKey.length,
    keyStart: apiKey.substring(0, 12),
  };

  // Test 1: with env tableName
  const r1 = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  results.test_envName = { status: r1.status, body: await r1.text() };

  // Test 2: with "Leads"
  const r2 = await fetch(
    `https://api.airtable.com/v0/${baseId}/Leads`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  results.test_Leads = { status: r2.status, body: await r2.text() };

  // Test 3: list all tables in base via metadata API
  const r3 = await fetch(
    `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  results.meta_tables = { status: r3.status, body: await r3.text() };

  return NextResponse.json(results);
}
