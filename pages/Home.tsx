
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, SiteContent } from '../types';
import { MoveRight, History, Camera, Fingerprint } from 'lucide-react';

interface HomeProps {
  products: Product[];
  content: SiteContent;
}

const Home: React.FC<HomeProps> = ({ products, content }) => {
  return (
    <div className="bg-[#F2EDE4]">
      {/* Dynamic Campaign Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F2EDE4]">
        <div className="absolute top-0 right-0 w-[80vw] h-full opacity-10 pointer-events-none bg-gradient-to-bl from-[#8E4E35]/30 via-transparent to-transparent blur-3xl"></div>
        
        <div className="max-w-[1800px] w-full mx-auto px-8 md:px-16 flex flex-col items-center relative z-10 pt-20">
          <div className="reveal text-center space-y-8 mb-20">
             <span className="mono text-[10px] md:text-[11px] font-black text-[#8E4E35] uppercase tracking-[1em] block">
                SPRING / SUMMER 2024 — THE {content.brand.location} REGISTRY
             </span>
             <h1 className="text-6xl md:text-[13vw] font-normal tracking-tighter serif italic text-[#1A1816] leading-[0.72] ink-bleed">
                {content.brand.heroTitle}
             </h1>
             <div className="handwritten text-2xl md:text-4xl text-[#8E4E35] mt-6 -rotate-2">
               "{content.brand.heroSubtitle}"
             </div>
          </div>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-4 reveal" style={{ transitionDelay: '0.4s' }}>
               <div className="space-y-12">
                  <p className="text-[#1A1816]/60 text-xl md:text-2xl font-light leading-snug italic serif max-w-xs">
                    {content.brand.description}
                  </p>
                  <Link 
                    to="/archive" 
                    className="group inline-flex items-center gap-8 mono text-[11px] font-black text-[#1A1816] uppercase tracking-[0.5em] transition-all"
                  >
                    <span className="border-b-[4px] border-[#8E4E35]/20 group-hover:border-[#8E4E35] pb-3 transition-all">Examine Registry</span>
                    <MoveRight size={24} className="group-hover:translate-x-4 transition-transform duration-700 text-[#8E4E35]" />
                  </Link>
               </div>
            </div>
            
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.6s' }}>
               <div className="archive-photo shadow-2xl">
                  <div className="aspect-[16/8] image-zoom-container overflow-hidden relative">
                    <img 
                      src="https://picsum.photos/1920/1080?random=450" 
                      className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[4000ms] contrast-125 sepia-[0.3]" 
                      alt="Campaign Finding"
                    />
                    <div className="absolute inset-0 bg-[#8E4E35]/10 mix-blend-overlay"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm">
                       <Fingerprint size={14} className="text-[#8E4E35]" />
                       <span className="mono text-[8px] text-white/60 font-black tracking-widest uppercase">PLATE_ENTRY_0024_NBO</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal flex flex-col items-center gap-4" style={{ transitionDelay: '1s' }}>
           <span className="mono text-[8px] uppercase tracking-[0.6em] text-black/20 font-black">Investigate Findings</span>
           <div className="w-[1px] h-12 bg-black/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#8E4E35] animate-bounce origin-top"></div>
           </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-64 bg-[#1A1816] text-[#F2EDE4] text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-4xl mx-auto space-y-20 reveal relative z-10">
          <Camera size={48} className="mx-auto text-[#8E4E35] opacity-40 mb-12" />
          <h2 className="text-4xl md:text-[6vw] serif italic leading-[1.1] tracking-tight text-white/90">
             Curation as <br /> 
             <span className="text-[#8E4E35] font-normal not-italic mono uppercase tracking-tighter block mt-4 underline decoration-white/10 underline-offset-8">THE_ULTIMATE_ACT_OF_DESIGN</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#8E4E35]/30 mx-auto"></div>
          <p className="text-[#F2EDE4]/50 text-xl md:text-3xl font-light italic serif max-w-2xl mx-auto leading-relaxed">
            "{content.brand.manifestoQuote}"
          </p>
          <div className="pt-16">
            <Link 
              to="/archive" 
              className="inline-block bg-[#F2EDE4] text-[#1A1816] px-24 py-8 rounded-full mono text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#8E4E35] hover:text-white transition-all duration-1000 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              Access Archive
            </Link>
          </div>
          <div className="handwritten text-xl text-[#8E4E35] mt-12 opacity-60">
            {content.brand.name} {content.brand.subBrand} — {content.brand.location}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
