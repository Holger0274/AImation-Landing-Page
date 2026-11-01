'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { ANALYTICS_PREFERENCE_EVENT, analyticsAllowed, beforeAnalyticsSend, trackEvent, UMAMI_WEBSITE_ID } from '@/lib/analytics';

export default function UmamiAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    window.aimationBeforeSend = beforeAnalyticsSend;
    const update = () => setEnabled(analyticsAllowed());
    update();
    window.addEventListener(ANALYTICS_PREFERENCE_EVENT, update);
    window.addEventListener('storage', update);

    // Capture also reaches dynamically mounted players; play/ended do not bubble.
    const started = new WeakMap<HTMLVideoElement, Set<string>>();
    const completed = new WeakMap<HTMLVideoElement, Set<string>>();
    const videoEvent = (event: Event) => {
      const video = event.target;
      if (!(video instanceof HTMLVideoElement) || video.autoplay) return;
      const source = new URL(video.currentSrc || video.src, window.location.href);
      if (source.origin !== window.location.origin || !source.pathname.startsWith('/videos/')) return;
      const videoId = source.pathname.replace('/videos/', '').replace(/\.[^.]+$/, '');
      const key = `${window.location.pathname}:${videoId}`;
      const seen = event.type === 'play' ? started : completed;
      const keys = seen.get(video) || new Set<string>();
      if (keys.has(key)) return;
      keys.add(key);
      seen.set(video, keys);
      void trackEvent(event.type === 'play' ? 'video-start' : 'video-complete', { video: videoId });
    };
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.protocol === 'mailto:') void trackEvent('email-click');
      else if (url.protocol === 'tel:') void trackEvent('phone-click');
      else if (url.hostname === 'calendly.com') void trackEvent('booking-click');
    };
    document.addEventListener('play', videoEvent, true);
    document.addEventListener('ended', videoEvent, true);
    document.addEventListener('click', click, true);
    return () => {
      window.removeEventListener(ANALYTICS_PREFERENCE_EVENT, update);
      window.removeEventListener('storage', update);
      document.removeEventListener('play', videoEvent, true);
      document.removeEventListener('ended', videoEvent, true);
      document.removeEventListener('click', click, true);
    };
  }, []);

  if (!enabled) return null;
  return <Script
    id="aimation-umami"
    src="https://cloud.umami.is/script.js"
    strategy="afterInteractive"
    data-website-id={UMAMI_WEBSITE_ID}
    data-domains="aimation.de,www.aimation.de"
    data-exclude-hash="true"
    data-do-not-track="true"
    data-before-send="aimationBeforeSend"
  />;
}
