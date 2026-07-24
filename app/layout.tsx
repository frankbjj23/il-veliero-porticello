import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Il Veliero | Bar, Panineria e Drinkerìa a Porticello",
  description:
    "Il Veliero a Porticello: colazioni, panini, aperitivi e cocktail su una terrazza vista mare.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
