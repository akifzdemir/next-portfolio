"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function About() {
  let refs = useRef([]);
  const container = useRef(null);
  const body = useRef(null);

  const phrases = [
    "Hello! My name is Mehmet Akif, and I'm a fourth-year Computer Engineering student and Software Developer based in Turkiye. I'm currently working at Sehir Teknolojileri Merkezi (City Technology Center) as a Web Developer.",
    "My interests are Full Stack Web Development and Machine Learning. I'm passionate about solving complex problems and continually learning new ways to improve code and streamline the user experience.",
    "I have worked with a range of programming languages and frameworks, but I'm always on the lookout for new learning opportunities",
    "I'm always open to discussing new tech trends or collaborating on exciting projects. I'd love to connect with you. Please feel free to reach out to me.",
  ];

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="m-0 font-normal lg:font-semibold opacity-[0.2]"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className="m-0 mr-2 text-xl lg:text-3xl" key={word + "_" + i}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top center+=250",
        end: `+=${window.innerHeight}/1.5`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.05,
    });
  };

  useLayoutEffect(() => {
    createAnimation();
  }, []);

  return (
    <div
      className="flex flex-col gap-4 lg:gap-6 text-left  justify-start  items-start
      select-none"
      ref={container}
      id="about"
    >
      <h1 className="font-bold text-4xl  lg:text-6xl">About Me</h1>
      {phrases.map((phrase, i) => (
        <div key={i} className="flex flex-wrap" ref={body}>
          {splitWords(phrase)}
        </div>
      ))}
    </div>
  );
}

export default About;
