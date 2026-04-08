"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ScrollToTop from "@/components/scrolltotop";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SmoothParallax from "@/components/smooth";
import Experiences from "@/components/experiences";
gsap.registerPlugin(useGSAP);



// Moved inside the module scope correctly
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Reda Baskiki",
  jobTitle: "Software Developer",
  url: "https://redapor.vercel.app/",
  sameAs: [
    "https://github.com/redabaskiki",
    "https://www.linkedin.com/in/reda-baskiki-40928b23a/",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "React",
    "TanStack Query",
    "PostgreSQL",
  ],
};

export default function Home() {
 const container = useRef<HTMLDivElement>(null);

 // Type the state as gsap.core.Timeline
 const [tl, setTl] = useState<gsap.core.Timeline>();

 useGSAP(
   () => {
     const newTl = gsap.timeline();
     setTl(newTl);
   },
   { scope: container },
 );
  return (
    <div>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main>
        <section id="home">
        <div ref={container}>
         <Intro timeline={tl}/>
          <Hero timeline={tl}/>
        </div>
        <SmoothParallax />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project /> 
          <Experiences/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ScrollToTop/>
    </div>
  );
}
