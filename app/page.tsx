'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Pencil } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

  useEffect(() => {
    setActiveTab(activeTab)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-yellow-100 text-black font-mono relative overflow-hidden">
      {/* Retro-inspired background pattern */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #ff6b6b 25%, #ff6b6b 75%, #000 75%, #000)',
          backgroundPosition: '0 0, 10px 10px',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-yellow-100">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex items-center justify-center space-x-6">
            <AnimatedNavItem icon={<Pencil className="w-4 h-4" />}>
              <a href='https://www.nabielwrites.co' target='_blank' rel="noopener noreferrer">&nbsp;Visit My Blog</a>
            </AnimatedNavItem>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <section id="hero" className="text-center py-20">
          <motion.h1 
            className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-black text-yellow-100 px-4 py-2 inline-block transform -skew-x-12">Hi, I&apos;m Nabiel Ahammed!</span>
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8 font-bold"
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
            <TabsList className="grid w-full grid-cols-3 bg-black text-yellow-100 rounded-none border-4 border-black overflow-hidden">
              <AnimatedTabsTrigger value="projects">Projects</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="skills">Skills</AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="about">About</AnimatedTabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-8">
              <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0_0_#000]">
                <CardHeader>
                  <CardTitle className="text-3xl text-center font-bold">My Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-8">
                    {projects.map((project, index) => (
                      <motion.li 
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-4 border-black p-4 hover:bg-yellow-200 transition-colors"
                      >
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-black text-yellow-100 font-bold">
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
              <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0_0_#000]">
                <CardHeader>
                  <CardTitle className="text-3xl text-center font-bold">Skills & Technologies</CardTitle>
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
                        className="px-4 py-2 bg-black text-yellow-100 font-bold text-sm transform -skew-x-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: '#ff6b6b', color: '#000' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="about" className="mt-8">
              <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0_0_#000]">
                <CardHeader>
                  <CardTitle className="text-3xl text-center font-bold">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-lg leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    I&apos;ve been coding since I was young, and my love for tech really took off when I started diving into Linux. I was fascinated by how everything worked under the hood, and I&apos;m excited to explore kernel development in the future. Lately, I&apos;ve been playing around with Rust and building a SaaS dashboard using Next.js, TypeScript, PostgreSQL, and TailwindCSS.
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I love diving into challenging projects and pushing the limits of what I can do. I&apos;m always looking for new ways to innovate and create something truly groundbreaking.
                  </motion.p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <footer className="bg-black text-yellow-100 py-6 mt-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold">&copy; 2024 Nabiel Ahammed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface AnimatedNavItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function AnimatedNavItem({ icon, children }: AnimatedNavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="flex items-center space-x-1 text-sm hover:text-yellow-200 transition-colors">
        {icon}
        <span>{children}</span>
      </div>
    </motion.li>
  )
}

function AnimatedButton({ href, icon, children }: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild variant="outline" className="bg-black text-yellow-100 border-4 border-black hover:bg-yellow-100 hover:text-black font-bold rounded-none">
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
      className="data-[state=active]:bg-yellow-100 data-[state=active]:text-black font-bold"
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