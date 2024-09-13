import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({ weight: ['500', '600'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Física - Balança",
  description: "Ciências da Natureza e suas Tecnologias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="[&::-webkit-scrollbar]:hidden scroll-smooth">
       <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={`${montserrat.className} `}>{children}</body>
    </html>
  );
}
