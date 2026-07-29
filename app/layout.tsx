import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ilvelieroporticello.com";
const title = "Il Veliero | Bar, Panineria e Drinkerìa a Porticello";
const description =
  "Il Veliero a Porticello: colazioni, panini, aperitivi e cocktail su una terrazza vista mare.";
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "Il Veliero",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  telephone: "+39 327 620 4411",
  priceRange: "€",
  servesCuisine: ["Panini", "Cocktail", "Caffetteria"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Francesco Zizzo, 41",
    addressLocality: "Porticello",
    postalCode: "90017",
    addressRegion: "PA",
    addressCountry: "IT",
  },
  hasMenu: `${siteUrl}/#menu`,
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=Il%20Veliero%20Porticello&query_place_id=ChIJJ6wKfAjjGRMReaFJXp_FxX8",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
