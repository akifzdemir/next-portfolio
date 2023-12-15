import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoJava,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoSpringBoot,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiCsharp, SiNextdotjs, SiPrisma } from "react-icons/si";

export const techs = [
  {
    title: "Core",
    data: [
      {
        text: "Javascript",
        icon: <BiLogoJavascript />,
      },
      {
        text: "Typescript",
        icon: <BiLogoTypescript />,
      },
      {
        text: "Java",
        icon: <BiLogoJava />,
      },
      {
        text: "Python",
        icon: <BiLogoPython />,
      },
      {
        text: "C#",
        icon: <SiCsharp />,
      },
    ],
  },
  {
    title: "Frontend",
    data: [
      {
        text: "HTML",
        icon: <BiLogoHtml5 />,
      },
      {
        text: "CSS",
        icon: <BiLogoCss3 />,
      },
      {
        text: "Tailwind",
        icon: <BiLogoTailwindCss />,
      },
      {
        text: "Next.js",
        icon: <SiNextdotjs />,
      },

      {
        text: "React",
        icon: <BiLogoReact />,
      },
      {
        text: "Redux",
        icon: <BiLogoRedux />,
      },
    ],
  },
  {
    title: "Backend",
    data: [
      {
        text: "Spring Boot",
        icon: <BiLogoSpringBoot />,
      },
      {
        text: "Express.js",
        icon: <SiExpress />,
      },
      {
        text: "PostgreSQL",
        icon: <BiLogoPostgresql />,
      },
      {
        text: "MongoDB",
        icon: <BiLogoMongodb />,
      },
      {
        text: "Prisma",
        icon: <SiPrisma />,
      },
    ],
  },
];
