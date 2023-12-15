import About from "./components/About";
import Intro from "./components/Home";
import Repositories from "./components/Repositories";
import Techs from "./components/Techs";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <div className="flex flex-col gap-24">
        <About />
        <Techs />
        <Repositories />
      </div>
    </div>
  );
}
