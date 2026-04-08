 "use client"
 import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

 interface IntroProps {
  timeline: gsap.core.Timeline | undefined;
}

const Intro = ({ timeline }: IntroProps) => {
  // Explicitly type the ref as HTMLDivElement
  const intro = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (timeline) {
      timeline.to('div', {
        xPercent: gsap.utils.wrap([-100, 100]),
        duration: 1,
        delay:0.5,
        ease: "power2.inOut"
      });
    }
  }, { scope: intro, dependencies: [timeline] });

  return (
    <div
      ref={intro}
      className="fixed z-100 top-0 left-0 size-full pointer-events-none flex flex-col items-center justify-center"
    >
      <div className="bg-[#364348] w-full grow"></div>
      <div className="bg-[#4a5a61] w-full grow"></div>
      <div className="bg-[#607781] w-full grow"></div>
      <div className="bg-[#2c5364]   w-full grow"></div>
    </div>
  );
};

export default Intro;