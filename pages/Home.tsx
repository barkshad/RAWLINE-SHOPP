
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { TiltCard } from '../components/TiltCard';
import { ArrowRight, MoveDown } from 'lucide-react';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      {/* Massive Liquid Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
        {/* Deep Water Radial Glows */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#B3704C]/5 rounded-full blur-[180px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#1B3B5A]/8 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="relative z-10 w-full">
          <div className="overflow-hidden mb-6 md:mb-10">
            <span className="mono text-[10px] md:text-[12px] font-bold text-[#5D6D5E] uppercase tracking-[0.6em] block animate-title-reveal">
              RAWLINE — ARCHIVE SERIES 01
            </span>
          </div>

          <div className="space-y-0">
            <div className="overflow-hidden">
              <h1 className="hero-title serif italic text-[#1B3B5A] animate-title-reveal animate-float" style={{ animationDelay: '0.1s' }}>
                Timeless
              </h1>
            </div>
            <div className="overflow-hidden flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
              <h1 className="hero-title text-[#B3704C] font-normal not-italic animate-title-reveal" style={{ animationDelay: '0.3s' }}>
                Fits.
              </h1>
              <div className="reveal flex flex-col gap-8 max-w-sm pt-4 md:pt-0" style={{ transitionDelay: '0.8s' }}>
                <p className="text-[#5D6D5E] text-lg md:text-2xl font-light leading-relaxed italic serif drop-shadow-sm">
                  Curated historical discoveries. Identified, restyled, and preserved for the modern architectural line.
                </p>
                <Link 
                  to="/archive" 
                  className="group inline-flex items-center gap-6 mono text-[11px] font-bold text-[#1B3B5A] uppercase tracking-[0.4em] border-b-2 border-[#1B3B5A]/20 pb-3 hover:text-[#B3704C] hover:border-[#B3704C] transition-all duration-500"
                >
                  Explore Registry
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Liquid Weight */}
        <div className="absolute bottom-16 left-0 reveal flex items-center gap-8" style={{ transitionDelay: '1.2s' }}>
          <div className="w-[1px] h-32 bg-[#1B3B5A]/10 flex flex-col justify-end overflow-hidden">
            <div className="w-full h-1/2 bg-[#B3704C] animate-bounce-slow"></div>
          </div>
          <span className="mono text-[9px] uppercase tracking-[0.6em] text-[#1B3B5A]/30 font-bold rotate-180 [writing-mode:vertical-lr] select-none">Investigate</span>
        </div>
      </section>

      {/* Floating Glass Section */}
      <section className="py-40 md:py-64 relative border-t border-[#1B3B5A]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 md:gap-32 items-center max-w-[1700px] mx-auto">
          <div className="lg:col-span-7 reveal">
            <div className="space-y-16">
              <h2 className="text-6xl md:text-[9vw] serif italic leading-[0.95] text-[#1B3B5A] tracking-tighter">
                Historical <span className="text-[#B3704C]">Form</span> through <span className="text-[#5D6D5E]">Water.</span>
              </h2>
              <div className="max-w-xl space-y-10">
                <p className="text-xl md:text-3xl text-[#1B3B5A]/60 font-light leading-relaxed text-editorial">
                  We treat our findings like artifacts recovered from time. Every garment is a study in structural honesty and the longevity of resolved geometry.
                </p>
                <div className="grid grid-cols-3 gap-8">
                   <div className="space-y-4">
                      <span className="mono text-3xl font-light text-[#B3704C]/40">I</span>
                      <p className="mono text-[8px] uppercase tracking-widest text-[#1B3B5A]/40 font-black">Excavation</p>
                   </div>
                   <div className="space-y-4">
                      <span className="mono text-3xl font-light text-[#B3704C]/40">II</span>
                      <p className="mono text-[8px] uppercase tracking-widest text-[#1B3B5A]/40 font-black">Restoration</p>
                   </div>
                   <div className="space-y-4">
                      <span className="mono text-3xl font-light text-[#B3704C]/40">III</span>
                      <p className="mono text-[8px] uppercase tracking-widest text-[#1B3B5A]/40 font-black">Archive</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.4s' }}>
            <TiltCard>
              <div className="aspect-[4/5] bg-white glass p-3 rounded-sm shadow-[0_40px_100px_rgba(27,59,90,0.1)] group">
                <div className="h-full w-full overflow-hidden rounded-sm relative border border-white/40">
                  <img 
                    src="https://picsum.photos/1200/1500?random=211" 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[3000ms] group-hover:scale-110 group-hover:grayscale-0" 
                    alt="Liquid fit study" 
                  />
                  <div className="absolute inset-0 bg-[#1B3B5A]/10 mix-blend-overlay"></div>
                  <div className="absolute top-8 left-8 glass px-4 py-2 border border-white/50 backdrop-blur-sm">
                    <p className="mono text-[9px] text-[#1B3B5A] font-bold tracking-[0.4em]">REGISTRY_PLATE_003</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Grid High-Contrast Floating Items */}
      <section className="py-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 reveal">
          <div className="space-y-4">
            <span className="mono text-[10px] font-bold text-[#B3704C] uppercase tracking-[0.5em]">Current Repository</span>
            <h2 className="text-5xl md:text-7xl serif italic tracking-tighter text-[#1B3B5A]">Registry Highlights.</h2>
          </div>
          <Link 
            to="/archive" 
            className="group flex items-center gap-8 mono text-[11px] font-bold uppercase tracking-[0.5em] text-[#1B3B5A] hover:text-[#B3704C] transition-all"
          >
            Enter Database
            <div className="w-16 h-[2px] bg-[#1B3B5A]/10 group-hover:w-24 group-hover:bg-[#B3704C] transition-all"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {products.slice(0, 3).map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
              <Link to={`/product/${product.id}`} className="group block space-y-12">
                <div className="aspect-[3/4.5] overflow-hidden bg-white glass p-2 rounded-sm relative shadow-xl hover:shadow-[0_60px_120px_rgba(27,59,90,0.15)] transition-shadow duration-700">
                   <div className="h-full w-full overflow-hidden rounded-sm relative border border-[#1B3B5A]/5">
                      <img 
                        src={product.images[0]} 
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] liquid-hover" 
                        alt={product.name}
                      />
                      <div className="absolute inset-0 bg-[#B3704C]/0 group-hover:bg-[#B3704C]/5 transition-colors"></div>
                   </div>
                   <div className="absolute top-10 left-10 mono text-[8px] font-black tracking-widest bg-[#1B3B5A] text-white px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      ID_{product.id}
                   </div>
                </div>
                <div className="space-y-6 px-4">
                   <div className="flex justify-between items-baseline gap-6">
                      <h3 className="text-3xl font-bold uppercase tracking-tighter text-[#1B3B5A] group-hover:text-[#B3704C] transition-colors duration-500">{product.name}</h3>
                      <span className="mono text-[14px] text-[#B3704C] font-light">€{product.price}</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-10 h-[1px] bg-[#5D6D5E]/30"></div>
                      <p className="text-[10px] text-[#5D6D5E] mono uppercase tracking-[0.4em] font-black">{product.category}</p>
                   </div>
                   <p className="text-xl text-[#1B3B5A]/40 font-light leading-relaxed italic serif line-clamp-2">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Narrative Footer */}
      <section className="py-64 text-center reveal overflow-hidden">
         <div className="max-w-5xl mx-auto relative">
            <h2 className="hero-title serif italic text-[#1B3B5A]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 select-none pointer-events-none">Submerged</h2>
            <div className="space-y-12 relative z-10">
               <p className="text-5xl md:text-8xl serif italic leading-tight text-[#1B3B5A]">Curation is <br /><span className="text-[#B3704C] animate-pulse">Fluid.</span></p>
               <p className="text-[#5D6D5E] font-light text-2xl md:text-3xl px-8 max-w-3xl mx-auto italic serif leading-relaxed opacity-60">
                "We do not build for seasons. We build for the silent currents of history."
               </p>
               <div className="pt-16">
                  <Link 
                    to="/archive" 
                    className="inline-block bg-[#1B3B5A] text-white px-20 py-8 rounded-full mono text-[12px] font-bold uppercase tracking-[0.6em] hover:bg-[#B3704C] transition-all duration-1000 shadow-[0_30px_60px_rgba(27,59,90,0.3)] hover:shadow-[0_40px_80px_rgba(179,112,76,0.3)]"
                  >
                    View Registry Archive
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
