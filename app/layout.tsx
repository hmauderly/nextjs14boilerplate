import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import Script from 'next/script'

type Props = {
  params: {
    slug: string;
    path: string;
  };

};

const raleway = Raleway({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Religio.fr',
  description:'Plongez dans la diversité des croyances mondiales à travers des articles approfondis, des événements religieux, et une vaste collection de ressources éducatives pour une exploration complète des religions du monde.',
  category: 'Religion',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
    languages: {
      'fr-FF': '/fr-FR',
    },

  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="fr" data-theme="cupcake">
      <head>

        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.PUBLIC_GOOGLE_ANALYTICS}});
          `}
        </Script>
      </head>
      <body className={raleway.className}>{children}</body>

      </html>
  );
}
