import type { Metadata, Viewport } from "next";
import "./globals.css";
import KitScripts from "./KitScripts";
import Intro from "./Intro";

const TITLE = "Salya : la paie et les RH du Sénégal, sans tableur";
const DESC =
  "Salya RH, de la gamme Salya (Groupe Mozaic) : calcul, relecture, approbation et règlement de la paie en FCFA, congés et dossiers des salariés. Version de test, données fictives.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  icons: { icon: "/favicon.svg" },
  openGraph: { title: TITLE, description: DESC, type: "website", locale: "fr_SN" },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "software", "page-type": "software" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf5ec",
};

// Palette Salya (client) passée à start.mjs brand, avec le fond nuit #161A3A pour les sections sombres.
const ROOT = `:root{
  --p-bg:#faf5ec;--p-surface:#f1eadc;--p-ink:#1a1a24;--p-muted:#4a4a5a;
  --p-accent:#c8441f;--p-accent-ink:#ffffff;--p-action:#c8441f;--p-action-ink:#ffffff;
  --p-inv-bg:#161a3a;--p-inv-surface:#232857;--p-inv-ink:#faf5ec;--p-inv-muted:#b9b7d0;
  --p-inv-accent:#f5b83d;--p-inv-accent-ink:#161a3a;--p-inv-action:#c8441f;--p-inv-action-ink:#ffffff;
  --font-display:"Bricolage Grotesque",system-ui,sans-serif;
  --font-text:"Figtree",system-ui,sans-serif;
  --font-mono:"DM Mono",ui-monospace,Menlo,Consolas,monospace;
  --display-weight:400;--display-tracking:-0.03em;--display-tracking-xl:-0.04em;--display-stretch:96%;
}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-type="software" data-radius="soft" data-ground="sand" data-buttons="arrow" data-motion suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/bricolage-grotesque-latin-standard.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/layout/demo.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/ui/base.css" />
        <link rel="stylesheet" href="/assets/moments/word-highlight/moment.css" />
        <style dangerouslySetInnerHTML={{ __html: ROOT }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter','mo-js');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500)",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('salya-intro')){document.documentElement.classList.add('intro-on')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <Intro />
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
