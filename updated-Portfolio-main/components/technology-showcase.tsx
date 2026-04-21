"use client";

import { useEffect, useRef } from "react";
import {
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiExpress,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import React from "react";

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const frontendTechnologies: Technology[] = [
  { name: "Flutter", icon: "🟦", color: "#02569B", category: "Mobile" },
  { name: "Dart", icon: "🎯", color: "#0175C2", category: "Mobile" },
  { name: "Bloc", icon: "🧠", color: "#8E24AA", category: "Mobile" },
  { name: "GetX", icon: "⚡", color: "#00C853", category: "Mobile" },
  { name: "Provider", icon: "📦", color: "#FF9800", category: "Mobile" },
  { name: "MVVM", icon: "🏗️", color: "#3F51B5", category: "Mobile" },
  { name: "Responsive UI", icon: "📐", color: "#009688", category: "Mobile" },
];


const backendTechnologies: Technology[] = [
  { name: "REST API", icon: <BsGlobe />, color: "#FF6B35", category: "Backend" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", category: "Backend" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", category: "Backend" },
  { name: "Express", icon: <SiExpress />, color: "#000000", category: "Backend" },
  { name: "Django", icon: <SiDjango />, color: "#092E20", category: "Backend" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688", category: "Backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Backend" },
];

const toolsTechnologies: Technology[] = [
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717", category: "Tools" },
  { name: "Firebase Console", icon: <SiFirebase />, color: "#FFCA28", category: "Tools" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37", category: "Tools" },
  { name: "VS Code", icon: <BiLogoVisualStudio />, color: "#007ACC", category: "Tools" },
  { name: "Android Studio", icon: "🤖", color: "#3DDC84", category: "Tools" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E", category: "Tools" },
];

interface TechSwiperProps {
  technologies: Technology[];
  direction: "left" | "right";
  speed?: number;
}

function TechSwiper({ technologies, direction, speed = 30 }: TechSwiperProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const scrollWidth = swiper.scrollWidth;
    const clientWidth = swiper.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = direction === "left" ? 0 : maxScroll;

    const animate = () => {
      if (direction === "left") {
        scrollPosition += 1;
        if (scrollPosition >= maxScroll) scrollPosition = 0;
      } else {
        scrollPosition -= 1;
        if (scrollPosition <= 0) scrollPosition = maxScroll;
      }

      swiper.scrollLeft = scrollPosition;
    };

    const interval = setInterval(animate, speed);
    return () => clearInterval(interval);
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={swiperRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide py-8"
      >
        {[...technologies, ...technologies, ...technologies].map(
          (tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex-shrink-0 group cursor-pointer">
              <div className="w-24 h-24 bg-card border border-border rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105">
                <div
                  className="text-3xl mb-2 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  style={{
                    color: tech.color,
                    textShadow: `0 0 10px ${tech.color}40`,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}

export function TechnologyShowcase() {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            <span className="text-indigo-400 neon-glow">Tech</span> Stack
          </h2>    <p className="text-muted-foreground mt-2">
            Cutting-edge technologies I use to build exceptional digital experiences
          </p> 
                 <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 mb-6 rounded-full" /></div>

        <div className="space-y-8">
          {/* Mobile */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1">
                <span className="text-primary font-semibold text-sm">
                  Mobile
                </span>
              </div>
            </div>

            <TechSwiper
              technologies={frontendTechnologies}
              direction="left"
              speed={40}
            />
          </div>

          {/* Backend */}
          <div className="relative">
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-1">
                <span className="text-secondary font-semibold text-sm">
                  Backend & APIs
                </span>
              </div>
            </div>

            <TechSwiper
              technologies={backendTechnologies}
              direction="right"
              speed={35}
            />
          </div>

          {/* Tools */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-1">
                <span className="text-secondary font-semibold text-sm">
                  Tools & Workflow
                </span>
              </div>
            </div>

            <TechSwiper
              technologies={toolsTechnologies}
              direction="left"
              speed={45}
            />
          </div>

        </div>

      </div>
    </section>
  );
}