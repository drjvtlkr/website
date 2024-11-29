"use client";
import { Container } from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { About, Name } from "./data/lifeApi";
import OfficialProjects from "@/components/OfficialProjects";
import PersonalProjects from "@/components/PersonalProjects";
import FreelanceProjects from "@/components/FreelanceProjects";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingScreenHeight, setLoadingScreenHeight] = useState("100%");

  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      new Typed(typedElement.current, {
        strings: [
          "Dheeraj Vithalkar",
          "Software Engineer",
          "Fullstack Engineer",
          "Product Engineer",
        ],
        typeSpeed: 30,
        backSpeed: 25,
        backDelay: 10,
        loop: false,
        onComplete: () => {
          setTimeout(() => {
            setLoadingScreenHeight("0%");
            setTimeout(() => setIsLoading(false), 500);
          }, 500);
        },
      });
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 transition-all duration-500`}
          style={{
            zIndex: 9999,
            height: loadingScreenHeight,
          }}>
          <h1 className="text-4xl text-white font-bold">
            <span ref={typedElement}></span>
          </h1>
        </div>
      )}

      {!isLoading && (
        <Container className="mt-16 sm:mt-32 text-gray-600 transition-opacity duration-100">
          <div className="mx-auto max-w-7xl lg:px-8 bg-gray-50 border p-10 rounded-xl">
            <h1 className="text-7xl float-start">
              I am <br />
              <span className="text-8xl">{Name}</span>
            </h1>
            <div className="gird grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    src="https://avatars.githubusercontent.com/drjvtlkr"
                    alt="Dheeraj Image"
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    width={400}
                    height={400}
                    className="aspect-square rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>
              </div>
            </div>
            {About}
            <div>
              <OfficialProjects />
            </div>
            <div>
              <PersonalProjects />
            </div>
            <div>
              <FreelanceProjects />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
