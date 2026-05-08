"use client";

import React from 'react';
import { ExternalLink, Shield, Database, Workflow, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectsSection = () => {
 return (
  <section id="projects" className="py-24 border-t border-border bg-background">
   <div className="max-w-5xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
     <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Selected Works</h2>
     <p className="text-muted-foreground max-w-2xl text-lg">
      Engineering robust solutions focusing on operational digitization, high-performance systems, and developer tooling.
     </p>
    </motion.div>

    <div className="space-y-24">

     {/* xerweon */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.7, ease: "easeOut" }}
       className="group"
     >
      <div className="flex flex-col lg:flex-row gap-12">
       <div className="lg:w-1/3">
        <div className="sticky top-24">
         <h3 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-0">
          xerweon<sup className="text-lg">™</sup>
         </h3>
         <a href="https://www.xerweon.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6">
          www.xerweon.com <ExternalLink className="w-3 h-3"/>
         </a>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          A comprehensive operational digitisation platform for Akshaya centers. Used by nearly 100 centers, handling queue management, hardware-bound access control, staff governance, and complex billing workflows.
         </p>
         <div className="flex flex-wrap gap-2">
          {['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'WebSockets', 'Tauri/Rust', 'Zustand', 'TanStack', 'Docker', 'GitHub Actions'].map(tech => (
           <span key={tech} className="px-3 py-1 bg-muted text-xs font-mono text-foreground border border-border">
            {tech}
           </span>
          ))}
         </div>
        </div>
       </div>
       <div className="lg:w-2/3 bg-muted border border-border p-8 md:p-12">
        <h4 className="text-xl font-semibold mb-6">Core Architecture &amp; Features</h4>
        <div className="grid md:grid-cols-2 gap-8">
         <div>
          <Shield className="w-6 h-6 mb-3 text-foreground"/>
          <h5 className="font-semibold mb-2">Gatekeeper Enforcement</h5>
          <p className="text-sm text-muted-foreground">Hardware-bound access control ensuring software access is restricted strictly to center-registered PCs, tying staff check-ins directly to workstation usage.</p>
         </div>
         <div>
          <Workflow className="w-6 h-6 mb-3 text-foreground"/>
          <h5 className="font-semibold mb-2">Invoice Lifecycle Tracking</h5>
          <p className="text-sm text-muted-foreground">Complex parent-child linkage for recurring items, advance/balance handling, and wallet-based accounting with immutable activity logs.</p>
         </div>
        </div>
       </div>
      </div>
     </motion.div>

     {/* Corrosion Engine */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.7, ease: "easeOut" }}
       className="group border-t border-border pt-24"
     >
      <div className="flex flex-col lg:flex-row gap-12">
       <div className="lg:w-1/3">
        <div className="sticky top-24">
         <h3 className="text-3xl font-bold text-foreground mb-2">Corrosion Engine</h3>
         <a href="/C-to-Rust_GenAI_Transpiler.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6">
          View Technical Paper (PDF) <ExternalLink className="w-3 h-3"/>
         </a>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Context Aware GenAI-based C-to-Rust Transpiler. An advanced system utilizing compiler design principles and graph algorithms to intelligently translate legacy C code into safe Rust.
         </p>
         <div className="flex flex-wrap gap-2">
          {['Python', 'NetworkX', 'Clang', 'Celery', 'Redis', 'Django'].map(tech => (
           <span key={tech} className="px-3 py-1 bg-muted text-xs font-mono text-foreground border border-border">
            {tech}
           </span>
          ))}
         </div>
        </div>
       </div>
       <div className="lg:w-2/3 bg-muted border border-border p-8 md:p-12 flex flex-col justify-center">
        <Cpu className="w-8 h-8 mb-4 text-foreground"/>
        <h4 className="text-xl font-semibold mb-4">Intelligent Transpilation</h4>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
         Designed to bridge the gap between memory-unsafe C systems and modern Rust safety guarantees. It leverages AST parsing via Clang and dependency resolution through NetworkX to provide context-aware, distributed transpilation pipelines managed by Celery and Redis.
        </p>
       </div>
      </div>
     </motion.div>

     {/* solidServe */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.7, ease: "easeOut" }}
       className="group border-t border-border pt-24"
     >
      <div className="flex flex-col lg:flex-row gap-12">
       <div className="lg:w-1/3">
        <div className="sticky top-24">
         <h3 className="text-3xl font-bold text-foreground mb-2">solidServe</h3>
         <div className="inline-block bg-foreground text-background text-xs font-mono px-2 py-1 mb-6">
          YIP 7.0 District Winner
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          The initial MVP built as an accounting and management SaaS for Akshaya Centers. Focused on reducing bookkeeping friction, it validated the operational need and directly evolved into xerweon™.
         </p>
         <div className="flex flex-wrap gap-2">
          {['Next.js', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS'].map(tech => (
           <span key={tech} className="px-3 py-1 bg-muted text-xs font-mono text-foreground border border-border">
            {tech}
           </span>
          ))}
         </div>
        </div>
       </div>
       <div className="lg:w-2/3 bg-muted border border-border p-8 md:p-12">
        <h4 className="text-xl font-semibold mb-6">Evolution to xerweon™</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
         After real-world usage, a strategic decision was made to rewrite the system from the ground up. This involved redesigning the database schema, restructuring domain models, and strengthening financial enforcement logic. Both solidServe and the complete architectural rewrite into xerweon™ were independently designed and built by me.
        </p>
       </div>
      </div>
     </motion.div>

     {/* Smaller Projects Grid */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.7, ease: "easeOut" }}
       className="border-t border-border pt-24"
     >
      <h3 className="text-2xl font-bold text-foreground mb-8">Additional Tools</h3>
      <div className="grid md:grid-cols-2 gap-6">
       <div className="p-6 border border-border hover:border-foreground transition-colors duration-300 group">
        <Terminal className="w-5 h-5 mb-4 text-foreground"/>
        <h4 className="font-semibold text-lg mb-2 flex justify-between items-center">
         Breeze
         <a href="https://github.com/naybyal/breeze" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"/>
         </a>
        </h4>
        <p className="text-sm text-muted-foreground mb-4">A lightweight, highly performant Vim-like text editor written entirely in C.</p>
        <span className="text-xs font-mono bg-muted px-2 py-1">C</span>
       </div>

       <div className="p-6 border border-border hover:border-foreground transition-colors duration-300 group">
        <Database className="w-5 h-5 mb-4 text-foreground"/>
        <h4 className="font-semibold text-lg mb-2 flex justify-between items-center">
         Arxiv Desktop Notifier
         <a href="https://github.com/naybyal/arxiv-desktop-notifier" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"/>
         </a>
        </h4>
        <p className="text-sm text-muted-foreground mb-4">An asynchronous desktop notification service for monitoring new Arxiv paper publications.</p>
        <div className="flex gap-2">
         <span className="text-xs font-mono bg-muted px-2 py-1">Python</span>
         <span className="text-xs font-mono bg-muted px-2 py-1">AsyncIO</span>
        </div>
       </div>
      </div>
     </motion.div>

    </div>
   </div>
  </section>
 );
};
