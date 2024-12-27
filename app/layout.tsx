import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Starter from "./Starter";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title: "Dheeraj Vithalkar",
  description: "Portfolio Website",
  openGraph: {
    title: "Dheeraj Vithalkar | Above and beyond a Full-stack Engineer",
    description:
      "Take a look at my : Portfolio Website | Work Repository | Website",
    type: "website",
    locale: "en_US",
    url: `${process.env.URL}`,
    siteName: "Portfolio Website",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
