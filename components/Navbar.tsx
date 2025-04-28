"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const links = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl my-3">
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            onClick={(e) => handleScroll(e, link.url)}
            className="text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 my-3">
        <Link href="https://github.com/redabaskiki" target="_blank">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/reda.baskiki/" target="_blank">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/reda-baskiki-40928b23a/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="text-2xl absolute z-50 focus:outline-none m-3"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <GrClose className="text-white hover:text-gray-700 transition-colors m-3" />
          ) : (
            <FaBars className="text-white hover:text-gray-700 transition-colors" />
          )}
        </button>

        {open && (
          <div className="fixed inset-0 bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                onClick={(e) => handleScroll(e, link.url)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.title}
              </a>
            ))}
            <div className="flex gap-6 mt-8">
              <Link href="https://github.com/redabaskiki" target="_blank">
                <FaGithub className="text-white hover:text-gray-300 transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/reda.baskiki/"
                target="_blank"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/reda-baskiki-40928b23a/"
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
