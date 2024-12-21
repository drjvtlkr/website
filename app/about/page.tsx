import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { PageTitle } from "@/components/PageTitle";
import { SocialLink } from "@/components/SocialLink";
import { Section } from "@/components/Section";
import { Quote } from "@/components/Quote";
import Image from "next/image";
import React, { useMemo } from "react";
import {
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  VideosWorthWatching,
  Quotes,
  SocialMedia,
  AboutExtended,
} from "../data/lifeApi";
import { Metadata } from "next";

export const  metadata : Metadata= {
  title: "About Me",
  description:"A few words about me."
}

const About = () => {
  const randomQuote = useMemo(
    () => Quotes[Math.floor(Math.random() * Quotes.length)],
    []
  );

  return (
    <>
      <Container className="mt-16 sm:mt-32 text-gray-600">
        <div className="mx-auto max-w-7xl lg:px-8 bg-gray-50 border p-10 rounded-xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src="https://avatars.githubusercontent.com/drjvtlkr"
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  width={400}
                  height={400}
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <PageTitle>Hi, I&apos;m Dheeraj Vithalkar.</PageTitle>
              <div className="mt-6 text-base">{AboutExtended}</div>
              <div className="mt-6 flex gap-6">
                {SocialMedia.map((socialProfile) => (
                  <SocialLink
                    key={socialProfile.name}
                    aria-label={`Follow on ${socialProfile.name}`}
                    href={socialProfile.link}
                    icon={socialProfile.icon}
                  />
                ))}
              </div>
              <Section>
                <Section.Title as="h2">Work</Section.Title>
                <div className="mt-4 text-base text-wrap">
                  {" "}
                  I&apos;m a software developer with over a year of experience.
                  I started as a frontend developer and now I&apos;m mostly
                  focused on developing Fullstack Applications with great user
                  experiences using React and NextJS.
                  <br />
                  <br />
                  I have been interested in building sophisticated backends
                  using Golang and Rust. Although Rust has been giving me some
                  hard time learning it, Golang has defiently been the one with
                  better learning curve.
                  <br />
                  <br />I created multiple Fullstack applications from scratch
                  for companies I worked and outside of it as a Freelancer.
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">Books worth re-reading</Section.Title>
                <div className="mt-4 text-base text-wrap">
                  {" "}
                  <ul className="mt-1 list-disc list-inside">
                    {Books.map((book) => (
                      <li key={book.name}>
                        <ExternalLink href={book.link}>
                          {book.name}
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">Podcasts I listen to</Section.Title>
                <div className="mt-4 text-base text-wrap">
                  {" "}
                  <ul className="mt-1 list-disc list-inside">
                    {Podcasts.map((podcast) => (
                      <li key={podcast.name}>
                        <ExternalLink href={podcast.link}>
                          {podcast.name}
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">Blogs I read</Section.Title>
                <div className="mt-4 text-base text-wrap">
                  {" "}
                  <ul className="mt-1 list-disc list-inside">
                    {Blogs.map((blog) => (
                      <li key={blog.name}>
                        <ExternalLink href={blog.link}>
                          {blog.name}
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">Videos worth watching</Section.Title>
                <div className="mt-4 text-base text-wrap">
                  <ul className="mt-1 list-disc list-inside">
                    {VideosWorthWatching.map((video) => (
                      <li key={video.name}>
                        <ExternalLink href={video.link}>
                          {video.name}
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">
                  People with unique perspective I follow
                </Section.Title>
                <div className="mt-4 text-base text-wrap">
                  {PeopleWorthFollowingOnTwitter.map<React.ReactNode>(
                    (personOnTwitter) => (
                      <ExternalLink
                        key={personOnTwitter.name}
                        href={personOnTwitter.link}>
                        {personOnTwitter.name}
                      </ExternalLink>
                    )
                  ).reduce((prev, curr) => [prev, ", ", curr])}
                  .
                </div>
              </Section>
              <Section>
                <Section.Title as="h2">
                  Quote worth thinking about
                </Section.Title>
                <div className="mt-4 text-base text-wrap">
                  <div className="mt-8">
                    <Quote
                      quote={randomQuote.content}
                      author={randomQuote.author}
                    />
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
