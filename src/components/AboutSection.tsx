import { Shield, Zap, Lightbulb, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage the latest technologies to keep you ahead of the competition.",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized code and infrastructure for blazing-fast load times.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to protect your data and users.",
  },
];

const checkpoints = [
  "Agile development methodology",
  "24/7 dedicated support",
  "100% code ownership",
  "Transparent pricing",
  "On-time delivery guarantee",
  "Post-launch maintenance",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're Not Just Developers,{" "}
              <span className="text-gradient">We're Your Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, we've helped startups and enterprises 
              alike transform their digital presence. Our team of experts combines 
              technical excellence with creative vision to deliver solutions that 
              drive real business results.
            </p>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-4">
              {checkpoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border card-hover flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
