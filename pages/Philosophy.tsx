
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">Document 01 — Manifest</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            The Philosophy of <br /> the Resolved <span className="text-[#D4C7B0]">Form.</span>
          </h1>
        </header>

        <section className="text-editorial space-y-20 text-2xl md:text-3xl leading-relaxed text-gray-700 font-light reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative">
            <p className="first-letter:text-9xl first-letter:font-light first-letter:float-left first-letter:mr-8 first-letter:mt-4 first-letter:serif first-letter:text-black first-letter:leading-none">
              RAWLINE started as a reaction to the noise. Not just the noise of fashion, but the noise of acceleration. We reject the pressure to constantly invent when we can instead focus on refining what is fundamental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center border-y border-black/5 py-24">
            <div className="md:col-span-7 space-y-12">
                <p>
                    We prioritize the Muslin over the Finish. The Muslin is the truth — it is the moment of pure structural decision before it is covered by the performance of the final product. 
                </p>
                <p>
                    Our garments are structural studies. They are designed to be lived in, aged, and eventually understood as architecture for the individual human experience.
                </p>
            </div>
            <div className="md:col-span-5">
                <div className="glass p-1.5 rounded-sm shadow-2xl rotate-3 hover:rotate-0 transition-all duration-1000 group">
                    <img src="https://picsum.photos/800/1000?random=202" className="w-full grayscale opacity-80 group-hover:opacity-100 transition-opacity" alt="Design process sketch" />
                </div>
            </div>
          </div>

          <blockquote className="italic serif text-4xl md:text-7xl text-gray-200 py-12 md:py-32 leading-tight text-center">
            "We choose the silence of creation over the <br /> <span className="text-black/80">chaos of the marketplace.</span>"
          </blockquote>

          <div className="space-y-12 text-gray-400 max-w-2xl mx-auto pt-20 text-center">
            <p className="text-4xl serif italic text-black/60">Restraint is our only luxury.</p>
            <p className="text-lg md:text-xl leading-relaxed">RAWLINE does not chase relevance. Relevance is fleeting. We chase the resolved line — the one that cannot be improved by adding or removing a single stitch.</p>
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline reveal">
           <div className="flex items-center gap-6">
              <div className="w-4 h-4 border border-black/10 rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-gray-300 font-bold">Registry Manifest established 2024</p>
           </div>
           <div className="text-[12px] uppercase tracking-[0.6em] font-bold flex items-center gap-6">
             <span className="opacity-10 hidden sm:inline">Section Index</span>
             <span className="w-12 h-[1px] bg-black/10 hidden sm:inline"></span>
             <span>01 / 04</span>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
