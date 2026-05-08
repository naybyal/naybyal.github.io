import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const HeroSection = () => {
 return (
  <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-12 relative">
   <div className="absolute top-6 right-6 z-50">
    <ThemeToggle />
   </div>

   <div className="space-y-10 z-10">
    
    <div className="flex items-center gap-4">
     <Image 
      src="/cirranex-logo.png"
      alt="Cirranex Logo"
      width={60} 
      height={60} 
      className="rounded-full border-2 border-foreground p-1 bg-background"
     />
     <div className="font-mono text-sm tracking-wider uppercase bg-foreground text-background px-3 py-1 inline-block">
      Cirranex Tech Pvt. Ltd.
     </div>
    </div>

    <div className="space-y-4">
     <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground">
      Nabiel Ahammed.
     </h1>
     <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
      Founder & Lead Systems Engineer
     </h2>
    </div>

    <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed text-balance">
     I build high-performance, enterprise-grade systems and operational platforms. 
     Focusing on architecture, execution, and reducing complexity in real-world environments.
    </p>

    <div className="pt-4 flex flex-wrap items-center gap-6">
     <a href="#projects" className="group flex items-center gap-2 font-semibold text-lg border-b-2 border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all">
      View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
     </a>
     <a href="#contact" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
      Contact
     </a>
     <a href="https://blog.nabielahammed.com" target="_blank" rel="noopener noreferrer" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
      Blog
     </a>
    </div>
   </div>
   
   {/* Elegant background abstract element */}
   <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-muted rounded-full blur-3xl -z-10 opacity-50 hidden md:block"></div>
  </section>
 );
};
