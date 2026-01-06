
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 pb-32">
      <div className="max-w-3xl mx-auto space-y-32">
        <header className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Section 03</h2>
          <h1 className="text-6xl md:text-8xl font-light serif italic tracking-tighter leading-none">Process Over Output</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <img src="https://picsum.photos/800/1000?random=88" className="w-full grayscale opacity-70" alt="Process work" />
          <img src="https://picsum.photos/800/1000?random=89" className="w-full grayscale opacity-70 mt-12 md:mt-24" alt="Process work" />
        </div>

        <section className="text-editorial space-y-12 text-xl leading-relaxed text-gray-700">
          <p>
            Most of what matters happens before the final result. The thinking. The rejecting. The reworking.
          </p>
          
          <p>
            RAWLINE pays attention to those moments. Process is not something to hide — it’s where meaning is formed.
          </p>

          <div className="space-y-12 pt-12 border-t border-black/5">
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase tracking-widest font-bold">We document thoughts</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Capturing the evolution of an idea from a single line to a structural reality.</p>
            </div>
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase tracking-widest font-bold">We revisit ideas</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Returning to discarded drafts to find the essence that was missed the first time.</p>
            </div>
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase tracking-widest font-bold">We allow space for change</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Creation is dynamic. We refuse to freeze a concept before it has found its true form.</p>
            </div>
          </div>

          <p className="pt-12 text-center serif italic text-2xl text-gray-400">
            "There is no rush to arrive. Only a commitment to stay honest."
          </p>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline">
           <p className="text-[10px] uppercase tracking-widest text-gray-300">Methodology Review</p>
           <div className="text-[10px] uppercase tracking-widest font-bold">
             <span className="opacity-20">03</span> / 04
           </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
