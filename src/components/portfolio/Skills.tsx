const skills = [
  {
    name: "Python",
    description:
      "Primary language for machine learning, data analysis, and automation. Comfortable with NumPy, Pandas, and Scikit-learn.",
    category: "Language",
  },
  {
    name: "Machine Learning",
    description:
      "Building predictive models, classification systems, and neural networks using supervised and unsupervised techniques.",
    category: "AI",
  },
  {
    name: "Data Science",
    description:
      "Extracting actionable insights from structured and unstructured data through statistical analysis and visualization.",
    category: "AI",
  },
  {
    name: "SQL",
    description:
      "Designing relational schemas, writing complex queries, and optimizing database performance for analytical workloads.",
    category: "Database",
  },
  {
    name: "JavaScript",
    description:
      "Developing interactive front-end logic, DOM manipulation, and asynchronous programming for modern web applications.",
    category: "Language",
  },
  {
    name: "HTML",
    description:
      "Crafting semantic, accessible markup that forms the structural foundation of every modern web experience.",
    category: "Web",
  },
  {
    name: "CSS",
    description:
      "Building responsive layouts, fluid animations, and cohesive design systems with Tailwind and modern CSS features.",
    category: "Web",
  },
  {
    name: "Git",
    description:
      "Proficient in branching strategies, rebasing, cherry-picking, and maintaining clean collaborative commit histories.",
    category: "Tools",
  },
  {
    name: "GitHub",
    description:
      "Managing open-source collaboration, CI/CD workflows, code reviews, and comprehensive project documentation.",
    category: "Tools",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            Nine <span className="font-serif-italic text-neon">disciplines.</span> One stack.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group relative bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:border-primary/40 hover:shadow-glow transition-all overflow-hidden"
            >
              <div className="mb-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  {String(i + 1).padStart(2, "0")} · {s.category}
                </div>
                <div className="text-lg font-display font-semibold">{s.name}</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
