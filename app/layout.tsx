import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./generic/components/Header";
import Footer from "./generic/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carmine Corino",
  description: "Redefining Financial Advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased w-full overflow-x-hidden overflow-y-auto bg-[#1C1C1A]`}
    >
      <body className="min-h-full flex flex-col max-w-650 mx-auto overflow-hidden" suppressHydrationWarning>
        <NextTopLoader color="#cc401a" showSpinner={false} />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
