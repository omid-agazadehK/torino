"use client";

import { useClickOutside } from "@/hook/useClickOutside";
import { useEffect, useRef } from "react";

import { links } from "@/constants/constants";

import SideLinks from "./SideLinks";

function SideBar({ isSideBar, setIsSideBar }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSideBar]);
  useClickOutside(ref, () => setIsSideBar(false));

  return (
    <div
      className={`${
        isSideBar
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-colors duration-500"
          : null
      }`}
    >
      <nav
        ref={ref}
        aria-label="Sidebar links"
        className={`absolute top-0 -right-500 z-20 h-dvh w-1/2 overflow-hidden bg-white transition-all duration-500 ${
          isSideBar ? "right-0" : null
        } `}
      >
        <ul>
          {links.map((link) => (
            <SideLinks link={link} key={link.href} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
