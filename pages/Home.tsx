
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { MoveRight, Compass, History, Camera } from 'lucide-react';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="bg-[#F2EDE4]">
      {/* Archival Campaign Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F2EDE4]">
        <div className="absolute top-0 right-0 w-[80vw] h-full opacity-10 pointer-events-none bg-gradient-to-bl from-[#8E4E35]/30 via-transparent to-transparent blur-3xl"></div>
        
        <div className="max-w-[1800px] w-full mx-auto px-8 md:px-16 flex flex-col items-center relative z-10 pt-20">
          <div className="reveal text-center space-y-8 mb-20">
             <span className="mono text-[10px] md:text-[11px] font-black text-[#8E4E35] uppercase tracking-[1em] block">
                SPRING / SUMMER 2024 — NAIROBI VINTAGE ARCHIVE
             </span>
             <h1 className="text-6xl md:text-[13vw] font-normal tracking-tighter serif italic text-[#1A1816] leading-[0.72] ink-bleed">
                Found & <br /> Restored.
             </h1>
             <div className="handwritten text-2xl md:text-3xl text-[#8E4E35] mt-4 -rotate-3">
               "Documenting the structural soul of Kenya"
             </div>
          </div>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-4 reveal" style={{ transitionDelay: '0.4s' }}>
               <div className="space-y-12">
                  <p className="text-[#1A1816]/60 text-xl md:text-2xl font-light leading-snug italic serif max-w-xs">
                    Recovering the historical integrity of East African vintage fits. Identification 00-24.
                  </p>
                  <Link 
                    to="/archive" 
                    className="group inline-flex items-center gap-8 mono text-[11px] font-black text-[#1A1816] uppercase tracking-[0.5em] transition-all"
                  >
                    <span className="border-b-[4px] border-[#8E4E35]/20 group-hover:border-[#8E4E35] pb-3 transition-all">Enter Registry</span>
                    <MoveRight size={24} className="group-hover:translate-x-4 transition-transform duration-700 text-[#8E4E35]" />
                  </Link>
               </div>
            </div>
            
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.6s' }}>
               <div className="archive-photo">
                  <div className="aspect-[16/8] image-zoom-container overflow-hidden relative">
                    <img 
                      src="https://picsum.photos/1920/1080?random=450" 
                      className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[4000ms] contrast-125 sepia-[0.3]" 
                      alt="Maison Nairobi Archival Finding"
                    />
                    <div className="absolute inset-0 bg-[#8E4E35]/10 mix-blend-overlay"></div>
                    <div className="absolute bottom-10 left-10 flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-white/60"></div>
                       <span className="mono text-[10px] text-white font-black tracking-widest uppercase shadow-sm">PLATE_SS24_001_NBO</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal flex flex-col items-center gap-4" style={{ transitionDelay: '1s' }}>
           <span className="mono text-[8px] uppercase tracking-[0.6em] text-black/30 font-black">Scroll to Examine</span>
           <div className="w-[1px] h-12 bg-black/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#8E4E35] animate-bounce origin-top"></div>
           </div>
        </div>
      </section>

      {/* Restoration Narrative */}
      <section className="py-40 md:py-64 bg-[#F2EDE4] border-y border-black/5 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="space-y-12">
               <div className="flex items-center gap-4 mono text-[10px] font-black text-[#8E4E35] uppercase tracking-[0.6em]">
                  <History size={16} />
                  RESTORATION_LOGIC
               </div>
               <h2 className="text-5xl md:text-[8vw] serif italic tracking-tighter leading-[0.85] text-[#1A1816]">
                  Aged <br /> <span className="text-[#8E4E35]">Structural</span> Integrity.
               </h2>
               <p className="max-w-xl text-2xl md:text-3xl text-[#1A1816]/60 font-light leading-tight italic serif">
                  We don't manufacture 'vintage-look' clothing. We identify historical silhouettes that have already survived for decades and re-tailor them for the high-luxury standards of the Maison.
               </p>
               <Link to="/process" className="inline-block mono text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-[#1A1816] pb-2 hover:text-[#8E4E35] hover:border-[#8E4E35] transition-all">
                  Access Methodology
               </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 reveal" style={{ transitionDelay: '0.4s' }}>
             <div className="grid grid-cols-2 gap-8">
                <div className="archive-photo mt-20 rotate-1">
                  <div className="aspect-[4/5] image-zoom-container overflow-hidden">
                    <img src="https://picsum.photos/800/1000?random=401" className="w-full h-full object-cover grayscale opacity-80 contrast-110" alt="Restoration process detail" />
                  </div>
                </div>
                <div className="archive-photo -rotate-1">
                  <div className="aspect-[4/5] image-zoom-container overflow-hidden">
                    <img src="https://picsum.photos/800/1000?random=402" className="w-full h-full object-cover grayscale opacity-80 contrast-110" alt="Vintage fit inspection" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Registry Showcase */}
      <section className="py-40 md:py-64 px-8 md:px-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 reveal">
          <div className="space-y-6">
            <span className="mono text-[10px] font-black text-[#4A5649] uppercase tracking-[0.6em]">ARCHIVAL_IDENTIFICATIONS</span>
            <h2 className="text-6xl md:text-8xl serif italic tracking-tighter leading-[0.8] text-[#1A1816]">The Registry.</h2>
          </div>
          <Link 
            to="/archive" 
            className="group flex items-center gap-10 mono text-[11px] font-black uppercase tracking-[0.5em] text-[#1A1816] hover:text-[#8E4E35] transition-all"
          >
            Access Full Catalog
            <div className="w-16 h-[2px] bg-[#1A1816]/10 group-hover:w-24 group-hover:bg-[#8E4E35] transition-all duration-700"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 reveal">
          {products.slice(0, 4).map((product, i) => (
            <div 
              key={product.id} 
              className="space-y-8 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link to={`/product/${product.id}`} className="block relative">
                 <div className="archive-photo group-hover:-translate-y-4 transition-transform duration-700">
                    <div className="aspect-[3/4.2] image-zoom-container overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:sepia-[0.2] transition-all duration-1000" 
                          alt={product.name}
                        />
                        <div className="absolute top-4 left-4 mono text-[7px] font-black text-white bg-[#8E4E35] px-2 py-1 opacity-80">
                          ARCH_ID_{product.id}
                        </div>
                    </div>
                 </div>
                 <div className="pt-8 space-y-3 px-2">
                    <div className="flex justify-between items-baseline">
                       <h3 className="text-sm font-black uppercase tracking-widest text-[#1A1816] group-hover:text-[#8E4E35] transition-colors">{product.name}</h3>
                       <span className="mono text-[11px] text-[#8E4E35] font-black">€{product.price}</span>
                    </div>
                    <p className="text-[12px] text-black/30 mono uppercase tracking-widest">{product.category}</p>
                 </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-64 bg-[#1A1816] text-[#F2EDE4] text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-4xl mx-auto space-y-20 reveal relative z-10">
          <Camera size={48} className="mx-auto text-[#8E4E35] opacity-40 mb-12" />
          <h2 className="text-4xl md:text-[6vw] serif italic leading-[1.1] tracking-tight">
             Curation as <br /> 
             <span className="text-[#8E4E35] font-normal not-italic mono uppercase tracking-tighter block mt-4">The Ultimate Act of Design.</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#8E4E35]/30 mx-auto"></div>
          <p className="text-[#F2EDE4]/50 text-xl md:text-3xl font-light italic serif max-w-2xl mx-auto leading-relaxed">
            "We identify historical excellence and re-state its purpose for the next 50 years. True luxury is the longevity of the found form."
          </p>
          <div className="pt-16">
            <Link 
              to="/archive" 
              className="inline-block bg-[#F2EDE4] text-[#1A1816] px-24 py-8 rounded-full mono text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#8E4E35] hover:text-white transition-all duration-1000"
            >
              View Findings
            </Link>
          </div>
          <div className="handwritten text-xl text-[#8E4E35] mt-12 opacity-80">
            RAWLINE Maison d'Archive — Nairobi
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
