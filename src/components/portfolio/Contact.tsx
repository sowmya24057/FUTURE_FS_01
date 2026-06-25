import { useState } from "react";
import { Mail, Send, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            Let's build <span className="font-serif-italic text-neon">something.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6">
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: "vsowmyasri2006@gmail.com", href: "mailto:vsowmyasri2006@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 8639151443", href: "tel:+918639151443" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-4 shadow-card hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input id="name" name="name" required className="mt-2 bg-background/40" placeholder="Jane Doe" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 bg-background/40"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 bg-background/40"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full shadow-glow">
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
