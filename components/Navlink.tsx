import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  link: {
    url: string;
    title: string;
  };
  children?: ReactNode;
}

const Navlink = ({ link }: NavLinkProps) => {
  const pathName = usePathname();

  const isHashLink = link.url.startsWith("#");
  const isActive =
    pathName === link.url ||
    (isHashLink && pathName === `${pathName.split("#")[0]}${link.url}`);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHashLink) {
      e.preventDefault();
      const targetId = link.url.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });

        // Update URL without reload
        window.history.pushState(null, "", link.url);
      }
    }
  };

  return (
    <Link
      className={`rounded p-1 transition-colors ${
        isActive ? "bg-black text-white" : "hover: "
      }`}
      href={link.url}
      onClick={handleClick}
      scroll={!isHashLink} // Disable Next.js auto-scroll for hash links
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
