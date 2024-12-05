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
        <Starter>{children}</Starter> {/* Pass children here */}
      </body>
    </html>
  );
}
