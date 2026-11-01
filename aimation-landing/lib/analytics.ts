/** Public website identifier, not an API key. This website belongs to the EU region. */
export const UMAMI_WEBSITE_ID = 'be8bd868-bc69-4b7a-94f4-90550f9351d6';
export const ANALYTICS_PREFERENCE_EVENT = 'aimation:analytics-preference';

type EventName = 'video-start' | 'video-complete' | 'contact-open' | 'contact-submit'
  | 'email-click' | 'phone-click' | 'booking-click';
type EventData = { video?: string; location?: string };
type Payload = Record<string, unknown>;

declare global {
  interface Window {
    umami?: { track: (name: string, data?: EventData) => Promise<unknown> | void };
    aimationBeforeSend?: (type: string, payload: Payload) => Payload | false;
  }
}

export function analyticsAllowed() {
  if (typeof window === 'undefined') return false;
  if (!['aimation.de', 'www.aimation.de'].includes(window.location.hostname)) return false;
  if (navigator.doNotTrack === '1' || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return false;
  try { return !window.localStorage.getItem('umami.disabled'); }
  catch { return false; }
}

/** Only campaign labels belong in analytics URLs, never form or arbitrary query values. */
export function analyticsUrl(value: string, referrer = false): string {
  try {
    const url = new URL(value, 'https://www.aimation.de');
    if (!['http:', 'https:'].includes(url.protocol)) return '';
    if (referrer) return url.origin;
    const campaign = new URLSearchParams();
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
      const label = url.searchParams.get(key);
      if (label && /^[a-zA-Z0-9_-]{1,100}$/.test(label)) campaign.set(key, label);
    }
    return url.pathname + (campaign.size ? `?${campaign}` : '');
  } catch { return ''; }
}

export function beforeAnalyticsSend(type: string, payload: Payload): Payload | false {
  if (!analyticsAllowed() || type !== 'event') return false;
  // Explicit allowlist also excludes user identifiers and arbitrary event properties.
  const clean: Payload = {};
  for (const key of ['website', 'hostname', 'language', 'screen', 'title', 'name']) {
    if (payload[key] !== undefined) clean[key] = payload[key];
  }
  clean.url = analyticsUrl(String(payload.url || '/'));
  clean.referrer = analyticsUrl(String(payload.referrer || ''), true);
  if (!payload.referrer) clean.referrer = '';
  const data = payload.data as EventData | undefined;
  if (data) {
    clean.data = {};
    for (const key of ['video', 'location'] as const) {
      const value = data[key];
      if (typeof value === 'string' && /^[a-zA-Z0-9_./-]{1,150}$/.test(value)) {
        (clean.data as EventData)[key] = value;
      }
    }
  }
  return clean;
}

/** Analytics must never prevent a contact form or navigation from completing. */
export async function trackEvent(name: EventName, data?: EventData): Promise<void> {
  if (!analyticsAllowed()) return;
  try {
    await Promise.race([
      Promise.resolve(window.umami?.track(name, data)),
      new Promise(resolve => setTimeout(resolve, 300)),
    ]);
  } catch { /* A blocker or a network failure must not interrupt the website. */ }
}
