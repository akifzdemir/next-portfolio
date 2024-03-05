import Techs from "./components/Techs";
import About from "./components/about";
import Intro from "./components/home";
import Repositories from "./components/repositories";

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
