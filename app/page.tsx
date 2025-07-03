"use client";
import { Container } from "@/components/Container";
import Image from "next/image";
import Head from "next/head";
import { About, Meeting, Name } from "./data/lifeApi";
import Work from "@/components/Work";
import { Resume } from "@/components/Resume";

const Home = () => {
  // ✨ NEW — extra JSON‑LD blocks
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // or "Restaurant"
    name: "Dave's Steak House",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "148 W 51st St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10019",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.761293,
      longitude: -73.982294,
    },
    telephone: "+12122459600",
    url: "https://drjvtlkr.com",
    priceRange: "$$$",
    servesCuisine: "American",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", name: "Dave's Steak House" },
    reviewRating: { "@type": "Rating", ratingValue: 4, bestRating: 5 },
    author: { "@type": "Person", name: "Bob Smith" },
  };

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Dheeraj Vithalkar",
      alternateName: "drjvtlkr",
      url: "https://drjvtlkr.com",
      image: "https://avatars.githubusercontent.com/drjvtlkr",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I build WABA‑integrated, analytics‑ready websites with modern design.",
        },
      },
      {
        "@type": "Question",
        name: "How can we start a project together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schedule a quick discovery call using the link in the hero section.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Dheeraj Vithalkar – Full-stack Web Developer</title>
        <meta
          name="description"
          content="I build WABA-integrated websites with analytics and modern design."
        />

        {/* existing WebSite schema — unchanged */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dheeraj Vithalkar",
              url: "https://drjvtlkr.com",
              description:
                "Full-stack web developer building WABA-connected websites with analytics and modern design.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://drjvtlkr.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✨ NEW schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <Container className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 text-gray-600 transition-opacity duration-100">
        <div className="mx-auto max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl lg:px-8 bg-gray-50 border p-6 sm:p-8 md:p-10 rounded-xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-center mb-6 sm:mb-8">
            I am <br />
            <span className="text-gray-600">{Name}</span>
          </h1>
          <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="flex justify-center animate-fadeInRight">
              <div className="w-48 sm:w-36 md:w-48 lg:w-56 xl:w-64 rounded-full overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/drjvtlkr"
                  alt="Dheeraj Image"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  width={400}
                  height={400}
                  className="aspect-square object-cover"
                />
              </div>
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed animate-fadeInLeft">
              <div className="px-4 sm:px-8 md:px-12 lg:px-16">{About}</div>
            </div>
          </div>
          <div className="flex justify-center gap-3 items-center underline mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            {Meeting}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Resume />
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Work />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
