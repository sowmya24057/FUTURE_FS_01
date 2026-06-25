import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";


import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sowmya Sri — CS Engineering Student & ML Developer" },
      {
        name: "description",
        content:
          "Premium portfolio of Sowmya Sri — 3rd-year Computer Science Engineering student specializing in Python, Machine Learning, Data Science and modern web development.",
      },
      { property: "og:title", content: "Sowmya Sri — CS Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "3rd-year CSE student · Python · Machine Learning · Data Science · Web Development.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sowmya Sri",
          jobTitle: "Computer Science Engineering Student",
          knowsAbout: ["Python", "Machine Learning", "Data Science", "SQL", "JavaScript", "HTML", "CSS", "Git", "GitHub"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
