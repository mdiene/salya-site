import type { Metadata } from "next";
import LegalPage from "../LegalPage";

export const metadata: Metadata = { title: "Conditions générales de vente | Salya", robots: { index: false } };

export default function Page() {
  return <LegalPage title="Conditions générales de vente" />;
}
