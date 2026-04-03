import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./generic/components/Header";
import Footer from "./generic/components/Footer";

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
      className={`${outfit.variable} h-full antialiased w-full overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col max-w-650 mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
