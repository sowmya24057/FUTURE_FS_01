import { Download, FileText, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-16 items-end">
          <div>
            <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-primary" />[ 06 ] Resume</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            One page, <span className="font-serif-italic text-neon">zero filler.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          <div className="bg-gradient-card border border-border rounded-2xl shadow-card overflow-hidden">
            <div className="border-b border-border p-8 flex items-start justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Resume preview</div>
                <h3 className="text-3xl font-display font-semibold">Sowmya Sri</h3>
                <p className="text-muted-foreground mt-1">CS Engineering · 3rd Year</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> vsowmyasri2006@gmail.com</span>
                  <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +91 8639151443</span>
                </div>
              </div>
              <span className="chip">PDF · 2 pages</span>
            </div>
            <div className="p-8 grid sm:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold uppercase text-[10px] tracking-[0.2em] text-primary mb-3">Education</h4>
                <p className="font-medium">B.Tech, Computer Science</p>
                <p className="text-muted-foreground">2024–2028 · CGPA 8.08</p>
              </div>
              <div>
                <h4 className="font-semibold uppercase text-[10px] tracking-[0.2em] text-primary mb-3">Skills</h4>
                <p className="text-muted-foreground">Python · Machine Learning · Data Science · React · JavaScript · SQL · MongoDB · Git · HTML · CSS</p>
              </div>
              <div>
                <h4 className="font-semibold uppercase text-[10px] tracking-[0.2em] text-primary mb-3">Projects</h4>
                <p className="text-muted-foreground">Sentiment Classifier · Sales Dashboard · Stock Predictor</p>
              </div>
              <div>
                <h4 className="font-semibold uppercase text-[10px] tracking-[0.2em] text-primary mb-3">Achievements</h4>
                <p className="text-muted-foreground">SIH Finalist · GSoC Contributor · 200+ DSA</p>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 text-primary mb-5">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-2">Grab the full version</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Detailed experience, coursework and references. Updated this month.
            </p>
            <Button asChild className="w-full shadow-glow">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </Button>
            <p className="text-[11px] text-muted-foreground mt-3 text-center">Last updated · May 2026 · 184 KB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
