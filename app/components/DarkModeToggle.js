"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SunMedium, MoonStar } from "lucide-react";

const DarkModeToggle = ({ theme }) => {
  const [_theme, setTheme] = useState(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setTheme("dark");
      document.cookie = `theme=dark;`;
    } else {
      setTheme("light");
      document.cookie = `theme=ligth;`;
    }
  };

  return (
    <motion.button
      className=" focus:outline-none z-50"
      onClick={() => toogleTheme()}
      key={_theme == "dark" ? "dark-icon" : "light-icon"}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence initial={false}>
        {_theme == "dark" ? (
          <MoonStar size={40} strokeWidth={3} />
        ) : (
          <SunMedium size={40} strokeWidth={3} />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkModeToggle;
