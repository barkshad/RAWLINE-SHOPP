
import React from 'react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../components/TiltCard';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center relative py-20">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#D4C7B0]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em]">Registry Index — Study 00-24</span>
                <div className="w-12 h-[1px] bg-black/5"></div>
              </div>
              <h1 className="text-[12vw] lg:text-[10vw] font-light leading-[0.85] tracking-tight serif italic text-black/90">
                Form <span className="text-black font-normal not-italic">Follows</span> <br />
                <span className="text-[#2D3E50]">Function.</span>
              </h1>
            </div>
            
            <div className="max-w-xl space-y-12">
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-editorial border-l-2 border-[#D4C7B0] pl-10">
                RAWLINE is a structural investigation of the garment. We treat fabric as architecture and pattern-cutting as an engineering discipline. 
              </p>
              
              <div className="flex flex-wrap items-center gap-10">
                <Link 
                  to="/archive" 
                  className="group relative flex items-center gap-6 bg-black text-white px-10 py-5 rounded-sm mono text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#2D3E50]"
                >
                  Enter Repository
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link 
                  to="/philosophy" 
                  className="mono text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-[0.3em] flex items-center gap-3"
                >
                  The Manifesto
                  <div className="w-1 h-1 bg-black/10 rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 animate-fade-in">
             <TiltCard>
                <div className="aspect-[3/4.5] overflow-hidden rounded-sm shadow-2xl relative border-[12px] border-white glass">
                    <img 
                      src="https://picsum.photos/1000/1500?random=105" 
                      className="w-full h-full object-cover grayscale brightness-110" 
                      alt="Garment structure" 
                    />
                    <div className="absolute top-6 left-6 mono text-[8px] text-black font-bold tracking-widest px-2 py-1 glass">REF_00_STUDY</div>
                </div>
             </TiltCard>
          </div>
        </div>
      </section>

      {/* Philosophy Brief */}
      <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center border-t border-black/5">
        <div className="order-2 lg:order-1">
          <TiltCard>
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-xl">
               <img 
                 src="https://picsum.photos/1200/1500?random=108" 
                 className="w-full h-full object-cover grayscale opacity-80" 
                 alt="Process documentation" 
               />
               <div className="absolute inset-0 bg-[#2D3E50]/5"></div>
            </div>
          </TiltCard>
        </div>
        
        <div className="space-y-16 order-1 lg:order-2">
          <div className="space-y-6">
            <h3 className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em]">01 — Methods</h3>
            <h2 className="text-5xl serif italic leading-tight text-black/80">Construction as a <br /> Conversation.</h2>
          </div>
          <p className="text-xl text-editorial text-gray-500 font-light leading-relaxed">
            We are interested in the silence between the lines. Every RAWLINE piece is documented at three stages: the muslin draft, the structural prototype, and the final iteration. We believe that meaning survives longer than novelty.
          </p>
          <Link to="/process" className="inline-flex items-center gap-4 mono text-[10px] font-bold text-black border-b border-black pb-2 hover:opacity-50 transition-opacity">
            View Methodology
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Featured Registry */}
      <section className="py-40 space-y-20">
         <div className="flex justify-between items-end border-b border-black/5 pb-10">
           <div className="space-y-3">
              <span className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Repository Preview</span>
              <h2 className="text-4xl serif italic">Latest Studies</h2>
           </div>
           <Link to="/archive" className="mono text-[10px] font-bold uppercase tracking-widest hover:text-[#2D3E50]">See all entries</Link>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[10, 20, 30].map((id, i) => (
             <div key={id} className="space-y-6 group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm relative">
                   <img 
                     src={`https://picsum.photos/1000/1500?random=${id}`} 
                     className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                     alt={`Study ${i+1}`}
                   />
                   <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="glass px-4 py-2 mono text-[9px] font-bold tracking-widest">VIEW_RECORD</div>
                   </div>
                </div>
                <div className="space-y-2">
                   <span className="mono text-[8px] font-bold text-[#8A9A8A] uppercase">Ref. 00{i+1}</span>
                   <h3 className="text-lg font-medium tracking-tight">Structural Plate 0{i+1}</h3>
                </div>
             </div>
           ))}
         </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-64 text-center space-y-12">
         <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-4xl md:text-6xl serif italic leading-tight text-black/80">Building for the <span className="text-[#D4C7B0]">long line.</span></p>
            <p className="text-gray-400 font-light text-lg">Curiosity over certainty. Meaning over output.</p>
         </div>
         <Link 
            to="/archive" 
            className="inline-block border border-black px-12 py-5 rounded-sm mono text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500"
         >
            Access Full Registry
         </Link>
      </section>
    </div>
  );
};

export default Home;
