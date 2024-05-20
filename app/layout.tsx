import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
