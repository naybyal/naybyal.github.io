import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section className="py-24 border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">Education</h2>
            </div>
            
            <div className="relative pl-6 border-l-2 border-black space-y-8">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-black"></span>
                <h3 className="text-xl font-bold text-black">Bachelor of Technology - BTech</h3>
                <h4 className="text-gray-800 font-medium mb-2">Computer Science and Engineering</h4>
                <p className="text-sm text-gray-500 mb-2">University College of Engineering, Muttom, Thodupuzha, Idukki</p>
                <div className="flex items-center gap-4 text-sm font-mono text-gray-600">
                  <span>Nov 2021 – Jul 2025</span>
                  <span className="px-2 py-1 bg-black text-white">CGPA: 8.93</span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">Recognition</h2>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-mono mb-4">
                YIPGI-28983
              </div>
              <h3 className="text-xl font-bold text-black mb-2">District Winner (YIP 7.0)</h3>
              <h4 className="text-gray-600 font-medium mb-4">Young Innovators Programme</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Recognized as District Winner under Young Innovators Programme 7.0 (YIP 7.0) for innovation in Data Sciences and Future Technologies. Awarded for the initial prototype (solidServe) that successfully demonstrated operational digitisation within Akshaya Centers, which subsequently evolved into the enterprise platform xerweon™.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
