import Link from "next/link";
import { ReactNode } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const ITEMS = [
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/cristian-holz-1370222a/",
  },
  {
    icon: <AiFillGithub />,
    link: "https://github.com/cristianholz",
  },
  {
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/cristianholz/",
  },
];

export function SocialMedia() {
  return (
    <div className="flex justify-center items-center text-white gap-3 my-4 text-2xl">
      {ITEMS.map((item) => (
        <Link
          className="hover:text-white/60 transition-all duration-300"
          href={item.link}
          key={item.link}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
