import { GraduationCap, Target, Sparkles } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    n: "01",
    title: "Education",
    body: "B.Tech in Computer Science and Engineering (2024–2028) at Amrita Vishwa Vidyapeetham, currently in 3rd year with a CGPA of 8.08. Coursework includes Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Programming, and Software Engineering.",
    tags: ["B.TECH CSE", "3RD YEAR", "CGPA 8.08"],
  },
  {
    icon: Target,
    n: "02",
    title: "Career Objective",
    body: "Aspiring Full Stack Software Developer with a strong foundation in modern web technologies and problem-solving. Passionate about building scalable, user-centric applications and continuously learning new technologies while contributing to impactful software development projects.",
    tags: ["FULL STACK", "SOFTWARE ENGINEERING", "PROBLEM SOLVING"],
  },
  {
    icon: Sparkles,
    n: "03",
    title: "Core Skills",
    body: "Experienced in developing responsive full-stack applications using modern frontend and backend technologies. Skilled in REST API development, database management, cloud deployment, version control, and writing clean, maintainable code.",
    tags: ["REACT", "NODE.JS", "MONGODB", "PYTHON"],
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            A <span className="font-serif-italic text-neon">curious engineer</span> turning ideas into shipped code.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-6 right-6 font-display text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                {c.n}
              </div>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary border border-primary/30 mb-5">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                {c.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
