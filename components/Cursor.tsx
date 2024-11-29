"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;
    const centerX = window.innerWidth/2;
    const centerY = window.innerHeight/2;

    const cursorTransitionDuration = 0.25;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: cursorTransitionDuration, ease:"power2.out"});
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 ,duration: cursorTransitionDuration, ease:"power2.out"});
        cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4, duration: cursorTransitionDuration,ease:"power2.out" });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 4, duration: cursorTransitionDuration, ease:"power2.out" });
      cursorText.style.display = "none";
    };

    const onWindowBlur =()=>{
        gsap.to(cursor, {scale:4, duration:cursorTransitionDuration, x:centerX, y:centerY,ease:"power2.out"})
    }

    const onWindowFocus = ()=>{
        gsap.to(cursor,{duration:cursorTransitionDuration, scale: 4, ease:"power2.out"})
    }

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("focus", onWindowFocus)

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
