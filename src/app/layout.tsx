import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PanelaIA · Nocaima Dulce Origen",
    template: "%s · PanelaIA",
  },
  description:
    "Mesa de mando del trapiche comunitario de Nocaima: gemelo 3D, telemetría, trazabilidad por lote y fondo de retiro cooperativo.",
};

export const viewport: Viewport = {
  themeColor: "#140e09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
