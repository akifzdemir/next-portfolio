"use client";
import { Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

export default function Card({ repo }) {
  const variants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { type: "linear", duration: 0.3 } },
    hover: {
      paddingLeft: 20,
      paddingRight: 20,
      opacity: 0.7,
      transition: { duration: "0.1" },
    },
  };

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      variants={variants}
      initial="initial"
      key={repo.id}
      animate="enter"
      whileHover="hover"
      className="flex w-full justify-between items-center 
        py-4 border-t-2
        h-20
        transition-all duration-[0.2s]
       border-black dark:border-white  cursor-pointer flex-row"
    >
      <div className="flex flex-col">
        <h2 className="font-bold flex-1 text-lg line-clamp-1">{repo.name}</h2>
        <p className="font-light opacity-60 text-md line-clamp-1">
          {repo.description}
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center ">
        <div>{repo.language}</div>
        <div className="flex flex-row items-center gap-2">
          <Star /> {repo.watchers}
        </div>
        <div className="flex flex-row items-center gap-2">
          <GitFork />
          {repo.forks}
        </div>
      </div>
    </motion.a>
  );
}
