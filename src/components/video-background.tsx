"use client";

import { useEffect, useState } from "react";

export function VideoBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    // Safari fallback
    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {reduceMotion ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/space-poster.svg)" }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-110 saturate-125"
          poster="/images/space-poster.svg"
        >
          <source src="/videos/futuristic.webm" type="video/webm" />
          <source src="/videos/futuristic.mp4" type="video/mp4" />
          <source src="/videos/space.webm" type="video/webm" />
          <source src="/videos/space.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.72)_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.14),transparent_42%)]" />
    </div>
  );
}
