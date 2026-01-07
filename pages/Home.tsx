
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, SiteContent } from '../types';
import { MoveRight, Camera, Fingerprint } from 'lucide-react';
import { getCloudinaryUrl } from '../services/cloudinary';

interface HomeProps {
  products: Product[];
  content: SiteContent;
}

const Home: React.FC<HomeProps> = ({ products, content }) => {
  const latestProduct = products[0];

  return (
    <div className="bg-[#F2EDE4]">
      {/* Dynamic Campaign Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1A1816]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/ds2mbrzcn/image/upload/f_auto,q_auto,e_grayscale,o_20/v1/samples/landscapes/nature-mountains" 
            alt="Nairobi Atelier Background"
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE4] via-[#F2EDE4]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1800px] w-full mx-auto px-6 md:px-12 flex flex-col items-center relative z-10 pt-24 md:pt-32 lg:pt-20">
          <div className="reveal text-center space-y-4 md:space-y-8 mb-12 md:mb-20">
             <span className="mono text-[9px] md:text-[11px] font-black text-[#8E4E35] uppercase tracking-[0.6em] md:tracking-[1em] block">
                {content.brand.heroTagline}
             </span>
             <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-normal tracking-tighter serif italic text-[#1A1816] leading-[0.8] md:leading-[0.72] ink-bleed">
                {content.brand.heroTitle}
             </h1>
             <div className="handwritten text-xl sm:text-2xl md:text-4xl text-[#8E4E35] mt-4 md:mt-6 -rotate-2">
               "{content.brand.heroSubtitle}"
             </div>
          </div>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-end">
            <div className="lg:col-span-4 reveal order-2 lg:order-1" style={{ transitionDelay: '0.4s' }}>
               <div className="space-y-8 md:space-y-12">
                  <p className="text-[#1A1816]/60 text-lg md:text-2xl font-light leading-snug italic serif max-w-sm">
                    {content.brand.description}
                  </p>
                  <Link 
                    to="/archive" 
                    className="group inline-flex items-center gap-4 md:gap-8 mono text-[10px] md:text-[11px] font-black text-[#1A1816] uppercase tracking-[0.4em] md:tracking-[0.5em] transition-all"
                  >
                    <span className="border-b-[3px] md:border-b-[4px] border-[#8E4E35]/20 group-hover:border-[#8E4E35] pb-2 transition-all">Examine Registry</span>
                    <MoveRight size={20} className="group-hover:translate-x-3 md:group-hover:translate-x-4 transition-transform duration-700 text-[#8E4E35]" />
                  </Link>
               </div>
            </div>
            
            <div className="lg:col-span-8 reveal order-1 lg:order-2" style={{ transitionDelay: '0.6s' }}>
               <div className="archive-photo shadow-2xl">
                  <div className="aspect-[4/3] lg:aspect-[16/8] image-zoom-container overflow-hidden relative">
                    <img 
                      src={latestProduct ? getCloudinaryUrl(latestProduct.images[0]) : "https://res.cloudinary.com/ds2mbrzcn/image/upload/v1714567890/rawline_placeholder"} 
                      className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[4000ms] contrast-125 sepia-[0.3]" 
                      alt="Campaign Finding"
                    />
                    <div className="absolute inset-0 bg-[#8E4E35]/10 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 md:gap-4 bg-black/40 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 border border-white/10 rounded-sm">
                       <Fingerprint size={12} className="text-[#8E4E35] md:w-3.5 md:h-3.5" />
                       <span className="mono text-[7px] md:text-[8px] text-white/60 font-black tracking-widest uppercase">
                        PLATE_{latestProduct?.id || 'INDEX'}_NBO
                       </span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 md:py-64 bg-[#1A1816] text-[#F2EDE4] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-20 reveal relative z-10">
          <Camera size={40} className="mx-auto text-[#8E4E35] opacity-40 mb-8 md:mb-12 md:w-12 md:h-12" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6vw] serif italic leading-[1.1] tracking-tight text-white/90">
             Curation as <br className="hidden sm:block" /> 
             <span className="text-[#8E4E35] font-normal not-italic mono text-xl sm:text-2xl md:text-4xl lg:text-[4vw] uppercase tracking-tighter block mt-4 underline decoration-white/10 underline-offset-8">THE_ULTIMATE_ACT_OF_DESIGN</span>
          </h2>
          <div className="w-16 md:w-24 h-[1px] bg-[#8E4E35]/30 mx-auto"></div>
          <p className="text-[#F2EDE4]/50 text-xl md:text-3xl font-light italic serif max-w-2xl mx-auto leading-relaxed px-4">
            "{content.brand.manifestoQuote}"
          </p>
          <div className="pt-8 md:pt-16">
            <Link 
              to="/archive" 
              className="inline-block bg-[#F2EDE4] text-[#1A1816] px-12 md:px-24 py-5 md:py-8 rounded-full mono text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-[#8E4E35] hover:text-white transition-all duration-700 shadow-xl"
            >
              Access Archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
