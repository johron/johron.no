import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

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
      <HeroSection />
      <main className="">
        hei eg heiter johan
      </main>
    </div>
  );
}
