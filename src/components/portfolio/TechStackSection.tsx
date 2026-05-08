import React from 'react';
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
  <section className="py-24 border-t border-border bg-muted">
   <div className="max-w-5xl mx-auto px-6">
    <div className="mb-16">
     <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Tech Stack</h2>
     <p className="text-muted-foreground max-w-2xl text-lg">
      The primary tools and frameworks I use to build.
     </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
     {coreTools.map((category) => (
      <div key={category.category} className="bg-background p-8 border border-border hover:border-foreground transition-colors">
       <h3 className="text-xl font-bold text-foreground mb-6">{category.category}</h3>
       <ul className="space-y-6">
        {category.items.map((item) => (
         <li key={item.name} className="flex items-start gap-4">
          <div className="mt-1 text-foreground">
           {item.icon}
          </div>
          <div>
           <div className="font-semibold text-gray-900">{item.name}</div>
           <div className="text-xs font-mono text-muted-foreground mt-1">{item.project}</div>
          </div>
         </li>
        ))}
       </ul>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};
