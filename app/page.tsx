import { ProjectsScroll } from "./components/ProjectsScroll";

const projects = [
  {
    title: "Moose",
    github: {
      user: "johron",
      repo: "moose",
    },
    href: "https://github.com/johron/moose",
    imageBg: "/moose.png",
  },
  {
    title: "Moose",
    github: {
      user: "johron",
      repo: "moose",
    },
    href: "https://github.com/johron/moosed",
    imageBg: "/images.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <main className="m-0">
        <div className="h-screen">gjdfshg</div>
        <ProjectsScroll projects={projects} />
      </main>
    </div>
  );
}
