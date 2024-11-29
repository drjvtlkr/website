"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©{currentYear}
            <Link href="#" className="hover:underline">
              {" "}
              drjvtlkr™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
