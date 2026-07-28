import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ilvelieroporticello.com";
const title = "Il Veliero | Bar, Panineria e Drinkerìa a Porticello";
const description =
  "Il Veliero a Porticello: colazioni, panini, aperitivi e cocktail su una terrazza vista mare.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Il Veliero",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 908,
        alt: "Il Veliero a Porticello, terrazza vista mare con spritz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
