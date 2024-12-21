"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Starter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem("hasVisited");
    if (isFirstVisit) {
      sessionStorage.setItem("hasVisited", "true");
    }
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 7000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader onLoaded={handleLoaderComplete} />
      ) : (
        <div>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}
