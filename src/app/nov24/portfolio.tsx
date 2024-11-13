'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, User, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from 'next'
 

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

export default function Portfolio() {
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
      {/* Neo-brutalist background elements */}
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
    learnNewThings() {
        console.log("Leveling up and locking in!");
    },
    buildCoolProjects() {
        console.log("Crafting projects with passion and precision.");
    },
    drinkCoffee() {
        console.log("Re-energizing with a fresh brew ☕");
    }
};

while (nabiel.isProgramming) {
    nabiel.learnNewThings();
    nabiel.buildCoolProjects();
    nabiel.drinkCoffee();
}
                `}</code>
              </pre>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              />
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
              <Card className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000]">
                <CardHeader>
                  <CardTitle className="text-3xl">Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {skills.map((skill, index) => (
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
                </CardContent>
              </Card>
            )}
            {activeSection === "about" && (
              <Card className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000]">
                <CardHeader>
                  <CardTitle className="text-3xl">About Me</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg">
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
                >
                I've been coding since I was young, and my passion for technology truly began when I started diving deep into the world of Linux. The way Linux empowers developers to interact with the system at such a low level fascinated me, and I soon realized how much I could accomplish by understanding the inner workings of the OS. This curiosity led me to explore other areas of technology, and now, I'm excited about exploring kernel development in the future and contributing to the evolution of the systems we rely on every day.
                </motion.p>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
                >
                Recently, I've been exploring Rust, a language that has quickly become one of my favorites for system programming. I'm currently building a SaaS dashboard using modern tools such as Next.js, TypeScript, PostgreSQL, and TailwindCSS. This project is helping me hone my full-stack development skills, and I’m especially drawn to Rust's safety and performance features. The intersection of these technologies is allowing me to build high-performance applications while ensuring a smooth user experience.
                </motion.p>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
                >
                I thrive in environments where I can tackle challenging projects that push the boundaries of my skills. Whether it's solving complex problems, optimizing systems, or working on innovative new features, I’m constantly seeking out ways to improve my craft. I believe in continuous learning and always strive to be at the forefront of technology, aiming to create solutions that can make a lasting impact. For me, the process of building something groundbreaking is what drives my passion for tech.
                </motion.p>

                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-black text-yellow-50 mt-12 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nabiel Ahammed. All rights reserved.</p>
      </footer>
    </div>
  )
}

function AnimatedButton({ href, icon, children }: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild variant="outline" className="bg-black text-yellow-50 border-4 border-black hover:bg-yellow-50 hover:text-black font-bold">
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          {icon}
          <span>{children}</span>
        </a>
      </Button>
    </motion.div>
  )
}

function NavItem({ icon, children, section, activeSection, setActiveSection }: { 
  icon: React.ReactNode;
  children: React.ReactNode;
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-stretch"
    >
      <button 
        onClick={() => setActiveSection(section)}
        className={`flex items-center justify-center space-x-2 px-6 py-3 font-bold transition-colors duration-200 ${
          activeSection === section 
            ? 'bg-black text-yellow-50 border-4 border-black' 
            : 'bg-yellow-50 text-black border-4 border-black hover:bg-yellow-100'
        }`}
      >
        <span className="w-5 h-5">{icon}</span>
        <span>{children}</span>
      </button>
    </motion.li>
  )
}

function ProjectCard({ project, index }: { project: { title: string; description: string; tech: string[] }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000000] h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-black text-yellow-50 font-bold transform -skew-x-6">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

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