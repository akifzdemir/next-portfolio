"use client";

import { techs } from "../data/techs";

export default function Techs() {
  return (
    <div className="h-screen flex flex-col  justify-center gap-12" id="techs">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl lg:text-6xl">Technologies</h1>
        <p className="opacity-60 font-light ">Technologies that I actively use</p>
      </div>
      <div>
        {techs.map((tech, i) => (
          <div key={i} className="mb-6">
            <h2 className="opacity-40 font-bold text-xl  border-b-2 border-black">{tech.title}</h2>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 ">
              {tech.data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-10 md:px-14 2xl:px-20 py-3"
                >
                  <p className="font-semibold">{item.text}</p>
                  <div className="text-4xl">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
