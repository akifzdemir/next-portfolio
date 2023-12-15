"use client";
import DarkModeToggle from "./DarkModeToggle";
import { useLayoutEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SideMenu from "./SideMenu";

export default function Header({ theme }) {
  const [lenis, setLenis] = useState(null);
  useLayoutEffect(() => {
    if (!lenis) {
      setLenis(
        new Lenis({
          duration: 3.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      );
    }

    function raf(time) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(raf);
  }, [lenis]);

  return (
    <header
      className="fixed px-10 flex top-0 w-full flex-row  justify-end items-center
        h-16 md:h-20 z-50
        text-black dark:text-white bg-opacity-0"
    >
      <div className="flex flex-row justify-center gap-6 items-center">
        <DarkModeToggle theme={theme} />
        <SideMenu lenis={lenis} />
      </div>
    </header>
  );
}
