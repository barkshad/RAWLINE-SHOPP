
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">Document 03 — Methods</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            Methods of <br /> Construction.
          </h1>
        </header>

        <section className="space-y-32 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-12">
               <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-xl rounded-sm">
                  <img src="https://picsum.photos/1000/1500?random=800" className="w-full h-full object-cover grayscale opacity-80" alt="Process detail" />
               </div>
               <div className="space-y-6">
                 <h3 className="mono text-[11px] font-bold uppercase tracking-[0.4em] text-black/30">Step 01 — The Muslin</h3>
                 <p className="text-editorial text-xl text-gray-600 leading-relaxed font-light italic serif">
                   Every piece begins in raw cotton muslin. This is where the tension is discovered. We basting stitch the draft to find the silence between the fabric and the skeleton.
                 </p>
               </div>
            </div>
            <div className="space-y-12 md:mt-48">
               <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-xl rounded-sm">
                  <img src="https://picsum.photos/1000/1500?random=801" className="w-full h-full object-cover grayscale opacity-80" alt="Process detail" />
               </div>
               <div className="space-y-6">
                 <h3 className="mono text-[11px] font-bold uppercase tracking-[0.4em] text-black/30">Step 02 — Calibration</h3>
                 <p className="text-editorial text-xl text-gray-600 leading-relaxed font-light italic serif">
                   The transition from draft to prototype is a dialogue. We calibrate the weight of the seam, the fall of the grain, and the intention of the hem.
                 </p>
               </div>
            </div>
          </div>

          <div className="py-24 border-y border-black/5 text-center space-y-12">
             <h2 className="text-4xl md:text-6xl serif italic text-black/80">"Architecture for the body."</h2>
             <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed italic serif">
               We treat garment assembly like structural engineering. Every stitch is a load-bearing decision. We celebrate the inherent logic of the draft.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-6">
                <div className="aspect-[4/5] overflow-hidden bg-gray-50 rounded-sm">
                  <img src={`https://picsum.photos/800/1000?random=81${i}`} className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" alt={`Method detail ${i}`} />
                </div>
                <h4 className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Phase 0{i+2} Archive</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline reveal">
           <p className="text-[11px] uppercase tracking-[0.5em] text-gray-300 font-bold">Berlin Studio Methodologies</p>
           <div className="text-[12px] uppercase tracking-[0.6em] font-bold flex items-center gap-6">
             <span className="opacity-10 hidden sm:inline">Section Index</span>
             <span className="w-12 h-[1px] bg-black/10 hidden sm:inline"></span>
             <span>03 / 04</span>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
