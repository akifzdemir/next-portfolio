import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SideMenu({ lenis }) {
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },

    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={open ? "open" : "close"}
        transition={{ duration: 1 }}
        onClick={toggle}
        className="z-50"
      >
        <AnimatePresence>
          {open ? <X size={40} /> : <Menu size={40} />}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed top-0 right-0 py-28 px-4
              h-screen w-96 
             z-30
             items-center
            bg-opacity-50 shadow-3xl 
            dark:bg-zinc-900
            dark:bg-opacity-50
            bg-white backdrop-blur-xl  flex flex-col gap-6"
          >
            <ul className="flex flex-col text-5xl gap-10 font-medium text-start items-start w-full">
              <li>
                <button onClick={() => lenis.scrollTo("#home")}>Home</button>
              </li>
              <li>
                <button onClick={() => lenis.scrollTo("#about")}>About</button>
              </li>
              <li>
                <button onClick={() => lenis.scrollTo("#techs")}>
                  Technologies
                </button>
              </li>
              <li>
                <button onClick={() => lenis.scrollTo("#repos")}>
                  Repositories
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
