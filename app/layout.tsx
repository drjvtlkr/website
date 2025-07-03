import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Starter from "./Starter";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

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
    title: "Dheeraj Vithalkar | Growth Partner for Local Businesses ",
    description: "Helping Local Businesses Grow to their Full Potential",
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
      <Head>
        <title>
          Finding an apprenticeship - Frequently Asked Questions(FAQ)
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to find an apprenticeship?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>",
                  },
                },
                {
                  "@type": "Question",
                  name: "Whom to contact?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body className={`${roboto.className} antialiased`}>
        <Starter>{children}</Starter>
        <Analytics />
      </body>
    </html>
  );
}
