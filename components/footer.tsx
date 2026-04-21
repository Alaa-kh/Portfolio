"use client";

import { Button } from "@/components/ui/button";
import { Download, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Mobile App Development",
  "Flutter Development",
  "API Integration",
  "UI/UX Implementation",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/10 border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary neon-glow mb-2">
                Alaa
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mobile Developer crafting smooth, high-performance mobile experiences using Flutter, APIs, and modern UI/UX design.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/Alaa-kh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/alaa-khaled-7a05a626a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="//Alaa-Khaled-Flutter-Developer-Resume.pdf"
                download
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="text-foreground">alaakhaled22001@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="text-foreground">+966 56 172 8736</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">Saudi Arabia, Riyadh</p>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 text-xs font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Alaa. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
