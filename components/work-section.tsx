"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "flutter-quick",
    title: "Quick App",
    description: "E-commerce store application",
    longDescription:
      "An innovative app that lets users quickly order products from nearby stores, browse items, place orders, and track their delivery in real time on a map until it arrives.",
    image: "/quick.png",
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps",
      "API Integration",
      "Notifications",
      "Firebase",
      "State Management",
      "Responsive Design",
      "Animations",
      "Clean Code",
      "Clean Architecture",
    ],
    githubUrl:
      "https://play.google.com/store/apps/details?id=cloud.qucikk.userapp",
  },
  {
    id: "flutter-jobs",
    title: "Jobs App",
    description: "An application for searching and adding job opportunities",
    longDescription:
      "The Jobs app is an ideal platform to quickly and easily search for jobs that suit you. The app offers a large and diverse range of daily job opportunities for men and women in various fields such as engineering, education, sales, office work, and skilled jobs.",
    image: "/jobs.png",
    technologies: [
      "Flutter",
      "Dart",
      "Notifications",
      "Figma",
      "Responsive Design",
      "Animations",
      "Clean Code",
      "Firebase",
    ],
    githubUrl:
      "https://play.google.com/store/apps/details?id=com.kodezela.userjobs",
  },
  {
    id: "flutter-steps",
    title: "Step to Success App",
    description:
      "An educational app for high school students in both the scientific and literary branches",
    longDescription:
      "An application that offers a set of model tests prepared by a group of competent teachers. Through it, the student receives training with exam models for all subjects, qualifying them to enter the exam with full confidence.",
    image: "/steps.png",
    technologies: [
      "Flutter",
      "Dart",
      "Payment Integration",
      "Animations",
      "Clean Code",
      "Firebase",
      "Figma",
      "Responsive Design",
      "Notifications",
      "State Management",
      "Testing",
    ],
    githubUrl:
      "https://play.google.com/store/apps/details?id=successes.blog.step_app",
  },
  {
    id: "flutter-poke",
    title: "Poke-Book App",
    description: "Pokemon search application",
    longDescription:
      "An application that displays images and information about Pokémon using API with search, themes, and animations.",
    image: "/poke.png",
    technologies: [
      "Flutter",
      "Dart",
      "State Management",
      "Responsive Design",
      "Animations",
      "Clean Code",
      "Figma",
      "API Integration",
      "UI/UX",
    ],
    githubUrl: "https://github.com/Alaa-kh/Poke-App",
  },
  {
    id: "flutter-movies",
    title: "Movies App",
    description: "A comprehensive interactive movies app",
    longDescription:
      "An application for watching movies from the API that I designed and programmed using the Flutter framework with GetX. I added notifications and appropriate animations for each section in the app, with the ability to write comments on each movie, detailed information about each movie, the option to add it to favorites, and search for the movie you want. It supports both Arabic and English languages, with dark and light themes, and the ability to view each movie's poster.",
    image: "/movies.png",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Services",
      "Animations",
      "Clean Code",
      "Firebase Authentication",
      "Firebase Firestore",
      "Notifications",
      "API Integration",
      "State Management",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/Alaa-kh/Movies-App",
  },
  {
    id: "flutter-darcom",
    title: "Darcom App",
    description:
      "A comprehensive real estate application for displaying and renting properties",
    longDescription:
      "Darakom Project is a comprehensive real estate platform for displaying and renting properties with electronic payment services and subscription packages. It connects users with real estate agents and offices, providing live chat and AI-supported features to facilitate communication. The project aims to simplify the search and rental experience and bring all the involved parties together in one place.",
    image: "/darcom.png",
    technologies: [
      "Flutter",
      "Dart",
      "Filter and Search",
      "Animations",
      "Clean Code",
      "Clean Architecture",
      "API Integration",
      "State Management",
      "Responsive Design",
    ],
  },
  {
    id: "flutter-step",
    title: "Step App",
    description:
      "An app that connects advertisers with drivers to display ads on cars and provide additional income for drivers.",
    longDescription:
      "Khutwa App is a platform that connects advertisers with advertising campaigns to drivers to facilitate displaying ads on cars. The app provides an opportunity for additional income for drivers through their movement with their cars within the city. The project aims to integrate mobile marketing with supporting flexible income for drivers.",
    image: "/step.png",
    technologies: [
      "Flutter",
      "Dart",
      "Animations",
      "Clean Code",
      "Notifications",
      "API Integration",
      "State Management",
      "Responsive Design",
    ],
  },
];

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isStoreLink = (url: string) => url.includes("play.google.com");

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Featured <span className="text-indigo-400 neon-glow">Work</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Flutter apps and mobile UI/UX + API integration
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 mb-6 rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card
              key={p.id}
              onClick={() => {
                setSelectedProject(p);
                setIsDialogOpen(true);
              }}
              className="
                group cursor-pointer overflow-hidden h-[390px] flex flex-col
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.03]
                border border-transparent hover:border-primary/40
                hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
                bg-card/60 backdrop-blur-sm
              "
            >

              {/* IMAGE */}
              <div className="relative h-[195px] w-full overflow-hidden flex items-center justify-center">
                <img
                  src={p.image}
                  className="h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.85),rgba(30,41,59,0.55),rgba(30,41,59,0.25),transparent)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              {/* CONTENT */}
              <CardContent className="p-4 flex flex-col flex-1">

                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                  {p.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.technologies.slice(0, 3).map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}

                  {p.technologies.length > 3 && (
                    <Badge variant="secondary">
                      +{p.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* ✅ BUTTON OUTSIDE DIALOG (NEW) */}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-fit"
                  >
                    <Badge
                      className="
                        flex items-center gap-2
                        px-3 py-1.5 text-sm
                        cursor-pointer
                        hover:bg-primary hover:text-white
                        transition-colors
                        rounded-md
                      "
                      variant="secondary"
                    >
                      {isStoreLink(p.githubUrl) ? (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          View on Store
                        </>
                      ) : (
                        <>
                          <Github className="w-4 h-4" />
                          GitHub
                        </>
                      )}
                    </Badge>
                  </a>
                )}

              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* DIALOG (UNCHANGED) */}
      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] border border-white/10 p-4 sm:p-6 mx-auto w-[calc(100%-24px)] rounded-xl bg-[linear-gradient(to_bottom,#0f172a,#1f2937)]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>

            <div className="mt-4 max-h-[75vh] overflow-y-auto pr-2 space-y-4 scrollbar-hide">

              <img
                src={selectedProject.image}
                className="w-full h-58 object-cover rounded"
              />

              <p className="text-muted-foreground text-sm">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-1">
                {selectedProject.technologies.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit"
                >
                  <Badge className="flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors rounded-md" variant="secondary">
                    {isStoreLink(selectedProject.githubUrl) ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        View on Store
                      </>
                    ) : (
                      <>
                        <Github className="w-4 h-4" />
                        GitHub
                      </>
                    )}
                  </Badge>
                </a>
              )}

            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}