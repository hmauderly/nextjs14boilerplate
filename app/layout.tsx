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
  title: "Religio",
  description: "Plongez dans la diversité des religions et croyances mondiales",
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
