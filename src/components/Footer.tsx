const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Website Development", href: "#" },
      { name: "Web Applications", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "E-commerce", href: "#" },
      { name: "API Integration", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    Support: [
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  bhb
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">BHB</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Building the future of digital experiences, one pixel at a time.
              Your trusted partner for web development excellence.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DevForge. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with ♥ in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
