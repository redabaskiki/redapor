"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothParallax = () => {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current || !container.current) return;

      gsap.to(imageRef.current, {
        // Move the image upward as we scroll
        // -50% (or more) depending on how much "overflow" you want to show
        y: "-30%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // Start when container hits bottom of viewport
          end: "bottom top", // End when container leaves top of viewport
          scrub: 1.5, // This adds the "smoothness" (1.5s delay catch-up)
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="h-150 w-full overflow-hidden relative border border-slate-800"
    >
      <Image
        ref={imageRef}
        src="/code.JPG" // Use your actual image path
        alt="Parallax effect"
        width={800}
        height={800}
        priority
        className="relative top-0 left-0 w-full h-[150%] object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
        {/* Change these classes to style your text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
       
       Welcome </h1>
      </div>{" "}
    </div>
  );
};

export default SmoothParallax;
