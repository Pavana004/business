import { Globe, Layout, Palette, ShoppingCart, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built with modern frameworks for optimal performance and SEO.",
  },
  {
    icon: Layout,
    title: "Web Applications",
    description: "Scalable SaaS platforms and enterprise applications with robust architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers with intuitive interfaces.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payments and inventory management.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description: "Seamless third-party integrations and custom API development for your ecosystem.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed Online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to launch, we provide end-to-end digital solutions 
            tailored to your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold mb-3">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your unique requirements and build something amazing together.
            </p>
            <a 
              href="#contact" 
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
