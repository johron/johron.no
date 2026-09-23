import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
