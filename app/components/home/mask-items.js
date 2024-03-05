"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function MaskItems({ items }) {
  const body = useRef(null);
  const itemRefs = useRef([]);

  // const variants = {
  //   initial: {
  //     y: "100%",
  //   },
  //   open: (i) => ({
  //     y: "-2%",
  //     transition: { duration: 0.5, delay: i * 0.2, ease: [0.33, 1, 0.68, 1] },
  //   }),
  // };

  useGSAP(() => {
    gsap.fromTo(
      itemRefs.current,
      {
        y: "200%",
        opacity: 1,
      },
      {
        y: "",
        duration: 0.5,
        stagger: 0.2,
        ease: [0.33, 1, 0.68, 1],
      }
    );
  });

  return (
    <div ref={body} className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden text-left">
          <div
            ref={(el) => itemRefs.current.push(el)}
            className="opacity-0 py-1"
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
