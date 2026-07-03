import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quesos Festa · Quesos frescos artesanales desde 1989",
  description:
    "Quesos frescos artesanales, elaboración estilo italiano, enteramente sin TACC. Más de 35 años de tradición familiar.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
