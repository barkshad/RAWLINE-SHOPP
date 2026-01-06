
import React from 'react';
import { SiteContent } from '../types';

interface ProcessProps {
  content: SiteContent;
}

const Process: React.FC<ProcessProps> = ({ content }) => {
  const p = content.process;
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48 bg-[#F2EDE4]">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">{p.documentId}</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            {p.title}
          </h1>
        </header>

        <section className="space-y-32 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {p.steps.map((step, i) => (
              <div key={step.id} className={`space-y-12 ${i % 2 !== 0 ? 'md:mt-48' : ''}`}>
                 <div className="archive-photo shadow-xl">
                    <img src={step.image} className="w-full h-full object-cover grayscale opacity-80" alt={step.title} />
                 </div>
                 <div className="space-y-6">
                   <h3 className="mono text-[11px] font-bold uppercase tracking-[0.4em] text-black/30">{step.title}</h3>
                   <p className="text-editorial text-xl text-gray-600 leading-relaxed font-light italic serif">
                     {step.description}
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
