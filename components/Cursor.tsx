"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    // Check for mobile screen size
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // If it's a mobile device, don't apply the custom cursor
      return;
    }

    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cursorTransitionDuration = 0.25;

    // Mouse move event handler
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: cursorTransitionDuration,
        ease: "power2.out",
      });
    };

    // Mouse enter link event handler
    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4, duration: cursorTransitionDuration, ease: "power2.out" });
        cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4, duration: cursorTransitionDuration, ease: "power2.out" });
      }
    };

    // Mouse leave link event handler
    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: cursorTransitionDuration, ease: "power2.out" });
      cursorText.style.display = "none";
    };

    // Window blur event handler
    const onWindowBlur = () => {
      gsap.to(cursor, { scale: 4, duration: cursorTransitionDuration, x: centerX, y: centerY, ease: "power2.out" });
    };

    // Window focus event handler
    const onWindowFocus = () => {
      gsap.to(cursor, { duration: cursorTransitionDuration, scale: 1, ease: "power2.out" });
    };

    // Add event listeners for mouse and window events
    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("focus", onWindowFocus);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("focus", onWindowFocus);
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">Cursor</span>
    </div>
  );
};

export default Cursor;
