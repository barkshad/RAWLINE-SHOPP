
import React from 'react';
import { SiteContent } from '../types';

interface PhilosophyProps {
  content: SiteContent;
}

const Philosophy: React.FC<PhilosophyProps> = ({ content }) => {
  const p = content.philosophy;
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48 bg-[#F2EDE4]">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-400">{p.documentId}</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            {p.title}
          </h1>
        </header>

        <section className="text-editorial space-y-20 text-2xl md:text-3xl leading-relaxed text-gray-700 font-light reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative">
            <p className="first-letter:text-9xl first-letter:font-light first-letter:float-left first-letter:mr-8 first-letter:mt-4 first-letter:serif first-letter:text-black first-letter:leading-none">
              {p.mainParagraph}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center border-y border-black/5 py-24">
            <div className="md:col-span-7 space-y-12">
                <h3 className="text-4xl serif italic text-black/80">{p.sec1Title}</h3>
                <p>{p.sec1Content}</p>
                <p>{p.sec2Content}</p>
            </div>
            <div className="md:col-span-5">
                <div className="archive-photo rotate-3 hover:rotate-0 transition-all duration-1000 group">
                    <img src="https://picsum.photos/800/1000?random=180" className="w-full grayscale opacity-80 group-hover:opacity-100 transition-opacity" alt="Curation discovery photo" />
                </div>
            </div>
          </div>

          <blockquote className="italic serif text-4xl md:text-7xl text-gray-300 py-12 md:py-32 leading-tight text-center">
            "{p.quote}"
          </blockquote>

          <div className="space-y-12 text-gray-400 max-w-2xl mx-auto pt-20 text-center">
            <p className="text-4xl serif italic text-black/60">{p.footerTitle}</p>
            <p className="text-lg md:text-xl leading-relaxed">{p.footerContent}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
