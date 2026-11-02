/**
 * VideoObject expects a timezone-qualified DateTime. Our legacy catalogue stores
 * publication days, not measured upload times. Encode that day at its start in
 * Europe/Berlin, preserving day-level precision in the source/visible date.
 * An explicitly recorded timestamp is passed through unchanged.
 */
export function videoUploadDate(value: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(`${value}T00:00:00Z`);
  const offset = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin', timeZoneName: 'longOffset', hour: '2-digit',
  }).formatToParts(date).find(part => part.type === 'timeZoneName')!.value.replace('GMT', '');
  return `${value}T00:00:00${offset}`;
}
