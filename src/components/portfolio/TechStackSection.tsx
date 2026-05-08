"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
 SiRust, 
 SiNextdotjs, 
 SiPython, 
 SiNestjs, 
 SiPostgresql, 
 SiRedis, 
 SiDocker, 
 SiLinux, 
 SiCelery, 
 SiTauri, 
 SiSocketdotio 
} from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc';

const coreTools = [
 {
  category: "Languages & Frameworks",
  items: [
   { name: "Rust", icon: <SiRust className="w-5 h-5"/>, project: "xerweon™ / Corrosion"},
   { name: "TypeScript / Next.js", icon: <SiNextdotjs className="w-5 h-5"/>, project: "xerweon™ / solidServe"},
   { name: "Python / Django", icon: <SiPython className="w-5 h-5"/>, project: "Corrosion Engine"},
   { name: "NestJS", icon: <SiNestjs className="w-5 h-5"/>, project: "xerweon™"},
  ]
 },
 {
  category: "Infrastructure & Data",
  items: [
   { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5"/>, project: "xerweon™ / solidServe"},
   { name: "Redis", icon: <SiRedis className="w-5 h-5"/>, project: "Corrosion Engine"},
   { name: "Docker", icon: <SiDocker className="w-5 h-5"/>, project: "xerweon™ / Corrosion"},
   { name: "Linux Administration", icon: <SiLinux className="w-5 h-5"/>, project: "Cirranex"},
  ]
 },
 {
  category: "Architecture & Tooling",
  items: [
   { name: "WebSockets", icon: <SiSocketdotio className="w-5 h-5"/>, project: "xerweon™"},
   { name: "Celery", icon: <SiCelery className="w-5 h-5"/>, project: "Corrosion Engine"},
   { name: "Tauri", icon: <SiTauri className="w-5 h-5"/>, project: "xerweon™"},
   { name: "Clang / NetworkX", icon: <VscTerminalCmd className="w-5 h-5"/>, project: "Corrosion Engine"},
  ]
 }
];

export const TechStackSection = () => {
 return (
  <section className="py-24 border-t border-border bg-muted overflow-hidden">
   <div className="max-w-5xl mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
     <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Tech Stack</h2>
     <p className="text-muted-foreground max-w-2xl text-lg">
      The primary tools and frameworks I use to build.
     </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
     {coreTools.map((category, index) => (
      <motion.div 
        key={category.category} 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-background p-8 border border-border hover:border-foreground transition-colors duration-300"
      >
       <h3 className="text-xl font-bold text-foreground mb-6">{category.category}</h3>
       <motion.ul 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={{
           hidden: { opacity: 0 },
           visible: {
             opacity: 1,
             transition: { staggerChildren: 0.1, delayChildren: 0.2 + (index * 0.1) }
           }
         }}
         className="space-y-6"
       >
        {category.items.map((item) => (
         <motion.li 
           key={item.name}
           variants={{
             hidden: { opacity: 0, x: -10 },
             visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
           }}
           className="flex items-start gap-4"
         >
          <div className="mt-1 text-foreground">
           {item.icon}
          </div>
          <div>
           <div className="font-semibold text-foreground">{item.name}</div>
           <div className="text-xs font-mono text-muted-foreground mt-1">{item.project}</div>
          </div>
         </motion.li>
        ))}
       </motion.ul>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};
