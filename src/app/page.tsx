'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, User } from 'lucide-react'

const projects = [
  {
    title: "solidServe",
    description: "An Accounting SaaS designed for Akshaya Centers, streamlining financial operations and management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "PrismaORM", "TailwindCSS"]
  },
  {
    title: "Crusty",
    description: "An educational platform aimed at helping C developers transition seamlessly to Rust, with modern tools and resources.",
    tech: ["Next.js", "TypeScript", "Rust", "Redis", "TailwindCSS", "Docker", "AWS Lambda"]
  },
  {
    title: "ThrillerQuest",
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

export default function Page() {
  const [activeSection, setActiveSection] = useState("projects")
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

  return (
    <div className="min-h-screen bg-yellow-50 text-black font-mono relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-50">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
      </div>

      <header className="bg-black text-yellow-50 py-4 sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4">
          <ul className="flex items-center justify-between">
            <li>
              <motion.h1 
                className="text-2xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Nabiel Ahammed
              </motion.h1>
            </li>
            <li>
              <motion.a 
                href='https://www.nabielwrites.co' 
                target='_blank' 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit My Blog <ExternalLink className="w-4 h-4 ml-1" />
              </motion.a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section id="hero" className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                className="text-5xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Fullstack Developer & System Programmer
              </motion.h2>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Crafting efficient and innovative solutions for complex problems
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AnimatedButton href="https://github.com/naybyal" icon={<Github />}>GitHub</AnimatedButton>
                <AnimatedButton href="https://linkedin.com/in/nabiel-ahammed" icon={<Linkedin />}>LinkedIn</AnimatedButton>
                <AnimatedButton href="mailto:officiallynabiel@gmail.com" icon={<Mail />}>Contact</AnimatedButton>
              </motion.div>
            </div>
            <motion.div 
              className="bg-black p-8 shadow-[8px_8px_0_0_#000000] border-4 border-black relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <pre className="text-yellow-50 overflow-x-auto">
                <code>{`const nabiel = {
  skills: ['TypeScript', 'Rust', 'C', 'Java'],
  interests: [
    'Building Enterprise-grade Applications',
    'Music Composition and Performance',
    'Voracious reading across diverse genres'
  ],
  isProgramming: true,
};

while (nabiel.isProgramming) {
  nabiel.learnNewThings();
  nabiel.buildCoolProjects();
  nabiel.drinkCoffee();
}`}</code>
              </pre>
            </motion.div>
          </div>
        </section>

        <nav className="mb-12">
          <ul className="flex justify-center space-x-4">
            <NavItem icon={<Code />} section="projects" activeSection={activeSection} setActiveSection={setActiveSection}>Projects</NavItem>
            <NavItem icon={<Terminal />} section="skills" activeSection={activeSection} setActiveSection={setActiveSection}>Skills</NavItem>
            <NavItem icon={<User />} section="about" activeSection={activeSection} setActiveSection={setActiveSection}>About</NavItem>
          </ul>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === "projects" && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            )}
            {activeSection === "skills" && (
              <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000] p-6">
                <h3 className="text-3xl font-bold mb-4">Skills & Technologies</h3>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skills.map((skill) => (
                    <motion.span 
                      key={skill}
                      className="px-3 py-1 bg-black text-yellow-50 text-sm font-bold transform -skew-x-6 hover:skew-x-0 transition-transform"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            )}
            {activeSection === "about" && (
              <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000] p-6">
                <h3 className="text-3xl font-bold mb-4">About Me</h3>
                <div className="prose prose-lg">
                  <p>
                    I&apos;ve been coding since I was young, and my love for tech really took off when I started diving into Linux. I was fascinated by how everything worked under the hood, and I&apos;m excited to explore kernel development in the future.
                  </p>
                  <p>
                    Beyond coding, I&apos;m a musician at heart and a lifelong learner, constantly reading and exploring new fields.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

const NavItem = ({ icon, children, section, activeSection, setActiveSection }: {
  icon: React.ReactNode;
  children: React.ReactNode;
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => (
  <motion.li 
    className={`flex items-center space-x-2 font-bold cursor-pointer p-2 ${activeSection === section ? 'text-blue-600' : 'text-black'}`}
    whileHover={{ scale: 1.1 }}
    onClick={() => setActiveSection(section)}
  >
    {icon}
    <span>{children}</span>
  </motion.li>
)

const AnimatedButton = ({ href, icon, children }: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-black text-yellow-50 border-2 border-black transform -skew-x-6 hover:skew-x-0 transition-transform font-bold"
    whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
    <span className="ml-2">{children}</span>
  </motion.a>
)

const ProjectCard = ({ project, index }: {
  project: {
    title: string;
    description: string;
    tech: string[];
  };
  index: number;
}) => (
  <motion.div
    className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000] p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
    <p className="text-base mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span key={tech} className="bg-yellow-100 text-black font-semibold px-3 py-1 text-sm border border-black">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}