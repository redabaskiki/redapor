"use client";

import Image from "next/image";

// 1. Define the interface for a single project
interface Project {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  tags: string[];
}

// 2. The Data Array
const projects: Project[] = [
  {
    id: 1,
    color: "from-blue-300 to-indigo-300",
    title: "React E-Commerce",
    desc: "E-commerce front-end application using TypeScript, React, Redux Toolkit, and Tailwind CSS. The app fetches data from a JSON server with animated transitions.",
    img: "/babys.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7285669896338702336/",
    tags: ["TypeScript", "React", "Redux", "Tailwind"],
  },
  {
    id: 2,
    color: "from-indigo-300 to-violet-300",
    title: "Admin Dashboard App",
    desc: "Showcasing expertise in front-end development and UX design. Built with React.js, Context API, and Syncfusion.",
    img: "/dash.png",
    link: "https://ceodashboard.netlify.app/",
    tags: ["React.js", "Context API", "Syncfusion"],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next.js Landing Page",
    desc: "Travel app built with Next.js 14 prioritizing a sleek UI, responsive design, and mobile-first best practices.",
    img: "/travel.png",
    link: "https://ceotraveler.netlify.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    color: "from-purple-300 to-pink-300",
    title: "Gym App",
    desc: "The app leverages two distinct APIs—one for exercise data and another for video tutorials.",
    img: "/gym.png",
    link: "https://kuntta-gym.netlify.app",
    tags: ["React.js", "RapidAPI"],
  },
  {
    id: 5,
    color: "from-pink-300 to-rose-300",
    title: "Yoom Video App",
    desc: "Video conferencing app built with Next.js 14, Stream, and Tailwind CSS for seamless communication.",
    img: "/zoom.png",
    link: "https://zoom-roan-ten.vercel.app",
    tags: ["Next.js", "Stream", "Tailwind"],
  },
  {
    id: 6,
    color: "from-rose-300 to-orange-300",
    title: "Appointment App",
    desc: "Healthcare management system with SMS reminders, appointment booking, and a full admin dashboard.",
    img: "/cnop.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317944003272863744/",
    tags: ["Next.js", "Appwrite", "Twilio"],
  },
  {
    id: 7,
    color: "from-orange-300 to-red-300",
    title: "Sushi Page",
    desc: "Sleek, modern, and fully responsive website using HTML & CSS, enhanced with smooth animations.",
    img: "/sushi.png",
    link: "https://sushibas.netlify.app/",
    tags: ["HTML", "CSS", "Animations"],
  },
  {
    id: 8,
    color: "from-red-300 to-purple-500",
    title: "Vesto Site",
    desc: "A clean and responsive design built with React and Framer Motion for high-end user interactions.",
    img: "/vesto.png",
    link: "https://vesto-ceo.netlify.app/",
    tags: ["React.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 9,
    color: "to-[#2c5364] from-purple-500",
    title: "The Wild Oasis",
    desc: "Full-stack admin dashboard built to manage cabin bookings, check-ins, and internal operations.",
    img: "/wild.png",
    link: "https://www.linkedin.com/posts/reda-baskiki-...",
    tags: ["Next.js", "Supabase", "Auth", "Charts"],
  },
];

// 3. Child Component (Project Card)
function ProjectCard({ color, title, desc, img, link, tags }: Project) {
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

// 4. Main Component (Default Export)
export default function Project() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="mb-12 font-oswald text-5xl md:text-6xl text-center uppercase tracking-tighter">
        Featured Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}