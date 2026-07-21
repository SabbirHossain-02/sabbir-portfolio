"use client";

import { useState } from "react";

/**
 * Hero portrait. Tries the real photo (public/portrait.png) and falls back to
 * a navy silhouette placeholder until the client drops their image in.
 * A plain <img> is used (not next/image) so the onError swap is trivial.
 */
export function Portrait({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? "/portrait-placeholder.svg" : src}
      onError={() => setFailed(true)}
      alt="Sabbir Hosen"
      className="h-full w-full object-cover object-top"
      draggable={false}
    />
  );
}
