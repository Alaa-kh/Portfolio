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
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ===== CSS INSIDE PAGE ===== */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .spin-slow {
          animation: spin-slow 14s linear infinite;
        }

        .spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden md:pb-24 pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-2 pt-16">
                <p className="text-lg text-muted-foreground font-mono">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                  <span className="text-primary neon-glow">
                    Alaa Khaled
                  </span>
                </h1>
              </div>

              {/* TYPEWRITER */}
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

              {/* DESCRIPTION */}
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Flutter Developer (4+ years) building scalable, high-performance Android & iOS apps. Expert in Clean Architecture, Bloc/GetX/Provider, Firebase, APIs, and payments (Stripe, PayPal). Delivered production apps with strong performance, scalability, and UX.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 hover:scale-105"
                  onClick={() =>
                    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-4 justify-center lg:justify-start ">
                <a href="https://github.com/Alaa-kh" target="_blank">
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300">
                    <FaGithub />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/alaa-khaled-7a05a626a" target="_blank">
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300">
                    <FaLinkedin />
                  </Button>
                </a>

                <a href="/ALaa_Khaled_Senior Mobile Application Developer (Flutter)_resume.pdf" download>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300">
                    <Download />
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] mx-auto px-4 sm:px-8 flex items-center justify-center">

                {/* SCALE FOR MOBILE */}
                <div className="relative scale-[0.75] sm:scale-90 md:scale-100">

                  {/* ORBIT 1 */}
                  <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] md:w-[320px] md:h-[320px] border border-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 spin-slow">
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2" />
                  </div>

                  {/* ORBIT 2 */}
                  <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] md:w-[380px] md:h-[380px] border border-secondary/20 rounded-full -translate-x-1/2 -translate-y-1/2 spin-reverse">
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-1/2" />
                  </div>

                  {/* ORBIT 3 */}
                  <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] md:w-[440px] md:h-[440px] border border-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 spin-slow">
                    <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-accent rounded-full -translate-y-1/2" />
                  </div>

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-30 animate-pulse" />

                  {/* IMAGE */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                    <img
                      src="/SelfImage.jpg"
                      alt="Alaa"
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>

                  {/* ICONS */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary text-xs">{`{}`}</span>
                  </div>

                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/30">
                    <span className="text-secondary text-xs">&lt;/&gt;</span>
                  </div>

                  <div className="absolute top-1/2 -left-11 w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
                    <span className="text-accent text-[10px]">fn</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SCROLL */}
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
    </>
  );
}