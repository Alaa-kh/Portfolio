"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mohammed",
    company: "Linkedin",
    content:
      "A highly skilled Flutter developer, Delivers clean, well-structured code and always focuses on performance and user experience. Great communication and very reliable.",
    rating: 5,
    avatar: "/sara.jpg",
  },
  {
    id: "2",
    name: "Omar Samer",
    company: "Linkedin",
    content:
      "Outstanding work quality. The apps are smooth, modern, and built with attention to detail. Always meets deadlines and understands requirements perfectly.",
    rating: 5,
    avatar: "/omar.jpg",
  },
  {
    id: "3",
    name: "Asmaa Abdullah",
    company: "Linkedin",
    content:
      "Very talented developer with strong UI/UX sense. The projects look professional and production-ready. Would definitely recommend working with him.", rating: 5,
    avatar: "/asmaa.avif",
  },

  {
    id: "4",
    name: "Ahmed Elwan",
    company: "Linkedin",
    content:
    "Alaa is an excellent problem solver and a fast learner. He delivers real, scalable, and clean mobile applications with great architecture and smooth performance.",
    rating: 5,
    avatar: "/ahmed.avif",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Animated Grid Pattern
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,0,60,0.3)_25px,rgba(255,0,60,0.3)_26px,transparent_27px,transparent_49px,rgba(8,253,216,0.3)_50px,rgba(8,253,216,0.3)_51px,transparent_52px),linear-gradient(rgba(255,0,60,0.3)_24px,transparent_25px,transparent_26px,rgba(255,0,60,0.3)_27px,rgba(255,0,60,0.3)_49px,transparent_50px,transparent_51px,rgba(8,253,216,0.3)_52px)] bg-[length:75px_75px]" />
      </div> */}

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30"
          style={{
            top: "20%",
            animation: "scan 8s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Peers <span className="text-primary neon-glow">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What peers say about working with me in the digital realm
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-sm opacity-30 animate-pulse" />

            <Card className="relative bg-card/80 backdrop-blur-md border-2 border-primary/30 rounded-2xl overflow-hidden">
              {/* Glitch Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />

              <CardContent className="p-8 md:p-12 relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-8">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonials[currentIndex].rating
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-50" />
                    <img
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      className="relative w-16 h-16 rounded-full border-2 border-primary/50 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].company}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary shadow-lg shadow-primary/50"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Stats Grid
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 neon-glow">
              50+
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div> */}

        {/* CTA Section
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to join these satisfied clients?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Project
          </Button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
}
