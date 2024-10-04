'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Terminal, User, ChevronRight, LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    title: "solidServe",
    description: "An Accounting SaaS designed for Akshaya Centers, streamlining financial operations and management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "PrismaORM", "TailwindCSS"]
  },
  {
    title: "Crusty (Upcoming Project)",
    description: "An educational platform aimed at helping C developers transition seamlessly to Rust, with modern tools and resources.",
    tech: ["Next.js", "TypeScript", "Rust", "Redis", "TailwindCSS", "Docker", "AWS Lambda"]
  },
  {
    title: "ThrillerQuest (Upcoming Project)",
    description: `A gamified quest adventure inspired by Kerala's culture and heritage.`,
    tech: ["Flutter", "Laravel", "TailwindCSS", "PostgreSQL"]
  },
]


const skills = [
  "Next.js", "TypeScript", "Rust", "C",
  "JavaScript", "PostgreSQL", "React", "Python",
  "C++", "Java", "MySQL",
  "Docker", "Bash", "Linux", "Git",
  "TailwindCSS", "Flutter", "Laravel", "PrismaORM",
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-cyan-500/20">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex items-center justify-center space-x-6">
            <AnimatedNavItem href="#projects" icon={<Code className="w-4 h-4" />}>Projects</AnimatedNavItem>
            <AnimatedNavItem href="#skills" icon={<Terminal className="w-4 h-4" />}>Skills</AnimatedNavItem>
            <AnimatedNavItem href="#about" icon={<User className="w-4 h-4" />}>About</AnimatedNavItem>
          </ul>
        </nav>
      </header> */}

      <main className="container mx-auto px-4 pt-24 pb-12">
        <section id="hero" className="text-center py-20">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-cyan-400">I&apos;m Nabiel Ahammed</span>
          </motion.h1>
          <motion.p 
            className="text-lg mb-8 text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fullstack Developer & System Programming Enthusiast
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedButton href="https://github.com/naybyal" icon={<Github />}>GitHub</AnimatedButton>
            <AnimatedButton href="https://linkedin.com/in/nabiel-ahammed" icon={<Linkedin />}>LinkedIn</AnimatedButton>
            <AnimatedButton href="mailto:officiallynabiel@gmail.com" icon={<Mail />}>Contact</AnimatedButton>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-black border border-cyan-500/20 rounded-md">
              <AnimatedTabsTrigger value="projects">Projects</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="skills">Skills</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="about">About</AnimatedTabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <Card className="bg-black border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-cyan-400">My Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {projects.map((project, index) => (
                      <motion.li 
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <h3 className="text-lg font-semibold text-cyan-400">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-cyan-950 text-cyan-400 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills" className="mt-6">
              <Card className="bg-black border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-cyan-400">Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="px-3 py-1 bg-cyan-950 text-cyan-400 rounded"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <Card className="bg-black border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-cyan-400">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-gray-400 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    As a tech-agnostic programmer with a strong focus on Full-Stack Development and Systems Programming, my passion for technology was sparked early on through my immersion in GNU/Linux. This experience led to a keen interest in Linux Kernel Development. Currently, I'm exploring Rust while developing a SaaS dashboard using Next.js, TypeScript, PostgreSQL, and TailwindCSS.
                  </motion.p>
                  <motion.p 
                    className="text-gray-400 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I’m driven by tackling ambitious and innovative projects, always aiming to push the boundaries of what’s possible.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {/* <Button asChild variant="outline" className="w-full bg-cyan-950 text-cyan-400 border-cyan-500 hover:bg-cyan-900">
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        View Full Resume <ChevronRight className="ml-2 h-4" />
                      </a>
                    </Button> */}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <footer className="bg-black/50 backdrop-blur-sm py-6 mt-12 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Nabiel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface AnimatedNavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function AnimatedNavItem({ href, icon, children }: AnimatedNavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a href={href} className="flex items-center space-x-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
        {icon}
        <span>{children}</span>
      </a>
    </motion.li>
  )
}

function AnimatedButton({ href, icon, children }:{
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild variant="outline" className="bg-cyan-950 text-cyan-400 border-cyan-500 hover:bg-cyan-900">
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          {icon}
          <span>{children}</span>
        </a>
      </Button>
    </motion.div>
  )
}

function AnimatedTabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <TabsTrigger 
      value={value}
      className="data-[state=active]:bg-cyan-950 data-[state=active]:text-cyan-400"
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </TabsTrigger>
  )
}