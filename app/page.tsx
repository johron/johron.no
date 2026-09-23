import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";

const links = [
  {
    title: "Github",
    href: "https://github.com/johron",
  },
  {
    title: "Om meg",
    href: "",
  },
  {
    title: "Mine prosjekt",
    href: "https://github.com/johron?tab=repositories",
  },
  {
    title: "Kontakt meg",
    href: "",
  },
]

export default function Home() {
  return (
    <div className="">
      <Navbar links={links}/>
      <main className="">
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
