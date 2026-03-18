export async function createAirtableRecord(
  fields: Record<string, string | number | null>
): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'ROI-Rechner Leads';

  if (!apiKey || !baseId) {
    throw new Error('Airtable not configured');
  }


  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Airtable error: ${error}`);
  }
}
