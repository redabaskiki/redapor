"use client";

import { projects } from "@/constant";
import type { Project as ProjectItem } from "@/constant";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
// 3. Child Component (Project Card)
function ProjectCard({ color, title, desc, img, link, tags }: ProjectItem) {
  const isVideo = link.includes("linkedin.com");

  return (
    <div className="w-full md:w-[350px] lg:w-[450px] p-4 flex">
      <div
        className={`bg-gradient-to-br ${color} rounded-2xl shadow-xl overflow-hidden flex flex-col w-full transition-transform hover:scale-[1.02]`}
      >
        <div className="relative h-48 w-full">
          <Image fill src={img} alt={title} className="object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider rounded-md px-2 py-1 font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/90 text-sm mb-6 flex-grow">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
              {isVideo ? "Watch Video" : "Live Demo"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
gsap.registerPlugin(ScrollTrigger);
// 4. Main Component (Default Export)
export default function Project() {
useGSAP(
  () => {
    gsap.set(".project-card", {
      y: 100,
      opacity: 0.1,
      scale: 0.9,
    });

    // 2. The Scrub Animation
    gsap.to(".project-card", {
      y: -20, // Moves to its natural position
      opacity: 1,
      scale: 1,
      stagger: 0.2, // Reduced from 0.9 to keep cards appearing closer together
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 90%", // Starts when grid top hits 70% of screen
        end: "bottom 50%", // Finishes when grid bottom hits 20%
        scrub: 1.4, // Smooth 'catch-up' time of 1.4 seconds
        markers: false, // Remember to remove this for production!
      },
    });
  },
 );
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="mb-12 font-oswald text-5xl md:text-6xl text-center uppercase tracking-tighter">
        Featured Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4 projects-grid ">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}