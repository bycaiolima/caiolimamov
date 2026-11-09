import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caio Lima — Proposta Comercial | Zettius",
  description: "Proposta comercial de serviços de captação e pós-produção audiovisual para a Zettius.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
