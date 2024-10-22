'use client'

import { useState, useEffect } from 'react'
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
    description: "A gamified quest adventure inspired by Kerala's culture and heritage.",
    tech: ["Flutter", "Laravel", "TailwindCSS", "PostgreSQL"]
  },
]

const skills = [
  "Next.js", "TypeScript", "Rust", "C",
  "JavaScript", "PostgreSQL", "React", "Python",
  "C++", "Java", "MySQL",
  "Docker", "Bash", "Linux", "Git", "PHP",
  "TailwindCSS", "Flutter", "Laravel", "PrismaORM",
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    setActiveTab(activeTab)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-cyan-500/20">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex items-center justify-center space-x-6">
            <AnimatedNavItem icon={<Code className="w-4 h-4" />}><a href='www.nabielwrites.co'>Visit My Blog!</a></AnimatedNavItem>
            {/* <AnimatedNavItem onClick={() => setActiveTab("skills")} icon={<Terminal className="w-4 h-4" />}>Skills</AnimatedNavItem>
            <AnimatedNavItem onClick={() => setActiveTab("about")} icon={<User className="w-4 h-4" />}>About</AnimatedNavItem> */}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <section id="hero" className="text-center py-20">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-cyan-400">Hi, I&apos;m Nabiel Ahammed!</span>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fullstack Developer & System Programmer
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-black/50 backdrop-blur-md border border-cyan-500/20 rounded-full overflow-hidden">
              <AnimatedTabsTrigger value="projects">Projects</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="skills">Skills</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="about">About</AnimatedTabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-8">
              <Card className="bg-black/70 backdrop-blur-md border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-cyan-400">My Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-8">
                    {projects.map((project, index) => (
                      <motion.li 
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-950/30 transition-colors"
                      >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-cyan-950/50 text-cyan-300 rounded-full">
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
            <TabsContent value="skills" className="mt-8">
              <Card className="bg-black/70 backdrop-blur-md border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-cyan-400">Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="px-4 py-2 bg-cyan-950/50 text-cyan-300 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(8, 145, 178, 0.4)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="about" className="mt-8">
              <Card className="bg-black/70 backdrop-blur-md border border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-cyan-400">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    I&apos;ve been coding since I was young, and my love for tech really took off when I started diving into Linux. I was fascinated by how everything worked under the hood, and I&apos;m excited to explore kernel development in the future. Lately, I&apos;ve been playing around with Rust and building a SaaS dashboard using Next.js, TypeScript, PostgreSQL, and TailwindCSS.
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I love diving into challenging projects and pushing the limits of what I can do. I&apos;m always looking for new ways to innovate and create something truly groundbreaking.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                  >
                    {/* <Button asChild variant="outline" className="bg-cyan-950/50 text-cyan-300 border-cyan-500/50 hover:bg-cyan-900/50">
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        View Full Resume <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button> */}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <footer className="bg-black/50 backdrop-blur-sm py-6 mt-12 border-t border-cyan-500/20 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Nabiel Ahammed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface AnimatedNavItemProps {
  // href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

function AnimatedNavItem({ icon, children }: AnimatedNavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="flex items-center space-x-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
        {icon}
        <span>{children}</span>
      </div>
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
      <Button asChild variant="outline" className="bg-cyan-950/50 text-cyan-300 border-cyan-500/50 hover:bg-cyan-900/50">
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
      className="data-[state=active]:bg-cyan-950/70 data-[state=active]:text-cyan-300"
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