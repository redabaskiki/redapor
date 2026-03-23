import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Reda Baskiki — Crafting Digital Products that Scale",
  description: "From concept to deployment, I build robust, scalable web solutions. Explore my portfolio featuring advanced dashboards, e-commerce systems, and modern UI/UX.",
  openGraph: {
    title: "Reda Baskiki Portfolio",
    description: "Bridging the gap between clean code and business goals.",
    type: "website",
  },

};
import Script from 'next/script';

export default function ProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Reda",
    "jobTitle": "Software Developer",
    "url": "https://redapor.vercel.app/",
    "sameAs": [
      "https://github.com/redabaskiki",
     "https://www.linkedin.com/in/reda-baskiki-40928b23a/"
    ],
    "knowsAbout": [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React"
    ]
  };

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );

 }