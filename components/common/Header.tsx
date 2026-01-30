"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./ui/NavLink";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { UseMyContext } from "@/context";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { selectNav } = UseMyContext();

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative flex justify-between items-center">
      <Link
        href={`/`}
        className="text-sky-600 text-lg font-semibold tracking-tight"
        onClick={closeMenu}
      >
        Phinehas.
      </Link>

      {/* Desktop nav */}
      <nav>
        <ul className="hidden md:flex items-center gap-3">
          <NavLink name="Home" route="/" />
          <NavLink name="About" route="/about" />
          <NavLink name="Experience" route="/experience" />
          <NavLink name="Projects" route="/projects" />
          <NavLink name="Contact" route="/contact" />
        </ul>
      </nav>

      <a
        href="https://drive.google.com/file/d/1RZof4qocExJfLUHPSMq_9EoljNPdgcGg/view?usp=sharing"
        className="border border-gray-500 text-xs rounded-md p-2 hidden md:block"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>

      {/* Mobile toggle */}
      <button
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="block md:hidden p-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <IoClose size={26} color="gray" /> : <TiThMenu size={25} color="gray" />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full mt-2 rounded-xl border border-[#2a2442] bg-[#131022] shadow-xl md:hidden">
          <ul className="flex flex-col divide-y divide-[#2a2442] text-sm">
            {[
              { name: "Home", route: "/" },
              { name: "About", route: "/about" },
              { name: "Experience", route: "/experience" },
              { name: "Projects", route: "/projects" },
              { name: "Contact", route: "/contact" },
            ].map((item) => (
              <li key={item.name} className="px-5 py-3">
                <Link
                  href={item.route}
                  onClick={() => {
                    selectNav(item.name);
                    closeMenu();
                  }}
                  className="block text-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="px-5 py-3">
              <a
                href="https://drive.google.com/file/d/1RZof4qocExJfLUHPSMq_9EoljNPdgcGg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-sky-200"
                onClick={closeMenu}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
