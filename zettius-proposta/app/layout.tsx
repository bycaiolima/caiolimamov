import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposta Comercial | Zettius",
  description: "Proposta comercial de serviços audiovisuais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
