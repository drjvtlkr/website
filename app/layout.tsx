import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Cursor from "@/components/Cursor";

// This is to import the font styles
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
  // Check if window is available to ensure client-side only execution
  if (typeof window !== "undefined") {
    // Wait until the document is fully loaded before adding the event listeners
    window.onload = () => {
      const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
      const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;

      if (cursorDot && cursorOutline) {
        // Set up the mousemove event listener
        window.addEventListener("mousemove", (e) => {
          const posX = e.clientX;
          const posY = e.clientY;

          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;

          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;
        });
      }
    };
  }

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
