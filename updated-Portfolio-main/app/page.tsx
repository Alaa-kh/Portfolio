"use client";

import React, { Suspense, useState, useEffect } from "react";
import { SectionSeparator } from "@/components/ui/section-separator";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const Navbar = React.lazy(() =>
  import("@/components/navbar").then((module) => ({ default: module.Navbar }))
);
const HeroSection = React.lazy(() =>
  import("@/components/hero-section").then((module) => ({
    default: module.HeroSection,
  }))
);
const AboutSection = React.lazy(() =>
  import("@/components/about-section").then((module) => ({
    default: module.AboutSection,
  }))
);
const TechnologyShowcase = React.lazy(() =>
  import("@/components/technology-showcase").then((module) => ({
    default: module.TechnologyShowcase,
  }))
);
// const ServicesSection = React.lazy(() => import('@/components/services-section').then(module => ({ default: module.ServicesSection })));
const WorkSection = React.lazy(() =>
  import("@/components/work-section").then((module) => ({
    default: module.WorkSection,
  }))
);
const CertificatesSection = React.lazy(() =>
  import("@/components/certificates-section").then((module) => ({
    default: module.CertificatesSection,
  }))
);
const TestimonialsSection = React.lazy(() =>
  import("@/components/testimonials-section").then((module) => ({
    default: module.TestimonialsSection,
  }))
);
const ContactSection = React.lazy(() =>
  import("@/components/contact-section").then((module) => ({
    default: module.ContactSection,
  }))
);
const Footer = React.lazy(() =>
  import("@/components/footer").then((module) => ({ default: module.Footer }))
);
// const DevelopmentAlert = React.lazy(() => import('@/components/development-alert').then(module => ({ default: module.DevelopmentAlert })));

// Component to handle progressive loading
function ProgressiveLoader({ children }: { children: React.ReactNode }) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Preload critical components with progress tracking
    const preloadComponents = async () => {
      try {
        const components = [
          { name: "Navbar", import: () => import("@/components/navbar") },
          {
            name: "Hero Section",
            import: () => import("@/components/hero-section"),
          },
          {
            name: "About Section",
            import: () => import("@/components/about-section"),
          },
          {
            name: "Technology Showcase",
            import: () => import("@/components/technology-showcase"),
          },
        ];

        for (let i = 0; i < components.length; i++) {
          const component = components[i];
          setLoadingProgress((i / components.length) * 100);

          try {
            await component.import();
            // Simulate network delay for testing
            await new Promise((resolve) => setTimeout(resolve, 200));
          } catch (error) {
            console.error(`Error loading ${component.name}:`, error);
          }
        }

        setLoadingProgress(100);

        // Small delay to show completion
        setTimeout(() => {
          setIsInitialLoad(false);
        }, 300);
      } catch (error) {
        console.error("Error preloading components:", error);
        setIsInitialLoad(false);
      }
    };

    preloadComponents();
  }, []);

  if (isInitialLoad) {
    return <LoadingSpinner progress={loadingProgress} />;
  }

  return <>{children}</>;
}

export default function Home() {
  return (
    <ProgressiveLoader>
      <main className="min-h-screen">
        {/* <DevelopmentAlert /> */}
        <Suspense fallback={<div className="h-16 bg-background" />}>
          <Navbar />
        </Suspense>

        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <HeroSection />
        </Suspense>

        <SectionSeparator />

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <AboutSection />
        </Suspense>

        <SectionSeparator />

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <TechnologyShowcase />
        </Suspense>

        <SectionSeparator />

        {/* <ServicesSection /> */}

        {/* <SectionSeparator /> */}

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <WorkSection />
        </Suspense>

        <SectionSeparator />

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <TestimonialsSection />
        </Suspense>

        <SectionSeparator />

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <CertificatesSection />
        </Suspense>

        <SectionSeparator />

        <Suspense fallback={<div className="h-96 bg-background" />}>
          <ContactSection />
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-background" />}>
          <Footer />
        </Suspense>
      </main>
    </ProgressiveLoader>
  );
}
