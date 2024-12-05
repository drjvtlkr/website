"use client";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import OfficialProjects from "@/components/OfficialProjects";
import PersonalProjects from "@/components/PersonalProjects";
import FreelanceProjects from "@/components/FreelanceProjects";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const officialRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const freelanceRef = useRef<HTMLDivElement>(null);

  const [visibleSections, setVisibleSections] = useState({
    official: false,
    personal: false,
    freelance: false,
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (officialRef.current) observer.observe(officialRef.current);
    if (personalRef.current) observer.observe(personalRef.current);
    if (freelanceRef.current) observer.observe(freelanceRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 text-gray-600">
      <div className="mx-auto max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl lg:px-8 bg-gray-50 border p-6 sm:p-8 md:p-10 rounded-xl">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:justify-start lg:pl-20">
            <div className="w-32 sm:w-48 md:w-64 lg:w-full max-w-xs px-2.5 lg:max-w-none">
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-center mb-6 sm:mb-8">
              <span className="text-gray-600">
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Engineer",
                      "Software Engineer",
                      "Product Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                  }}
                />
              </span>
            </h1>
          </div>
        </div>
        <div
          id="official"
          ref={officialRef}
          className={`transition-opacity duration-1000 transform ${
            visibleSections.official
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}>
          <OfficialProjects />
        </div>
        <div
          id="freelance"
          ref={freelanceRef}
          className={`transition-opacity duration-1000 transform ${
            visibleSections.freelance
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}>
          <FreelanceProjects />
        </div>
        <div
          id="personal"
          ref={personalRef}
          className={`transition-opacity duration-1000 transform ${
            visibleSections.personal
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}>
          <PersonalProjects />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
