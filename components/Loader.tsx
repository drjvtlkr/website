"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [loadingScreenHeight, setLoadingScreenHeight] = useState("100%");
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      new Typed(typedElement.current, {
        strings: [
          "Dheeraj Vithalkar",
          "Product Engineer",
        ],
        typeSpeed: 30,
        backSpeed: 25,
        backDelay: 10,
        loop: false,
        onComplete: () => {
          setTimeout(() => {
            setLoadingScreenHeight("0%");
            setTimeout(() => {
              onLoaded();
            }, 500);
          }, 500);
        },
      });
    }
  }, [onLoaded]);

  return (
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
  );
};

export default Loader;
