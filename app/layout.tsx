import type { Metadata } from "next";
import "./globals.css";
import { Kantumruy_Pro } from "next/font/google";
import { Koh_Santepheap } from "next/font/google";
import { Lato } from "next/font/google";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kantumruy",
});

const kohSantepheap700 = Koh_Santepheap({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-koh-santepheap-700",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const kohSantepheap400 = Koh_Santepheap({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-koh-santepheap-400",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "MTPC Web",
  description: "From MPTC Intern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kantumruyPro.variable} ${kohSantepheap700.variable} ${lato.variable}`}
    >
      <body className="antialiased font-kantumruy">{children}</body>
    </html>
  );
}
