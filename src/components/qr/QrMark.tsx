"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";

export function QrMark({ path, label }: { path: string; label: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const url = `${window.location.origin}${path}`;
    void QRCode.toDataURL(url, {
      margin: 1,
      width: 360,
      color: { dark: "#2a1a10", light: "#fffaf3" },
    }).then(setSrc);
  }, [path]);

  if (!src) {
    return <div className="grid h-40 w-40 place-items-center rounded-xl bg-cream text-xs text-bark">Preparando QR…</div>;
  }

  return <img src={src} alt={label} width={160} height={160} className="h-40 w-40 rounded-xl" />;
}
