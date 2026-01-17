
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
      {/* Editorial Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 reveal space-y-12 order-2 lg:order-1">
             <div className="space-y-6">
                <span className="mono text-[10px] font-black text-[#8E4E35] uppercase tracking-[0.6em] block">
                   {content.brand.heroTagline}
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-[7vw] font-normal tracking-tighter serif italic text-[#1A1816] leading-[0.85]">
                   {content.brand.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-[#1A1816]/60 font-light italic serif leading-snug max-w-md">
                   {content.brand.description}
                </p>
             </div>
             
             <Link 
                to="/archive" 
                className="group inline-flex items-center gap-6 mono text-[11px] font-black text-[#1A1816] uppercase tracking-[0.4em]"
              >
                <span className="border-b border-black/20 group-hover:border-black pb-2 transition-all">Examine Registry</span>
                <MoveRight size={20} className="group-hover:translate-x-2 transition-transform duration-500 text-[#8E4E35]" />
             </Link>
          </div>
          
          <div className="lg:col-span-6 reveal order-1 lg:order-2" style={{ transitionDelay: '0.3s' }}>
             <div className="archive-photo">
                <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                  <img 
                    src={latestProduct ? getCloudinaryUrl(latestProduct.images[0]) : "https://res.cloudinary.com/ds2mbrzcn/image/upload/v1714567890/rawline_placeholder"} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[4000ms] hover:scale-105" 
                    alt="Featured Finding"
                  />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 border border-black/5">
                     <Fingerprint size={12} className="text-[#8E4E35]" />
                     <span className="mono text-[8px] text-black/60 font-black tracking-widest uppercase">
                      PLATE_{latestProduct?.id || 'INDEX'}_NBO
                     </span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 md:py-64 bg-[#1A1816] text-[#F2EDE4] text-center px-6">
        <div className="max-w-4xl mx-auto space-y-16 reveal">
          <Camera size={32} className="mx-auto text-[#8E4E35] opacity-40" />
          <h2 className="text-4xl md:text-6xl serif italic leading-tight tracking-tight">
             "{content.brand.manifestoQuote}"
          </h2>
          <div className="pt-12">
            <Link 
              to="/archive" 
              className="inline-block bg-[#F2EDE4] text-[#1A1816] px-12 py-6 rounded-full mono text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#8E4E35] hover:text-white transition-all duration-700"
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
