import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Trusted by Worldwide
            </span>
          </div> */}

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            We Build <span className="text-gradient">Scalable</span>
            <br />
            Websites & Web Applications
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your digital presence with cutting-edge technology,
            stunning design, and enterprise-grade performance.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Team Experts" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-10 top-1/3 hidden lg:block animate-float">
          <div className="p-4 rounded-2xl bg-card border border-border">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div
          className="absolute right-10 top-1/2 hidden lg:block animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="p-4 rounded-2xl bg-card border border-border">
            <Layers className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
