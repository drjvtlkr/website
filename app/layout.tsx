import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Starter from "./Starter";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title: "Dheeraj Vithalkar",
  description: "Website",
  openGraph:{
    title: "Dheeraj Vithalkar",
    description:"My Portfolio Website",
    type:"website",
    locale:"en_US",
    url: process.env.URL,
    siteName:"Portfolio Website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Starter>{children}</Starter>
      </body>
    </html>
  );
}
