
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 pt-56 pb-40">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 animate-reveal">
          <div className="flex items-center gap-6">
            <span className="w-12 h-[1px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">Document 01</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            Why RAWLINE Exists
          </h1>
        </header>

        <section className="text-editorial space-y-20 text-2xl leading-relaxed text-gray-700 font-light animate-reveal stagger-2">
          <div className="relative">
            <p className="first-letter:text-9xl first-letter:font-light first-letter:float-left first-letter:mr-8 first-letter:mt-4 first-letter:serif first-letter:text-black first-letter:leading-none">
              RAWLINE started as a reaction. Not to fashion specifically — but to acceleration. To the pressure to constantly release, constantly explain, constantly sell. To the idea that value is measured by speed, visibility, and volume.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 space-y-12">
                <p>
                    I wanted to create something slower. Something that could breathe. 
                </p>
                <p>
                    RAWLINE is an exploration of the early stages of creation — the raw phase that usually gets hidden or erased. The drafts that don’t make it. The ideas that feel unfinished but honest.
                </p>
            </div>
            <div className="md:col-span-5">
                <div className="glass p-1 rounded-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-1000">
                    <img src="https://picsum.photos/800/1000?random=202" className="w-full grayscale opacity-80" alt="Process sketch" />
                </div>
            </div>
          </div>

          <blockquote className="border-l-2 border-black/10 pl-16 italic serif text-4xl md:text-6xl text-gray-300 py-12 my-24 leading-tight">
            "This project is not about perfection.<br /> It’s about <span className="text-black/70">clarity.</span>"
          </blockquote>

          <div className="space-y-12 text-gray-400 max-w-2xl border-t border-black/5 pt-20">
            <p className="text-3xl serif italic">Clarity of thought. Clarity of intention. Clarity of form.</p>
            <p className="text-lg">RAWLINE does not chase relevance. It is built to last quietly. We favor the silence of creation over the noise of the marketplace.</p>
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline animate-reveal stagger-4">
           <div className="flex items-center gap-6">
              <div className="w-3 h-3 border border-black/10 rounded-full flex items-center justify-center">
                 <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 font-bold">Registry Manifest established 2024</p>
           </div>
           <div className="text-[12px] uppercase tracking-[0.5em] font-bold flex items-center gap-4">
             <span className="opacity-10">Section Index</span>
             <span className="w-12 h-[1px] bg-black/10"></span>
             <span>01 / 04</span>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
