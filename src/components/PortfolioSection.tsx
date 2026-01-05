import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time analytics platform for financial institutions",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Platform",
    category: "E-commerce",
    description: "Multi-vendor marketplace with 50k+ products",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description: "Patient management system with telemedicine features",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "SaaS Analytics",
    category: "Web Application",
    description: "Business intelligence tool for startups",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That{" "}
            <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our portfolio of successful digital products 
            that have transformed businesses.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border card-hover"
            >
              {/* Gradient Background */}
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="w-20 h-20 rounded-2xl bg-card/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground/80">{project.title.charAt(0)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
