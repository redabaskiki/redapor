"use client"
import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  tags: string[]; // Add the tags array to the interface
}

const projects: Project[] = [
  {
    id: 1,
    color: "from-blue-300 to-indigo-300",
    title: "React E-Commerce",
    desc: "E-commerce front-end application using TypeScript, React, Redux Toolkit, and Tailwind CSS. The app fetches data from a JSON server and incorporates animated transitions with Tailwind CSS to enhance user engagement.",
    img: "/babys.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7285669896338702336/",
    tags: ["TypeScript", "React", "Redux Toolkit", "Tailwind CSS"], // Specific tags
  },
  {
    id: 2,
    color: "from-indigo-300 to-violet-300",
    title: "Admin Dashboard App",
    desc: "This project showcases my expertise in front-end development and user experience design. Technologies Used: React.js, Context API, TailwindCss, Syncfusion React.",
    img: "/dash.png",
    link: "https://ceodashboard.netlify.app/",
    tags: ["React.js", "Context API", "TailwindCss", "Syncfusion React"], // Specific tags
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next.js App Landing Page",
    desc: "Travel app with Next.js 14 and Tailwind CSS that prioritizes a sleek UI, responsive design, and mobile-first best practices.",
    img: "/travel.png",
    link: "https://ceotraveler.netlify.app/",
    tags: ["Next.js", "Tailwind CSS"], // Specific tags
  },
  {
    id: 4,
    color: "from-purple-300 to-pink-300",
    title: "Gym App",
    desc: "The app leverages two distinct APIs—one for exercise data and another for video tutorials.",
    img: "/gym.png",
    link: "https://kuntta-gym.netlify.app",
    tags: ["React.js", "API"], // Example tags, adjust as needed
  },
  {
    id: 5,
    color: "from-pink-300 to-rose-300",
    title: "y(z)oom App",
    desc: "Yoom-like video conferencing app built with tools like Next.js 14, Stream, Tailwind CSS.",
    img: "/zoom.png",
    link: "https://zoom-roan-ten.vercel.app",
    tags: ["Next.js", "Stream", "Tailwind CSS"], // Specific tags
  },
  {
    id: 6,
    color: "from-rose-300 to-orange-300",
    title: "Appoitment App",
    desc: "Appwith a Next.js frontend, Tailwind CSS, Appwrite backend, and SMS ,register, book appointments ,SMS reminders, cancel pending appointments, and manage  through dashboard.",
    img: "/cnop.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317944003272863744/",
    tags: ["Next.js", "Tailwind CSS", "Appwrite", "SMS"], // Specific tags
  },
  {
    id: 7,
    color: "from-orange-300 to-red-300",
    title: "Sushi page",
    desc: "  Building sleek, modern, and fully responsive website using HTML &  CSS, enhanced with smooth animations.",
    img: "/sushi.png",
    link: "https://sushibas.netlify.app/",
    tags: ["HTML", "CSS", "Animation"], // Specific tags
  },
  {
    id: 8,
    color: "from-red-300 to-purple-500",
    title: "Vesto site",
    desc: " This project was a great opportunity to showcase my skills ih React Clean and responsive design using Tailwind and animation",
    img: "/vesto.png",
    link: "https://vesto-ceo.netlify.app/",
    tags: ["React.js", "tailwind", "Animation"], // Specific tags
  },
  {
    id: 9,
    color: "to-[#2c5364] from-purple-500",
    title: "The Wild Oasis ",
    desc: "The Wild Oasis – a sleek, full-stack admin dashboard built with cutting-edge technologies to manage cabin bookings and operations.",
    img: "/wild.png",
    link: "https://www.linkedin.com/posts/reda-baskiki-40928b23a_reactjs-nextjs-taiwlind-activity-7292131018013065217-YLjw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt8TIkB-6rL3DtpNmB9I48AXTNOB0VoHaQ",
    tags: ["React.js", "tailwind", "Dark/light", "Auth", "Supabase"], // Specific tags
  },
];

const ProjectCard: React.FC<Project> = ({
  color,
  title,
  desc,
  img,
  link,
  tags,
}) => {
  const isVideo = link.includes("linkedin.com/feed/update/urn:li:activity:");

  return (
    <div className={`w-full md:w-[350px] lg:w-[500px] xl:w-[500px] p-4 `}>
      <div
        className={`bg-gradient-to-br ${color} rounded-lg shadow-md overflow-hidden`}
      >
        <Image width={600} height={600} src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white text-black text-xs rounded-full px-2 py-1 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white text-sm mb-3">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              {isVideo ? "Watch Video" : "Show Demo"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  return (
    <div className="my-30">
      <h1 className=" my-5 font-oswald text-6xl flex justify-center w-full  ">
        About Me
      </h1>
      <div className=" flex flex-wrap justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
