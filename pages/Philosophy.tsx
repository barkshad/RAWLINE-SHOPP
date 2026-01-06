
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 pb-32">
      <div className="max-w-3xl mx-auto space-y-32">
        <header className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Section 01</h2>
          <h1 className="text-6xl md:text-8xl font-light serif italic tracking-tighter leading-none">Why RAWLINE Exists</h1>
        </header>

        <section className="text-editorial space-y-12 text-xl leading-relaxed text-gray-700">
          <p className="first-letter:text-8xl first-letter:font-light first-letter:float-left first-letter:mr-6 first-letter:mt-2 first-letter:serif first-letter:text-black">
            RAWLINE started as a reaction. Not to fashion specifically — but to acceleration. To the pressure to constantly release, constantly explain, constantly sell. To the idea that value is measured by speed, visibility, and volume.
          </p>
          
          <p>
            I wanted to create something slower. Something that could breathe. 
          </p>

          <p>
            RAWLINE is an exploration of the early stages of creation — the raw phase that usually gets hidden or erased. The drafts that don’t make it. The ideas that feel unfinished but honest.
          </p>

          <blockquote className="border-l-4 border-black/5 pl-10 italic serif text-3xl text-gray-300 py-6 my-16">
            "This project is not about perfection. It’s about clarity."
          </blockquote>

          <div className="space-y-6 text-gray-500">
            <p>Clarity of thought. Clarity of intention. Clarity of form.</p>
            <p>RAWLINE does not chase relevance. It is built to last quietly.</p>
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline">
           <p className="text-[10px] uppercase tracking-widest text-gray-300">Manifesto established 2024</p>
           <div className="text-[10px] uppercase tracking-widest font-bold">
             <span className="opacity-20">01</span> / 04
           </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
