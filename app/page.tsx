"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Socket.io",
        "shadcn/ui",
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard for business metrics with interactive charts, real-time data updates, and export functionality.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Tools",
      technologies: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              ZuhdanNur
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8">
              <Image
                src="/Photo-69.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full h-[200px] w-[200px] mx-auto border-4 border-white shadow-xl object-cover object-top"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Crafting digital experiences with 5 years of expertise in modern
              web technologies
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View Work
              </Button>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-slate-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-700 hover:scale-105">
              <Image
                src="/Photo-72.jpg"
                alt="About me"
                width={400}
                height={400}
                className="w-[400px] h-[400px] rounded-lg shadow-2xl object-cover object-top"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 5 years of experience
                building scalable web applications. I specialize in React,
                Next.js, and Node.js, with a strong focus on creating
                user-centric solutions that solve real-world problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                industry trends.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => {
                    if (window !== undefined) {
                      window.open(
                        "https://www.linkedin.com/in/zuhdan-nur-ihsan-iskandar/",
                        "_blank"
                      );
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => {
                    if (window !== undefined) {
                      window.open("https://github.com/Zuhdannur", "_blank");
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A showcase of my recent work and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-slate-900 dark:bg-slate-600 rounded-full w-fit">
                    {index === 0 && <Code className="h-8 w-8 text-white" />}
                    {index === 1 && <Database className="h-8 w-8 text-white" />}
                    {index === 2 && <Globe className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {skillCategory.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Portfolio. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
