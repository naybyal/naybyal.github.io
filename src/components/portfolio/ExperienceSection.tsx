"use client";

import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceSection = () => {
 return (
  <section className="py-24 border-t border-border bg-muted">
   <div className="max-w-5xl mx-auto px-6">
    
    <div className="grid md:grid-cols-2 gap-16">
     
     {/* Education */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.6, ease: "easeOut" }}
     >
      <div className="flex items-center gap-3 mb-8">
       <GraduationCap className="w-6 h-6 text-foreground"/>
       <h2 className="text-2xl font-bold text-foreground">Education</h2>
      </div>
      
      <div className=" relative pl-6 border-l-2 border-foreground space-y-8">
       <div className=" relative">
        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-4 border-foreground"></span>
        <h3 className="text-xl font-bold text-foreground">Bachelor of Technology - BTech</h3>
        <h4 className="text-foreground/80 font-medium mb-2">Computer Science and Engineering</h4>
        <p className="text-sm text-muted-foreground mb-2">University College of Engineering, Muttom, Thodupuzha, Idukki</p>
        <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
         <span>Nov 2021 – Jul 2025</span>
         <span className="px-2 py-1 bg-foreground text-background">CGPA: 8.93</span>
        </div>
       </div>
      </div>
     </motion.div>

     {/* Awards & Recognition */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
     >
      <div className="flex items-center gap-3 mb-8">
       <Award className="w-6 h-6 text-foreground"/>
       <h2 className="text-2xl font-bold text-foreground">Recognition</h2>
      </div>
      
      <div className="bg-background border border-border p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-foreground">
       <div className="inline-block px-3 py-1 bg-foreground text-background text-xs font-mono mb-4">
        YIPGI-28983
       </div>
       <h3 className="text-xl font-bold text-foreground mb-2">District Winner (YIP 7.0)</h3>
       <h4 className="text-muted-foreground font-medium mb-4">Young Innovators Programme</h4>
       <p className="text-sm text-muted-foreground leading-relaxed">
        Recognized as District Winner under Young Innovators Programme 7.0 (YIP 7.0) for innovation in Data Sciences and Future Technologies. Awarded for the initial prototype (solidServe) that successfully demonstrated operational digitisation within Akshaya Centers, which subsequently evolved into the enterprise platform xerweon™.
       </p>
      </div>
     </motion.div>

    </div>
   </div>
  </section>
 );
};
