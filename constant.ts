export interface Project {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  
  {
    id: 1,
     color: "to-[#2c5364] from-purple-500",
    title: "React E-Commerce",
    desc: "E-commerce front-end application using TypeScript, React, Redux Toolkit, and Tailwind CSS. The app fetches data from a JSON server with animated transitions.",
    img: "/babys.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7285669896338702336/",
    tags: ["TypeScript", "React", "Redux", "Tailwind"],
  },
  {
    id: 2,
  color: "to-[#2c5364] from-purple-500",
    title: "Admin Dashboard App",
    desc: "Showcasing expertise in front-end development and UX design. Built with React.js, Context API, and Syncfusion.",
    img: "/dash.png",
    link: "https://ceodashboard.netlify.app/",
    tags: ["React.js", "Context API", "Syncfusion"],
  },
  {
    id: 3,
   color: "to-[#2c5364] from-purple-500",
    title: "Next.js Landing Page",
    desc: "Travel app built with Next.js 14 prioritizing a sleek UI, responsive design, and mobile-first best practices.",
    img: "/travel.png",
    link: "https://ceotraveler.netlify.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
   color: "to-[#2c5364] from-purple-500",
    title: "Gym App",
    desc: "The app leverages two distinct APIs—one for exercise data and another for video tutorials.",
    img: "/gym.png",
    link: "https://kuntta-gym.netlify.app",
    tags: ["React.js", "RapidAPI"],
  },
  {
    id: 5,
 color: "to-[#2c5364] from-purple-500",
    title: "Yoom Video App",
    desc: "Video conferencing app built with Next.js 14, Stream, and Tailwind CSS for seamless communication.",
    img: "/zoom.png",
    link: "https://zoom-roan-ten.vercel.app",
    tags: ["Next.js", "Stream", "Tailwind"],
  },
  {
    id: 6,
   color: "to-[#2c5364] from-purple-500",
    title: "Appointment App",
    desc: "Healthcare management system with SMS reminders, appointment booking, and a full admin dashboard.",
    img: "/cnop.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317944003272863744/",
    tags: ["Next.js", "Appwrite", "Twilio"],
  },
  {
    id: 7,
  color: "to-[#2c5364] from-purple-500",
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
  {
    id: 10,
    color: "to-[#2c5364] from-purple-500",
    title: "GT5 Gsap",
    desc: "Landing page for GT5 annimation Gsap/Nextjs ",
    img: "/fav.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7426300299398717440/?originTrackingId=xnJGdsGkEC7QKqwfSNcX9Q%3D%3D",
    tags: ["Next.js", "Supabase", "Auth", "Charts"],
  },
];