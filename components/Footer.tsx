"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="flex justify-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                className="inline-flex h-12 w-12 items-center max-w-24 min-w-24 text-lg justify-center rounded-full bg-gray-500 transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300">
                <a href="/" className="text-white">
                  Home&uarr;
                </a>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>Move to Home</HoverCardContent>
          </HoverCard>
        </div>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©{currentYear}
            <a href="#" className="hover:underline">
              {" "}
              drjvtlkr™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
