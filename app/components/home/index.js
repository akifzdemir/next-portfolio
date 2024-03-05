"use client";
import Image from "next/image";
import HandSvg from "../../../public/waving-hand.svg";
import img from "../../../public/IMG_20220522_212930_776.jpg";
import { motion } from "framer-motion";
import MaskItems from "./mask-items";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default async function Intro() {
  const maskItems = [
    <p
      key={"1"}
      className="relative text-4xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold "
    >
      Hello, I'm Akif
      <Image
        src={HandSvg}
        className="absolute inline xl:ml-6 w-10  lg:w-12 xl:w-14  self-center"
        alt="hand"
      />
    </p>,
    <p
      key={"2"}
      className=" text-xl md:text-2xl sm:text-3xl xl:text-4xl  font-extralight"
    >
      Software Developer and
    </p>,
    <p
      key={"3"}
      className="text-xl md:text-2xl sm:text-3xl xl:text-4xl font-extralight"
    >
      4th grade Computer Engineering Student
    </p>,
    <p key={"4"} className="flex flex-row gap-4 text-5xl">
      <a target="_blank" href="https://github.com/akifzdemir">
        <BiLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mehmet-akif-ozdemir/"
        target="_blank"
      >
        <BiLogoLinkedin />
      </a>
    </p>,
  ];

  return (
    <div
      className="flex flex-col  h-screen justify-center gap-12 sm:flex-row w-full lg:justify-between items-center"
      id="home"
    >
      <div className="w-full">
        <MaskItems items={maskItems} />
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", damping: 10, duration: 0.3 }}
      >
        <Image
          src={img}
          alt="image"
          placeholder="blur"
          className={
            " rounded-3xl w-36 sm:h-auto sm:w-48 md:w-72 xl:w-96 scale-105 overflow-x-hidden  shadow-3xl  dark:shadow-zinc-700 dark:shadow-2xl"
          }
        />
      </motion.div>
    </div>
  );
}
