"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Ensure you have the GSAP Bonus plugins installed
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Experiences = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Smart Wrap logic: splitting by chars but maintaining word structure
    const split = new SplitText(textRef.current, {
      type: "chars, words", // Including words helps with the 'smart wrap' behavior
      charsClass: "char",
    });

    const animation = gsap.from(split.chars, {
      opacity: 0.2,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "+=400",
        scrub: 1,
        markers: false, // Set to true if you want to debug the start/end points
      },
    });

    // Cleanup on unmount
    return () => {
      split.revert();
      animation.kill();
    };
  }, []);

  return (<>
    <section ref={containerRef} className="py-20 px-10  text-white flex flex-wrap m-auto justify-center items-center my-10">
        <div className=" w-auto mx-auto ">
        <Image src="/concli.png" alt="Concli" width={600} height={600} className="w-[200px] h-[200px]  " />
        </div>
      <div className="w-1/2 mx-auto">
        {/* Experience Title */}
        <h2 className="text-4xl font-bold font-oswald mb-6 tracking-tighter uppercase">
          Concli <span className="text-orange-500">Dashboard</span>
        </h2>

        {/* Animated Description */}
        <p
          ref={textRef}
          className="text-2xl md:text-2xl font-poppins font-normal leading-relaxed"
        >
          Built a robust administrative dashboard using Next.js and Supabase to
          manage website content seamlessly. Implemented full CRUD operations
          for product services, ensuring real-time data synchronization and a
          fluid user experience.
        </p>
      </div>
    </section></>
  );
};

export default Experiences;
