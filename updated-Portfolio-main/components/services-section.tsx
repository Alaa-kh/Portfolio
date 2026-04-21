"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
  price: string
}

const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern, responsive web applications with cutting-edge technologies",
    features: ["React/Next.js Applications", "Responsive Design", "Performance Optimization", "SEO Implementation"],
    icon: <Globe className="h-8 w-8" />,
    color: "primary",
    price: "From $2,500",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Scalable server-side solutions and robust API architectures",
    features: ["RESTful APIs", "Database Design", "Authentication Systems", "Cloud Integration"],
    icon: <Database className="h-8 w-8" />,
    color: "secondary",
    price: "From $3,000",
  },
  {
    id: "fullstack",
    title: "Full-Stack Solutions",
    description: "End-to-end web applications from concept to deployment",
    features: ["Complete Web Apps", "Real-time Features", "Payment Integration", "Admin Dashboards"],
    icon: <Code className="h-8 w-8" />,
    color: "accent",
    price: "From $5,000",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance",
    features: ["React Native Apps", "iOS & Android", "App Store Deployment", "Push Notifications"],
    icon: <Smartphone className="h-8 w-8" />,
    color: "primary",
    price: "From $4,000",
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    description: "Speed up existing applications and improve user experience",
    features: ["Code Optimization", "Database Tuning", "Caching Strategies", "Monitoring Setup"],
    icon: <Zap className="h-8 w-8" />,
    color: "secondary",
    price: "From $1,500",
  },
  {
    id: "security",
    title: "Security Auditing",
    description: "Comprehensive security analysis and vulnerability assessment",
    features: ["Security Audits", "Penetration Testing", "Code Review", "Compliance Check"],
    icon: <Shield className="h-8 w-8" />,
    color: "accent",
    price: "From $2,000",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary neon-glow">Services</span> I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to bring your digital vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "group cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm",
                activeService === service.id && "ring-2 ring-primary/50 shadow-lg shadow-primary/10",
              )}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <CardHeader className="pb-4">
                <div
                  className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                    service.color === "primary" &&
                      "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                    service.color === "secondary" &&
                      "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
                    service.color === "accent" &&
                      "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
                  )}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">{service.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to start your project? Let's discuss your requirements.</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
