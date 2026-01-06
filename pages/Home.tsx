
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { TiltCard } from '../components/TiltCard';
import { ArrowRight, MoveRight, Scan, Compass, History } from 'lucide-react';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="bg-[#F8F6F3]">
      {/* Archival Campaign Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[80vw] h-full opacity-10 pointer-events-none bg-gradient-to-bl from-[#A65D3C]/20 via-transparent to-transparent blur-3xl"></div>
        
        <div className="max-w-[1800px] w-full mx-auto px-8 md:px-16 flex flex-col items-center relative z-10">
          <div className="reveal text-center space-y-8 mb-20">
             <span className="mono text-[10px] md:text-[11px] font-black text-[#A65D3C] uppercase tracking-[1em] block">
                SPRING / SUMMER 2024 — THE NAIROBI ARCHIVE
             </span>
             <h1 className="text-6xl md:text-[12vw] font-normal tracking-tighter serif italic text-[#1B3B5A] leading-[0.75]">
                Found & <br /> Restored.
             </h1>
          </div>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-4 reveal" style={{ transitionDelay: '0.4s' }}>
               <div className="space-y-12">
                  <p className="text-[#121212]/50 text-xl md:text-2xl font-light leading-snug italic serif max-w-xs">
                    "Recovering the historical integrity of East African vintage fits."
                  </p>
                  <Link 
                    to="/archive" 
                    className="group inline-flex items-center gap-8 mono text-[11px] font-black text-[#1B3B5A] uppercase tracking-[0.5em] transition-all"
                  >
                    <span className="border-b-[4px] border-[#1B3B5A]/5 group-hover:border-[#1B3B5A] pb-3 transition-all">View The Registry</span>
                    <MoveRight size={24} className="group-hover:translate-x-4 transition-transform duration-700" />
                  </Link>
               </div>
            </div>
            
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.6s' }}>
               <div className="aspect-[16/8] image-zoom-container rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.08)] overflow-hidden relative">
                  <img 
                    src="https://picsum.photos/1920/1080?random=450" 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[3000ms]" 
                    alt="Maison Nairobi Archival Finding"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 flex items-center gap-6">
                     <div className="w-12 h-[1px] bg-white/40"></div>
                     <span className="mono text-[10px] text-white font-black tracking-widest uppercase">REGISTRY_ENTRY_SS24</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal flex flex-col items-center gap-4" style={{ transitionDelay: '1s' }}>
           <span className="mono text-[8px] uppercase tracking-[0.6em] text-black/20 font-black">Investigate</span>
           <div className="w-[1px] h-12 bg-black/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#A65D3C]/60 animate-bounce origin-top"></div>
           </div>
        </div>
      </section>

      {/* Restoration Narrative */}
      <section className="py-40 md:py-64 bg-white border-y border-black/5 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="space-y-12">
               <div className="flex items-center gap-4 mono text-[10px] font-black text-[#A65D3C] uppercase tracking-[0.6em]">
                  <History size={16} />
                  THE_RESTORATION_LOGIC
               </div>
               <h2 className="text-5xl md:text-[8vw] serif italic tracking-tighter leading-[0.85] text-[#1B3B5A]">
                  Vintage <br /> <span className="text-[#A65D3C]">Structural</span> Integrity.
               </h2>
               <p className="max-w-xl text-2xl md:text-3xl text-[#121212]/60 font-light leading-tight italic serif">
                  We don't manufacture 'vintage-look' clothing. We identify historical silhouettes that have already survived for decades and re-tailor them for the architectural standards of the modern Maison.
               </p>
               <Link to="/process" className="inline-block mono text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-black pb-2 hover:text-[#A65D3C] hover:border-[#A65D3C] transition-all">
                  Our Restoration Process
               </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 reveal" style={{ transitionDelay: '0.4s' }}>
             <div className="grid grid-cols-2 gap-8">
                <div className="aspect-[4/5] image-zoom-container rounded-sm shadow-xl overflow-hidden mt-20">
                   <img src="https://picsum.photos/800/1000?random=401" className="w-full h-full object-cover grayscale opacity-80" alt="Restoration process detail" />
                </div>
                <div className="aspect-[4/5] image-zoom-container rounded-sm shadow-xl overflow-hidden">
                   <img src="https://picsum.photos/800/1000?random=402" className="w-full h-full object-cover grayscale opacity-80" alt="Vintage fit inspection" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Registry Showcase */}
      <section className="py-40 md:py-64 px-8 md:px-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 reveal">
          <div className="space-y-6">
            <span className="mono text-[10px] font-black text-[#4A5D4B] uppercase tracking-[0.6em]">ARCHIVAL_FINDINGS_SELECT</span>
            <h2 className="text-6xl md:text-8xl serif italic tracking-tighter leading-[0.8] text-[#1B3B5A]">The Registry.</h2>
          </div>
          <Link 
            to="/archive" 
            className="group flex items-center gap-10 mono text-[11px] font-black uppercase tracking-[0.5em] text-[#1B3B5A] hover:text-[#A65D3C] transition-all"
          >
            Full Catalog
            <div className="w-16 h-[2px] bg-[#1B3B5A]/10 group-hover:w-24 group-hover:bg-[#A65D3C] transition-all duration-700"></div>
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
                 <div className="aspect-[3/4.2] image-zoom-container rounded-sm overflow-hidden shadow-lg border border-black/5">
                    <img 
                      src={product.images[0]} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                      alt={product.name}
                    />
                    <div className="absolute top-6 left-6 mono text-[8px] font-black text-white bg-black px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all">
                       ARCH_REF_{product.id}
                    </div>
                 </div>
                 <div className="pt-8 space-y-3">
                    <div className="flex justify-between items-baseline">
                       <h3 className="text-sm font-black uppercase tracking-widest text-[#1B3B5A] group-hover:text-[#A65D3C] transition-colors">{product.name}</h3>
                       <span className="mono text-[11px] text-[#A65D3C]">€{product.price}</span>
                    </div>
                    <p className="text-[12px] text-black/30 mono uppercase tracking-widest">{product.category}</p>
                 </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-64 bg-[#121212] text-white text-center px-8">
        <div className="max-w-4xl mx-auto space-y-20 reveal">
          <h2 className="text-4xl md:text-[6vw] serif italic leading-tight tracking-tight text-white/90">
             Curation as <br /> 
             <span className="text-[#A65D3C] font-normal not-italic mono uppercase tracking-tighter">The Ultimate Act of Design.</span>
          </h2>
          <div className="w-24 h-[1px] bg-white/10 mx-auto"></div>
          <p className="text-white/40 text-xl md:text-3xl font-light italic serif max-w-2xl mx-auto leading-relaxed">
            "At RAWLINE Maison d'Archive, we don't build new noise. We identify historical excellence and re-state its structural purpose for the next 50 years."
          </p>
          <div className="pt-16">
            <Link 
              to="/archive" 
              className="inline-block bg-white text-black px-24 py-8 rounded-full mono text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#A65D3C] hover:text-white transition-all duration-1000"
            >
              Access The Registry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
