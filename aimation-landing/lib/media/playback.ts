/** Keep separate on-page demos from speaking over one another. */
export function pauseOtherVideos(active: HTMLVideoElement) {
  active.ownerDocument.querySelectorAll('video').forEach((video) => {
    if (video !== active) video.pause();
  });
}
