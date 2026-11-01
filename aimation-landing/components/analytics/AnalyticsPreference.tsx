'use client';

import { useEffect, useState } from 'react';
import { ANALYTICS_PREFERENCE_EVENT } from '@/lib/analytics';

export default function AnalyticsPreference() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    try { setDisabled(Boolean(localStorage.getItem('umami.disabled'))); }
    catch { setError(true); }
  }, []);
  function toggle() {
    try {
      if (disabled) localStorage.removeItem('umami.disabled');
      else localStorage.setItem('umami.disabled', '1');
      setDisabled(!disabled);
      window.dispatchEvent(new Event(ANALYTICS_PREFERENCE_EVENT));
    } catch { setError(true); }
  }
  return <div className="mb-4">
    <button type="button" onClick={toggle} disabled={error} aria-pressed={disabled} className="min-h-11 rounded-lg border border-current px-4 py-2 text-soft-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
      {disabled ? 'Statistik für diesen Browser wieder zulassen' : 'Statistik für diesen Browser deaktivieren'}
    </button>
    <p role="status" className="mt-2 text-sm text-soft-black">
      {error ? 'Ihr Browser blockiert den lokalen Speicher. Die Statistik bleibt deaktiviert.' : disabled ? 'Ihre Besuche werden in diesem Browser nicht mehr erfasst.' : 'Sie können der statistischen Erfassung hier widersprechen. Do Not Track und Global Privacy Control werden zusätzlich berücksichtigt.'}
    </p>
  </div>;
}
