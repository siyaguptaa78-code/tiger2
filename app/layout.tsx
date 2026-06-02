import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Tiger365 - Enjoy Fastest Odds with Live Dealers",
  description: "Register on Tiger365 and enjoy online sports betting on Cricket, Soccer, Tennis and Live Casino Table games with high-speed settlements and 24/7 dedicated support.",
  keywords: "tiger365, tiger365.in, tiger exchange, online betting, live casino, sports betting exchange, cricket betting ID",
  openGraph: {
    title: "Tiger365 - Enjoy Fastest Odds with Live Dealers",
    description: "Register on Tiger365 and enjoy online sports betting on Cricket, Soccer, Tennis and Live Casino Table games with high-speed settlements.",
    url: "https://www.tiger365.in",
    siteName: "Tiger365",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080c12] text-white">
        {children}
      </body>
    </html>
  );
}

