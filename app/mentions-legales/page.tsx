import type { Metadata } from "next";
import LegalPage from "../LegalPage";

export const metadata: Metadata = { title: "Mentions légales | Salya", robots: { index: false } };

export default function Page() {
  return <LegalPage title="Mentions légales" />;
}
