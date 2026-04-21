"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Briefcase, Download, Mail, User } from "lucide-react";
import { useState } from "react";

const skills = [
  "Flutter",
  "Dart",
  "Bloc",
  "GetX",
  "Provider",
  "Firebase",
  "REST APIs",
  "Clean Architecture",
];

export function AboutSection() {
  const [showScrollLabel, setShowScrollLabel] = useState(false);

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30 scanning-line"
          style={{ top: "20%" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            About <span className="text-indigo-400 neon-glow">Me</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 mb-6 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-left">
          
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I am a{" "}
            <span className="text-primary neon-glow">
              Flutter Developer
            </span>{" "}
            with{" "}
            <span className="text-primary neon-glow">
              4+ years of experience
            </span>{" "}
            building scalable and high-performance mobile applications for{" "}
            <span className="text-primary neon-glow">Android</span> and{" "}
            <span className="text-primary neon-glow">iOS</span>. I specialize in{" "}
            <span className="text-primary neon-glow">
              Clean Architecture
            </span>{" "}
            and{" "}
            <span className="text-primary neon-glow">
              state management
            </span>{" "}
            solutions such as{" "}
            <span className="text-primary neon-glow">
              Bloc, GetX, and Provider
            </span>.
          </motion.p>

          {/* List */}
          <motion.ul
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="list-disc list-inside text-lg md:text-xl text-gray-300 leading-relaxed space-y-3 my-6"
>
  <li>
    Delivered multiple{" "}
    <span className="text-primary neon-glow">
      production-ready mobile applications
    </span>{" "}
    with a strong focus on performance, scalability, and user experience.
  </li>

  <li>
    Strong expertise in{" "}
    <span className="text-primary neon-glow">
      Clean Architecture, MVVM
    </span>{" "}
    and advanced state management using{" "}
    <span className="text-primary neon-glow">
      Bloc, GetX, and Provider
    </span>.
  </li>

  <li>
    Experienced in integrating{" "}
    <span className="text-primary neon-glow">
      Firebase services
    </span>
    ,{" "}
    <span className="text-primary neon-glow">
      RESTful APIs
    </span>
    , and secure payment systems like{" "}
    <span className="text-primary neon-glow">
      Stripe & PayPal
    </span>.
  </li>

  <li>
    Built and maintained scalable apps with optimized{" "}
    <span className="text-primary neon-glow">
      performance, memory usage, and responsiveness
    </span>.
  </li>

  <li>
    Experience in{" "}
    <span className="text-primary neon-glow">
      app deployment
    </span>{" "}
    and publishing on{" "}
    <span className="text-primary neon-glow">
      Google Play & App Store
    </span>.
  </li>

  <li>
    Apply best practices in{" "}
    <span className="text-primary neon-glow">
      clean code, testing, debugging
    </span>{" "}
    and version control using{" "}
    <span className="text-primary neon-glow">
      Git
    </span>.
  </li>

  <li>
    Ability to analyze requirements and transform ideas into{" "}
    <span className="text-primary neon-glow">
      reliable, user-friendly mobile solutions
    </span>.
  </li>

  <li>
    Comfortable working independently or within teams, delivering high-quality
    results under deadlines.
  </li>
</motion.ul>

          {/* Final Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Passionate about building{" "}
            <span className="text-primary neon-glow">
              impactful mobile experiences
            </span>{" "}
            and continuously improving to stay aligned with modern development
            standards.
          </motion.p>
        </div>
      </div>
    </section>
  );
}