import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smart Dealer Hub",
  description:
    "Smart Dealer Hub is a modern admin dashboard designed specifically for car dealerships. The goal is to provide a streamlined, intuitive, and centralized platform to efficiently manage core business operations, including vehicle inventory, sales tracking, customer information, and reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen antialiased font-sans">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
