import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { TypewriterEffectSmooth } from "../app/components/typewriter-effect";

// Navigation links
const navigation = [
  { name: "Blog", href: "https://www.nabielwrites.co" },
  { name: "Contact", href: "/contact" },
];

// Words for the typewriter effect
const words = [
  { text: "Hi!" },
  { text: "Nabiel" },
  { text: "here." },
  { text: "I'm a" },
  { text: "Backend", className: "text-cyan-500" },
  { text: "Engineer", className: "text-cyan-500" },
  { text: "and a" },
  { text: "System Programmer.", className: "text-cyan-500" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Navigation Bar */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Horizontal Glow Line */}
      <div className="hidden w-screen h-px md:block animate-fade-left animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Particles Background */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* Title with Typewriter Effect */}
      <h1 className="z-10 text-2xl sm:text-6xl md:text-9xl font-light text-transparent bg-white bg-clip-text text-edge-outline animate-title cursor-default whitespace-nowrap">
        <TypewriterEffectSmooth words={words} />
      </h1>

      {/* Bottom Glow Line */}
      <div className="hidden w-screen h-px md:block animate-fade-right animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Description */}
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          I'm currently building <strong>solidServe</strong>, an accounting SaaS for Akshaya Centers.
        </h2>
      </div>
    </div>
  );
}
