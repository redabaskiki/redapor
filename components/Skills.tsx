"use client"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
  SiMongodb,
   SiRedux,
  SiVite,
} from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { SiGit, SiFigma } from "react-icons/si"; // Also importing these here just in case
import { SiMui } from "react-icons/si";
 
interface Skill {
  name: string;
  Icon: React.ElementType;
}

const skills: Skill[] = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React.js", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "PHP", Icon: SiPhp },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Material UI", Icon: SiMui },
  { name: "Redux", Icon: SiRedux },
  { name: "Vite", Icon: SiVite },
  { name: "Mongoose", Icon: GiDatabase },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
];

const Skills: React.FC = () => {
  return (
    <div className="mx-3  border-1 border-amber-50 rounded-2xl flex flex-col md:flex-row pt-3 my-6 mb-20  ">
      <h2 className="flex justify-center text-4xl  lg:text-6xl w-full my-5 md:w-1/3">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-2  my-5">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="rounded p-3 text-md gap-3  cursor-pointer bg-[#007991] text-white hover:bg-white hover:text-black flex items-center mx-2"
          >
            <Icon className="mr-1" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
