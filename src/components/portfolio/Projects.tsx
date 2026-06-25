import { Github, ArrowUpRight } from "lucide-react";
import ml from "@/assets/project-ml.jpg";
import crm from "@/assets/project-crm.jpg";
import coffee from "@/assets/project-coffee.jpg";
import fifteenPuzzle from "@/assets/project-fifteenpuzzle.jpg";

const projects = [
  {
    n: "01",
    title: "FIFTEEN-PUZZLE",
    description:
      "A modern, gamified Fifteen Puzzle game built with Python and Tkinter, featuring a Human vs CPU mode powered by the A* Search Algorithm and Manhattan Distance Heuristic. Includes an interactive GUI, intelligent CPU gameplay, score tracking, and a real-time game timer.",
    tech: ["Python", "Tkinter", "A* Search", "Heapq"],
    image: fifteenPuzzle,
    repo: "https://github.com/sowmya24057/FIFTEEN-PUZZLE",
  },
  {
    n: "02",
    title: "Mini CRM",
    description:
      "A modern Client Lead Management System built with React, Node.js, Express, and MongoDB. Features secure admin authentication, lead tracking, status updates, search and filtering, follow-up notes, and dashboard statistics for total, new, contacted, and converted leads.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: crm,
    repo: "https://github.com/sowmya24057/FUTURE_FS_02",
  },
  {
    n: "03",
    title: "Coffee Land",
    description:
      "A modern café and restaurant website built with React, TypeScript, Vite, and Tailwind CSS. Showcases the café's menu, ambiance, gallery, customer reviews, contact information, and an online ordering page with a fully responsive user interface.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: coffee,
    repo: "https://github.com/sowmya24057/FUTURE_FS_03",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            Projects I'm <span className="font-serif-italic text-neon">proud</span> of.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[5/4] overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={820}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 chip">{p.n}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-display font-semibold">{p.title}</h3>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="shrink-0 inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
