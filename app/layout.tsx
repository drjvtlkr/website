import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Cursor from "@/components/Cursor";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dheeraj Vithalkar",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Cursor/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
