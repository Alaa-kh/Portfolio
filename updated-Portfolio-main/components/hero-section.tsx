"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

const roles = [
  "Flutter Developer",
  "Mobile Apps Engineer",
  "Clean Architecture Specialist",
  "Firebase & API Integrator",
  "Problem Solver",
];


export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showScrollLabel, setShowScrollLabel] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentRoleIndex]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden md:pb-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-2 pt-16">
              <p className="text-lg text-muted-foreground font-mono">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                <span className="text-primary neon-glow">Alaa Khaled</span>
              </h1>
            </div>

            {/* Typewriter Effect */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <div className="text-2xl md:text-3xl font-semibold text-secondary">
                <span className="font-mono">&gt; </span>
                <span
                  className={cn(
                    "border-r-2 border-accent",
                    isTyping ? "animate-pulse" : ""
                  )}
                >
                  {displayedText}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Flutter Developer with 4+ years of experience building scalable, 
              high-performance mobile applications for Android and iOS. Specialized in Clean Architecture
               and state management solutions such as Bloc, GetX, and Provider. Experienced in integrating
               Firebase, RESTful APIs, and payment systems like Stripe and PayPal. Contributed to the development
                and successful launch of multiple production-ready apps, with a strong focus on performance, scalability, and user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
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
              <a href="/Alaa-Khaled-Flutter-Developer-Resume.pdf" download>
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

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-30 animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                <img
                  src="/SelfImage.jpg"
                  alt="Ibrahim - Full-Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <span className="text-primary font-mono text-sm">{`{}`}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                <span className="text-secondary font-mono text-sm">
                  &lt;/&gt;
                </span>
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                <span className="text-accent font-mono text-xs">fn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-[35] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          onMouseEnter={() => setShowScrollLabel(true)}
          onMouseLeave={() => setShowScrollLabel(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary-foreground hover:bg-primary dark:hover:bg-primary/80 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
          {showScrollLabel && (
            <div className="absolute -top-8 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md transition-all duration-300 whitespace-nowrap">
              About Me
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
