"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function MaskItems({ items }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true });

  const variants = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "-2%",
      transition: { duration: 0.5, delay: i * 0.2, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  return (
    <div ref={body} className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden text-left">
          <motion.div
            variants={variants}
            initial="initial"
            custom={i}
            animate={isInView ? "open" : ""}
          >
            {item}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
