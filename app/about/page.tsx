import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { PageTitle } from "@/components/PageTitle";
import { SocialLink } from "@/components/SocialLink";
import { Section } from "lucide-react";
import { Quote } from "@/components/Quote";
import Image from "next/image";
import React from "react";
import {
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  VideosWorthWatching,
} from "../data/lifeApi";

const About = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
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
            {/* <div className="mt-6 text-base">{AboutExtended}</div> */}

            <Section>
              <h2 className="text-2xl">Work</h2>
              <div className="mt-4 text-base text-wrap">
                {" "}
                I&apos;m a software developer with over 13 years of experience.
                I started as a C/C++ developer, then transitioned to Android
                world and now I&apos;m mostly focused on developing great user
                experiences using React.
                <br />
                <br />I created multiple Android applications from scratch for
                companies around the world like{" "}
                <ExternalLink href={"https://www.visionmedia.com/"}>
                  VisionMedia
                </ExternalLink>
                ,{" "}
                <ExternalLink href={"https://www.dkms.org/en"}>
                  DKMS
                </ExternalLink>
                , <ExternalLink href={"https://www.aaa.com/"}>AAA</ExternalLink>
                ,{" "}
                <ExternalLink href={"https://polskapress.pl/pl"}>
                  PolskaPress
                </ExternalLink>{" "}
                or{" "}
                <ExternalLink href={"https://www.canaldigital.no/"}>
                  Canal Digital
                </ExternalLink>
                . I helped to create/review/design mobile applications for
                startups like{" "}
                <ExternalLink
                  href={
                    "https://play.google.com/store/apps/details?id=io.bimapp"
                  }>
                  Bim
                </ExternalLink>
                ,{" "}
                <ExternalLink href={"https://www.tastycloud.fr"}>
                  Tastycloud
                </ExternalLink>
                ,{" "}
                <ExternalLink
                  href={
                    "https://play.google.com/store/apps/details?id=com.howdyhub.howdy"
                  }>
                  Howdy
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink
                  href={
                    "https://play.google.com/store/apps/details?id=com.vikingco.vikingapp.poland"
                  }>
                  Mobile Vikings
                </ExternalLink>
                . I developed a WebRTC powered video conferencing frontend
                application using React.js/GraphQL/Typescript for{" "}
                <ExternalLink href={"https://www.evercast.us"}>
                  Evercast
                </ExternalLink>
                . I also had led development teams many times. If you&apos;d
                like to work with me{" "}
                <ExternalLink href="https://twitter.com/messages/compose?recipient_id=512460212">
                  DM me on Twitter
                </ExternalLink>{" "}
                or just{" "}
                <ExternalLink href="mailto:bartosz.jarocki@icloud.com">
                  email me.
                </ExternalLink>
              </div>
            </Section>
            <Section>
              <h2>Books worth re-reading</h2>
              <div className="mt-4 text-base text-wrap">
                {" "}
                <ul className="mt-1 list-disc list-inside">
                  {Books.map((book) => (
                    <li key={book.name}>
                      <ExternalLink href={book.link}>{book.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
            <Section>
              <h2>Podcasts I listen to</h2>
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
              <h2>Blogs I read</h2>
              <div className="mt-4 text-base text-wrap">
                {" "}
                <ul className="mt-1 list-disc list-inside">
                  {Blogs.map((blog) => (
                    <li key={blog.name}>
                      <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
            <Section>
              <h2>Videos worth watching</h2>
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
              <h2>People with unique perspective I follow</h2>
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
              <h2>Quote worth thinking about</h2>
              <div className="mt-4 text-base text-wrap">
                <div className="mt-8">
                  {/* <Quote quote={randomQuote.content} author={randomQuote.author} /> */}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
