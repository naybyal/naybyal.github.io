"use client";

import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
 return (
  <footer id="contact" className="border-t border-foreground bg-foreground text-background">
   <motion.div 
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, margin: "-50px" }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
   >
    <div className="space-y-4">
     <h2 className="text-3xl font-bold text-background">Get in touch</h2>
     <p className="text-sm text-background/70 max-w-sm">
      Formal, practical, and honest communication. Based in Kerala, India.
     </p>
     <div className="pt-2 flex flex-col gap-2">
      <a href="https://www.cirranex.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors duration-300">
       Cirranex Tech Pvt. Ltd. <ExternalLink className="w-3 h-3"/>
      </a>
      <a href="https://www.xerweon.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors duration-300">
       Get xerweon™ <ExternalLink className="w-3 h-3"/>
      </a>
     </div>
    </div>

    <div className="flex gap-4">
     <a href="mailto:officiallynabiel@gmail.com" className="p-3 bg-background/10 rounded-sm text-background hover:bg-background hover:text-foreground transition-all duration-300 active:scale-95 border border-background/20">
      <Mail className="w-5 h-5"/>
      <span className="sr-only">Email</span>
     </a>
     <a href="https://github.com/naybyal" target="_blank" rel="noopener noreferrer" className="p-3 bg-background/10 rounded-sm text-background hover:bg-background hover:text-foreground transition-all duration-300 active:scale-95 border border-background/20">
      <Github className="w-5 h-5"/>
      <span className="sr-only">GitHub</span>
     </a>
     <a href="https://linkedin.com/in/nabiel-ahammed" target="_blank" rel="noopener noreferrer" className="p-3 bg-background/10 rounded-sm text-background hover:bg-background hover:text-foreground transition-all duration-300 active:scale-95 border border-background/20">
      <Linkedin className="w-5 h-5"/>
      <span className="sr-only">LinkedIn</span>
     </a>
    </div>
   </motion.div>
   <motion.div 
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5, delay: 0.3 }}
     className="max-w-5xl mx-auto px-6 pb-8 text-xs text-background/70 font-mono flex flex-col md:flex-row justify-between border-t border-background/10 pt-8 mt-8"
   >
    <span>&copy; {new Date().getFullYear()} Nabiel Ahammed. All rights reserved.</span>
    <span>Kerala, India</span>
   </motion.div>
  </footer>
 );
};
