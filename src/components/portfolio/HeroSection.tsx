import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-12 relative">
      <div className="space-y-10 z-10">
        
        <div className="flex items-center gap-4">
          <Image 
            src="/cirranex-logo.png" 
            alt="Cirranex Logo" 
            width={60} 
            height={60} 
            className="rounded-full border-2 border-black p-1 bg-white"
          />
          <div className="font-mono text-sm tracking-wider uppercase bg-black text-white px-3 py-1 inline-block">
            Cirranex Tech Pvt. Ltd.
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black">
            Nabiel Ahammed.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
            Founder & Lead Systems Engineer
          </h2>
        </div>

        <p className="text-xl text-gray-800 max-w-2xl leading-relaxed text-balance">
          I build high-performance, enterprise-grade systems and operational platforms. 
          Focusing on architecture, execution, and reducing complexity in real-world environments.
        </p>

        <div className="pt-4 flex items-center gap-6">
          <a href="#projects" className="group flex items-center gap-2 font-semibold text-lg border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="font-medium text-gray-500 hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </div>
      
      {/* Elegant background abstract element */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl -z-10 opacity-50 hidden md:block"></div>
    </section>
  );
};
