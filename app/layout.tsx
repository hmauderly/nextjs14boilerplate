import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Menu from "@/app/ui/Menu";
import React from "react";

type Props = {
  params: {
    slug: string;
    path: string;
  };

};

const raleway = Raleway({ subsets: ["latin"] });


export const metadata: Metadata = {
  category: 'Religion',

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

      <body className={raleway.className}>{children}</body>
    </html>
  );
}
