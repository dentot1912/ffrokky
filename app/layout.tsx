import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FFrokky — Website Gift & UMKM",
  description:
    "Jasa pembuatan website gift personal (birthday, anniversary, ucapan spesial) dan website UMKM modern dengan pengerjaan cepat & interaktif.",
  keywords: ["website gift", "website ulang tahun", "website kado", "website UMKM", "FFrokky", "portfolio"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "FFrokky — Website Gift & UMKM",
    description: "Bikin Momen Spesial Jadi Makin Berkesan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
