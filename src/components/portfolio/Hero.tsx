import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient layers */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl w-full px-6 text-center animate-fade-up">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new projects
        </div>

        <h1 className="font-display font-semibold text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          Hi, I'm{" "}
          <span className="font-serif-italic text-neon">Sowmya Sri</span>
          <span className="block mt-2 text-foreground/90">
            Engineering intelligent
          </span>
          <span className="block text-foreground/90">
            <span className="font-serif-italic text-neon">software</span> with data.
          </span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          3rd-year Computer Science Engineering student crafting machine
          learning systems, data products, and modern web experiences —
          built with precision for ambitious teams.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6 shadow-glow hover:scale-[1.02] transition-transform">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-6 bg-card/40 backdrop-blur-md hover:bg-card hover:border-primary/40 transition-all"
          >
            <a href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <div className="flex items-center gap-1 ml-1 sm:border-l sm:border-border sm:pl-3">
            <Button asChild size="icon" variant="ghost" className="rounded-full hover:text-primary">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="rounded-full hover:text-primary">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom soft fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
