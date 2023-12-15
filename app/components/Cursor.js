"use client";
import { useMotionValue, motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseSize = 30;
  const mouse = {
    x: useMotionValue(-200),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x),

    y: useSpring(mouse.y),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - mouseSize / 2);
    mouse.y.set(clientY - mouseSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className="w-[30px] h-[30px] hidden md:flex bg-black dark:bg-white fixed  pointer-events-none z-[99]  rounded-full"
    ></motion.div>
  );
}
