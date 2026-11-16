import type { Metadata } from "next";
import LegalPage from "../LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité | Salya", robots: { index: false } };

export default function Page() {
  return <LegalPage title="Politique de confidentialité" />;
}
