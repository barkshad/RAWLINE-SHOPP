
import React from 'react';

const Founder: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 pb-32">
      <div className="max-w-3xl mx-auto space-y-32">
        <header className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Section 02</h2>
          <h1 className="text-6xl md:text-8xl font-light serif italic tracking-tighter leading-none">On Starting Without Certainty</h1>
        </header>

        <section className="text-editorial space-y-12 text-xl leading-relaxed text-gray-700">
          <p>
            RAWLINE was not born from a business plan. It started with questions.
          </p>
          
          <p className="text-2xl font-light text-gray-400 serif italic">
            Why does everything feel rushed? Why does design feel louder but less thoughtful? Why do so many brands speak, but say nothing?
          </p>

          <p>
            I didn’t set out to “start a brand.” I set out to understand my relationship with making. RAWLINE became a container for that process.
          </p>

          <p>
            A place where ideas could exist without immediately needing to perform. Where work could be shared honestly, without pretending to be finished.
          </p>

          <div className="py-12 px-10 bg-gray-50/50 border border-black/5 italic serif text-gray-500 text-lg leading-relaxed">
            "I am still learning through this project. Still refining. Still questioning. RAWLINE is not positioned as an authority. It is positioned as a practice. And that practice is ongoing."
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline">
           <p className="text-[10px] uppercase tracking-widest text-gray-300">Studio Notes — Reflection 002</p>
           <div className="text-[10px] uppercase tracking-widest font-bold">
             <span className="opacity-20">02</span> / 04
           </div>
        </section>
      </div>
    </div>
  );
};

export default Founder;
