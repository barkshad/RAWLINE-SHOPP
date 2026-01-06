
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { TiltCard } from '../components/TiltCard';
import { ArrowRight, MoveDown } from 'lucide-react';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      {/* Massive Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#D4C7B0]/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4"></div>

        <div className="relative z-10 w-full">
          <div className="overflow-hidden mb-4 md:mb-8">
            <span className="mono text-[10px] md:text-[12px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em] block animate-title-reveal">
              RAWLINE — Archive 01
            </span>
          </div>

          <div className="space-y-0">
            <div className="overflow-hidden">
              <h1 className="hero-title serif italic text-black/90 animate-title-reveal" style={{ animationDelay: '0.1s' }}>
                Timeless
              </h1>
            </div>
            <div className="overflow-hidden flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
              <h1 className="hero-title text-black font-normal not-italic animate-title-reveal" style={{ animationDelay: '0.3s' }}>
                Fits.
              </h1>
              <div className="reveal flex flex-col gap-6 max-w-sm" style={{ transitionDelay: '0.8s' }}>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed italic serif">
                  Historical discoveries identified, curated, and styled for the modern slow fashion movement.
                </p>
                <Link 
                  to="/archive" 
                  className="inline-flex items-center gap-4 mono text-[11px] font-bold text-black uppercase tracking-[0.3em] border-b border-black pb-2 hover:opacity-50 transition-all"
                >
                  Explore Registry
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-0 reveal flex items-center gap-6" style={{ transitionDelay: '1.2s' }}>
          <div className="w-[1px] h-24 bg-black/10 flex flex-col justify-end overflow-hidden">
            <div className="w-full h-full bg-black/40 animate-bounce origin-bottom"></div>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.4em] text-gray-300 font-bold rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </section>

      {/* Philosophy Section with Interactive Elements */}
      <section className="py-32 md:py-64 border-t border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl serif italic leading-[1.1] text-black/90 tracking-tighter">
                We believe the best <span className="text-[#D4C7B0]">garments</span> have already been <span className="text-[#2D3E50]">made.</span>
              </h2>
              <div className="max-w-2xl space-y-8">
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-editorial">
                  Our process is simple yet meticulous: identify excellence, thrift with intention, and style with a modern architectural eye. RAWLINE is a quiet protest against the noise of mass production.
                </p>
                <div className="flex gap-12">
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#2D3E50]">001</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-gray-300 font-bold">Identification</p>
                   </div>
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#2D3E50]">002</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-gray-300 font-bold">Restoration</p>
                   </div>
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#2D3E50]">003</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-gray-300 font-bold">Styling</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.3s' }}>
            <TiltCard>
              <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden relative shadow-2xl group">
                <img 
                  src="https://picsum.photos/1200/1500?random=210" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" 
                  alt="Thrifted discovery" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                  <div className="space-y-1">
                    <p className="mono text-[10px] uppercase tracking-widest font-bold opacity-60">Discovery Record</p>
                    <p className="serif italic text-2xl">Bxl_01.Archive</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Featured Registry Preview */}
      <section className="py-32 md:py-48 border-t border-black/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 reveal">
          <div className="space-y-4">
            <span className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em]">Selected Registry</span>
            <h2 className="text-4xl md:text-6xl serif italic tracking-tighter">Current Archive.</h2>
          </div>
          <Link 
            to="/archive" 
            className="group flex items-center gap-6 mono text-[11px] font-bold uppercase tracking-[0.4em] hover:text-[#2D3E50] transition-colors"
          >
            See Full Index
            <div className="w-12 h-[1px] bg-black/10 group-hover:w-20 group-hover:bg-black transition-all"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {products.slice(0, 3).map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
              <Link to={`/product/${product.id}`} className="group block space-y-10">
                <div className="aspect-[3/4.5] overflow-hidden bg-gray-50 rounded-sm relative shadow-lg">
                   <img 
                     src={product.images[0]} 
                     className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]" 
                     alt={product.name}
                   />
                   <div className="absolute top-8 left-8 mono text-[9px] font-bold tracking-widest bg-white/90 px-4 py-2 border border-black/10 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      ID: {product.id}
                   </div>
                   <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/10 transition-all duration-700"></div>
                </div>
                <div className="space-y-4 px-2">
                   <div className="flex justify-between items-baseline gap-4">
                      <h3 className="text-2xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{product.name}</h3>
                      <span className="mono text-[12px] text-gray-400">€{product.price}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-[1px] bg-black/5"></div>
                      <p className="text-[11px] text-[#8A9A8A] mono uppercase tracking-widest font-bold">{product.category}</p>
                   </div>
                   <p className="text-lg text-gray-400 font-light leading-relaxed italic serif line-clamp-2">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Narrative Section */}
      <section className="py-48 text-center reveal">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="hero-title serif italic text-black/5 opacity-40 select-none">Sustainable</h2>
            <div className="space-y-8 -mt-20 md:-mt-40 relative z-10">
               <p className="text-4xl md:text-7xl serif italic leading-tight text-black/90">Curiosity is our <br /><span className="text-[#D4C7B0]">primary tool.</span></p>
               <p className="text-gray-400 font-light text-xl md:text-2xl px-4 max-w-2xl mx-auto italic serif">"We are not making garments. We are identifying history and styling it for the long line."</p>
               <div className="pt-12">
                  <Link 
                    to="/archive" 
                    className="inline-block bg-black text-white px-16 py-6 rounded-sm mono text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-[#2D3E50] transition-all duration-700 shadow-2xl"
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
