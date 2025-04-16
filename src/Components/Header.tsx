import React from "react";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";

const items = [
  { title: "Home", href: "/#home" },
  { title: "About", href: "/#about-us" },
  { title: "services", href: "/#services" },
  { title: "Contact", href: "/#contact" },
];

export default function Header() {
  const { bargerMenuToggle } = UseSiteContext();

  return (
    <header className="container mx-auto">
      <div className="bg-amber-300   py-2 px-2 flex  items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-slate-600">RRS</div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {items.map((item) => {
                const { title, href } = item;
                return (
                  <li key={title}>
                    <a
                      onClick={() => bargerMenuToggle(false)}
                      href={href}
                      className="text-[0.9rem] font-light text-slate-600"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              bargerMenuToggle(true);
            }}
            className="size-lg px-3 block lg:hidden"
            aria-label="toggle burger menu"
          >
            <FaBars className="hidden md:block" size={40} />
            <FaBars className="md:hidden" size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
