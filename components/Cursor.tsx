"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cursorTransitionDuration = 0.25;
    let inactivityTimeout: NodeJS.Timeout;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        scale: 2,
        duration: cursorTransitionDuration,
        ease: "power2.out",
      });

      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        gsap.to(cursor, {
          scale: 1,
          duration: cursorTransitionDuration,
          ease: "power2.out",
        });
      }, 1000);
    };

    const onWindowBlur = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: cursorTransitionDuration,
        x: centerX,
        y: centerY,
        ease: "power2.out",
      });
    };

    const onWindowFocus = () => {
      gsap.to(cursor, { duration: cursorTransitionDuration, scale: 1, ease: "power2.out" });
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("focus", onWindowFocus);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("focus", onWindowFocus);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
    </div>
  );
};

export default Cursor;
