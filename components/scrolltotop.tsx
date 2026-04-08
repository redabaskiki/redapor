"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isFloating = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        if (!isFloating.current && buttonRef.current) {
          isFloating.current = true;
          gsap.to(buttonRef.current, {
            y: -10,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            duration: 1.5,
          });
        }
      } else {
        setIsVisible(false);
        isFloating.current = false;
        if (buttonRef.current) {
          gsap.killTweensOf(buttonRef.current);
          gsap.to(buttonRef.current, { y: 0, duration: 0.3 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      onMouseEnter={() => gsap.to(buttonRef.current, { scale: 1.1 })}
      onMouseLeave={() => gsap.to(buttonRef.current, { scale: 1 })}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white text-black shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
