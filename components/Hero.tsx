"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// Register Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin);
}

// Define props to accept the timeline
interface HeroProps {
  timeline: gsap.core.Timeline | undefined;
}
     const playClickSound = () => {
       const audio = new Audio("/notif.wav");
       audio.volume = 0.3;
       audio.play().catch(() => {});
     };

     const playSuccessSound = () => {
       const audio = new Audio("/succes.wav");
       audio.volume = 0.2;
       audio.play().catch(() => {});
     };
const Hero: React.FC<HeroProps> = ({ timeline }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      // Only add to timeline if it exists
      if (timeline && pathRef.current) {
        // 1. Set initial state: transparent fill, visible stroke
        timeline.set(pathRef.current, {
          fill: "transparent",
          stroke: "black",
          strokeWidth: 1,
        });

        // 2. Add the DrawSVG animation to the shared timeline
        // Using ">" makes it start after the previous animation (Intro) finishes
        timeline
          .from(
            pathRef.current,
            {
              drawSVG: "10% 90%",
              duration: 4,
              ease: "power2.inOut",
              attr: {
                fill: "none",
              },
            },
            "+1",
          )

          // 3. Fade the fill back in once drawn
          .to(pathRef.current, {
            fill: "url(#heroNameGradient)",
            duration: 1,
          });
      }
 
      const xSetter = gsap.quickSetter("#eye1, #eye2", "x", "px");
      const ySetter = gsap.quickSetter("#eye1, #eye2", "y", "px");

      const mapX = gsap.utils.mapRange(0, window.innerWidth, -25, 100);
      const mapY = gsap.utils.mapRange(0, window.innerHeight, -25, 100);

      const handleMouseMove = (e: MouseEvent) => {
        xSetter(mapX(e.clientX));
        ySetter(mapY(e.clientY));
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: heroRef, dependencies: [timeline] },
  );

  return (
    <div
      ref={heroRef}
      className="flex flex-col justify-center md:flex-row text-center lg:text-start gap-5 my-15 mx-3"
    >
      <div className="flex justify-center lg:w-1/2">
        <Image
          src="/hero2.JPG"
          alt="Hero"
          width={600}
          height={600}
          className="object-cover rounded-2xl h-[500px] w-[500px] md:h-[600px] md:w-[600px] lg:h-[650px] lg:w-[700px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 lg:items-start lg:w-[30%]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="444"
            height="235"
            fill="none"
            viewBox="0 0 444 235"
          >
            <defs>
              <linearGradient
                id="heroNameGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#2C687B" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              fill="#fff"
              d="M63.36 76.08c1.56 3.48 4.8 6.36 8.64 7.32H45.24c3.48-.96 6.84-3.6 7.2-7.2l-2.28-13.08c-1.8-10.92-5.88-20.04-16.8-20.28h-3.6c-4.92 0-9.12.72-11.88 1.92V76.2c.96 3.6 4.68 6.24 8.28 7.2H0c3.6-.96 7.44-3.6 8.28-7.2v-69C7.44 3.6 3.6.96 0 0h30.96c19.2 0 31.08 6.48 31.08 21.48 0 13.2-7.56 18.36-20.4 20.64v.24c11.64 2.04 17.64 8.76 19.56 20.76zm-32.4-34.32c12.72 0 20.16-7.08 20.16-20.28 0-13.32-7.68-20.28-20.16-20.28H17.88v42.36c2.76-1.2 6.96-1.8 11.4-1.8zm79.487 40.44c10.2 0 21.72-6.96 28.8-14.04l-2.4 15.24h-58.8c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h58.32l2.4 14.28c-6.96-7.08-17.52-13.08-27.84-13.08h-15v39.96h19.2c6-1.44 17.04-5.28 17.88-8.4v17.88c-.84-3.12-11.88-6.96-17.88-8.28h-19.2V82.2zm69.278 1.2h-33.24c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h33.24c21.12 0 40.08 16.08 40.08 41.76 0 25.56-18.96 41.64-40.08 41.64m0-1.2c18.72 0 29.28-17.88 29.28-40.44 0-22.68-10.56-40.56-29.28-40.56h-15.36v81zm125.163 1.2h-26.4c3-.84 5.4-3.24 5.4-6.36v-.84l-7.2-17.64h-36.6l-7.08 17.64v.84c0 3.12 2.4 5.52 5.4 6.36h-17.04c4.08-.96 8.88-3.96 11.16-9.36l25.2-62.4-.96-2.52c-1.92-3.84-5.76-8.28-9.12-9.12h16.2l29.88 74.04c2.28 5.4 7.08 8.4 11.16 9.36m-28.68-26.04-17.76-44.04-17.88 44.04zM32.52 233.4H0c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h25.92C44.04 150 54 153.48 54 166.32c0 11.76-9.96 16.44-19.56 22.44 1.56-.36 3-.6 4.56-.6 15 0 26.4 6.36 26.4 21.12 0 14.28-11.52 24.12-32.88 24.12m-14.64-28.2c5.28-17.64 26.4-20.04 26.4-40.32 0-12.24-8.16-13.68-18.36-13.68h-8.04zm9.36 27c15.24 0 28.32-8.88 28.32-24.36 0-13.8-7.8-18.48-16.56-18.48-10.2 0-21.12 11.16-21.12 24.36v18.48zm126.593 1.2h-26.4c3-.84 5.4-3.24 5.4-6.36v-.84l-7.2-17.64h-36.6l-7.08 17.64v.84c0 3.12 2.4 5.52 5.4 6.36h-17.04c4.08-.96 8.88-3.96 11.16-9.36l25.2-62.4-.96-2.52c-1.92-3.84-5.76-8.28-9.12-9.12h16.2l29.88 74.04c2.28 5.4 7.08 8.4 11.16 9.36m-28.68-26.04-17.76-44.04-17.88 44.04zm63.343 27.48c-4.56 0-9.24-.36-13.92-.96-4.8-.6-8.76-1.32-11.76-2.16v-18.36c3 5.64 6.72 10.32 11.28 14.28s9.36 6 14.4 6q8.46 0 13.32-4.68c3.24-3 4.8-7.08 4.8-12.24 0-3.96-.96-7.2-2.76-9.96-1.92-2.76-4.32-5.04-7.32-7.08s-6.12-3.84-9.36-5.64l-3.36-1.92c-.12-.12-.36-.24-.48-.36-4.2-2.28-7.68-4.56-10.56-6.6-3-2.04-5.28-4.44-6.84-6.96s-2.4-5.64-2.4-9.6c0-5.88 2.16-10.56 6.48-14.16s9.96-5.4 16.8-5.4c4.68 0 9.36.36 14.04.96s8.64 1.32 11.64 2.16v18.36q-4.5-8.46-11.16-14.4c-4.56-3.96-9.36-5.88-14.52-5.88q-7.02 0-11.52 3.6c-3 2.4-4.56 5.64-4.56 9.6q0 4.5 2.88 7.92c1.8 2.4 4.08 4.56 6.84 6.36 2.76 1.92 5.4 3.72 8.16 5.28.84.48 1.56.96 2.28 1.44 1.56.84 3 1.8 4.44 2.64 3.72 2.16 7.2 4.32 10.2 6.48s5.28 4.68 7.08 7.56c1.68 3 2.52 6.6 2.52 11.04 0 6.6-2.28 12.12-6.84 16.32-4.68 4.2-11.28 6.36-19.8 6.36m105.212-1.44h-25.44c2.04-.72 3.48-2.28 3.48-4.32 0-.96-.24-1.8-.72-2.88l-25.68-32.76c-1.68 1.44-3.48 2.52-5.28 3.48v29.28c.96 3.6 4.68 6.24 8.28 7.2h-26.16c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h26.16c-3.6.96-7.32 3.6-8.28 7.2v38.4c3.6-1.92 7.08-4.92 10.2-8.52l24.6-28.8c1.56-1.8 1.92-2.52 1.92-4.2 0-2.04-1.32-3.48-3.24-4.08h18.24c-4.44.96-10.44 3.6-14.4 7.2l-24.96 29.16 31.08 39.84c3.12 3.24 6.6 6.24 10.2 7.2m26.79-7.2c.96 3.6 4.68 6.24 8.28 7.2h-26.16c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h26.16c-3.6.96-7.32 3.6-8.28 7.2zm88.054 7.2h-25.44c2.04-.72 3.48-2.28 3.48-4.32 0-.96-.24-1.8-.72-2.88l-25.68-32.76c-1.68 1.44-3.48 2.52-5.28 3.48v29.28c.96 3.6 4.68 6.24 8.28 7.2h-26.16c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h26.16c-3.6.96-7.32 3.6-8.28 7.2v38.4c3.6-1.92 7.08-4.92 10.2-8.52l24.6-28.8c1.56-1.8 1.92-2.52 1.92-4.2 0-2.04-1.32-3.48-3.24-4.08h18.24c-4.44.96-10.44 3.6-14.4 7.2l-24.96 29.16 31.08 39.84c3.12 3.24 6.6 6.24 10.2 7.2m26.79-7.2c.96 3.6 4.68 6.24 8.28 7.2h-26.16c3.6-.96 7.44-3.6 8.28-7.2v-69c-.84-3.6-4.68-6.24-8.28-7.2h26.16c-3.6.96-7.32 3.6-8.28 7.2z"
            />
          </svg>
        </div>
        <h6 className="font-roboto">Front-End Web Developer</h6>
        <div
          onClick={playSuccessSound}
          className="mx-2 py-2 px-6 rounded-3xl bg-purple-100 flex items-center gap-4 transition-all hover:bg-purple-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="none"
            viewBox="0 0 286 270"
          >
            <ellipse cx="143" cy="135" fill="#574829" rx="143" ry="135" />
            <path
              fill="#d9d9d9"
              d="M214 180.95c0 10.199-10.324 25.288-65 25.288s-77-15.089-77-25.288 22.324 9.321 77 9.321 65-19.52 65-9.321"
            />
            <ellipse
              id="eye1"
              cx="198"
              cy="80"
              fill="#6996ca"
              rx="26"
              ry="27"
            />
            <ellipse id="eye2" cx="91" cy="80" fill="#6996ca" rx="26" ry="27" />
          </svg>
          <p className="text-sm font-medium text-gray-800">
            Don&apos;t forget to check my resume!
          </p>
        </div>

        {/* Action Button */}
        <a
          href="/last.pdf"
          onClick={playClickSound}
          download="Reda_Baskiki_CV.pdf"
          className="bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full px-10 py-4 text-white font-bold shadow-xl"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
