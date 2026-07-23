import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://quesosfesta.com.ar";

const title = "Quesos Festa · Quesos frescos artesanales desde 1989";
const description =
  "Quesos frescos artesanales elaborados a mano estilo italiano: burrata, mascarpone, stracciatella y más. Enteramente sin TACC. Más de 35 años de tradición familiar en Argentina.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Quesos Festa",
    title,
    description,
    images: [
      {
        url: "/assets/photos/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quesos frescos artesanales Quesos Festa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/photos/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quesos Festa",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo/festa-logo.jpg`,
  description,
  sameAs: ["https://instagram.com/quesosfesta", "https://www.facebook.com/festaquesos"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-11-4991-4156",
    contactType: "sales",
    email: "ventas@quesosfesta.com.ar",
    areaServed: "AR",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout, not pages/_document */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&family=Parisienne&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B3R8MFW5VF"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B3R8MFW5VF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  );
}