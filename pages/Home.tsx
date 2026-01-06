
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
      {/* Massive Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#B3704C]/10 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#1B3B5A]/5 rounded-full blur-[120px] pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10 w-full">
          <div className="overflow-hidden mb-4 md:mb-8">
            <span className="mono text-[10px] md:text-[12px] font-bold text-[#5D6D5E] uppercase tracking-[0.5em] block animate-title-reveal">
              RAWLINE — ARCHIVE NO. 01
            </span>
          </div>

          <div className="space-y-0">
            <div className="overflow-hidden">
              <h1 className="hero-title serif italic text-[#1B3B5A] animate-title-reveal" style={{ animationDelay: '0.1s' }}>
                Timeless
              </h1>
            </div>
            <div className="overflow-hidden flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
              <h1 className="hero-title text-[#B3704C] font-normal not-italic animate-title-reveal" style={{ animationDelay: '0.3s' }}>
                Fits.
              </h1>
              <div className="reveal flex flex-col gap-6 max-w-sm" style={{ transitionDelay: '0.8s' }}>
                <p className="text-[#5D6D5E] text-lg md:text-xl font-light leading-relaxed italic serif">
                  Curated historical discoveries identified and restyled for a modern architectural silhouette.
                </p>
                <Link 
                  to="/archive" 
                  className="inline-flex items-center gap-4 mono text-[11px] font-bold text-[#1B3B5A] uppercase tracking-[0.3em] border-b-2 border-[#1B3B5A] pb-2 hover:text-[#B3704C] hover:border-[#B3704C] transition-all"
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
          <div className="w-[2px] h-24 bg-[#1B3B5A]/10 flex flex-col justify-end overflow-hidden">
            <div className="w-full h-full bg-[#B3704C]/60 animate-bounce origin-bottom"></div>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.4em] text-[#1B3B5A]/40 font-bold rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-64 border-t border-[#1B3B5A]/10 bg-mineral-soft -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center max-w-[1700px] mx-auto">
          <div className="lg:col-span-7 reveal">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl serif italic leading-[1.1] text-[#1B3B5A] tracking-tighter">
                The best <span className="text-[#B3704C]">garments</span> already <span className="text-[#5D6D5E]">exist.</span>
              </h2>
              <div className="max-w-2xl space-y-8">
                <p className="text-xl md:text-2xl text-[#1B3B5A]/70 font-light leading-relaxed text-editorial">
                  Our supply chain is the history of craft. We identify excellence in the forgotten, thrift with architectural intention, and style for the next generation of the "long line".
                </p>
                <div className="flex gap-12">
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#B3704C]">01</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-[#1B3B5A]/40 font-bold">Thrift</p>
                   </div>
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#B3704C]">02</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-[#1B3B5A]/40 font-bold">Restore</p>
                   </div>
                   <div className="space-y-2">
                      <span className="mono text-2xl font-light text-[#B3704C]">03</span>
                      <p className="mono text-[9px] uppercase tracking-widest text-[#1B3B5A]/40 font-bold">Style</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.3s' }}>
            <TiltCard>
              <div className="aspect-[4/5] bg-white rounded-sm overflow-hidden relative shadow-2xl group border-8 border-white">
                <img 
                  src="https://picsum.photos/1200/1500?random=210" 
                  className="w-full h-full object-cover transition-all duration-2000ms group-hover:scale-105" 
                  alt="Thrifted discovery" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5A]/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                  <div className="space-y-1">
                    <p className="mono text-[10px] uppercase tracking-widest font-bold opacity-80">Ref: Mineral Study</p>
                    <p className="serif italic text-2xl">Earth_Registry</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Featured Registry Preview */}
      <section className="py-32 md:py-48">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 reveal">
          <div className="space-y-4">
            <span className="mono text-[10px] font-bold text-[#B3704C] uppercase tracking-[0.5em]">Selected Discovery</span>
            <h2 className="text-4xl md:text-6xl serif italic tracking-tighter text-[#1B3B5A]">Registry Highlight.</h2>
          </div>
          <Link 
            to="/archive" 
            className="group flex items-center gap-6 mono text-[11px] font-bold uppercase tracking-[0.4em] text-[#1B3B5A] hover:text-[#B3704C] transition-colors"
          >
            See Full Index
            <div className="w-12 h-[2px] bg-[#1B3B5A]/10 group-hover:w-20 group-hover:bg-[#B3704C] transition-all"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {products.slice(0, 3).map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
              <Link to={`/product/${product.id}`} className="group block space-y-10">
                <div className="aspect-[3/4.5] overflow-hidden bg-white rounded-sm relative shadow-lg">
                   <img 
                     src={product.images[0]} 
                     className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms]" 
                     alt={product.name}
                   />
                   <div className="absolute top-8 left-8 mono text-[9px] font-bold tracking-widest bg-[#1B3B5A] text-white px-4 py-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      ID: {product.id}
                   </div>
                   <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-[#B3704C]/20 transition-all duration-700"></div>
                </div>
                <div className="space-y-4 px-2">
                   <div className="flex justify-between items-baseline gap-4">
                      <h3 className="text-2xl font-bold uppercase tracking-tighter text-[#1B3B5A] group-hover:text-[#B3704C] transition-colors duration-500">{product.name}</h3>
                      <span className="mono text-[12px] text-[#B3704C]">€{product.price}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-[2px] bg-[#5D6D5E]/20"></div>
                      <p className="text-[11px] text-[#5D6D5E] mono uppercase tracking-widest font-bold">{product.category}</p>
                   </div>
                   <p className="text-lg text-[#1B3B5A]/50 font-light leading-relaxed italic serif line-clamp-2">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Narrative Section */}
      <section className="py-48 text-center reveal">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="hero-title serif italic text-[#1B3B5A]/5 select-none">Sustainable</h2>
            <div className="space-y-8 -mt-20 md:-mt-40 relative z-10">
               <p className="text-4xl md:text-7xl serif italic leading-tight text-[#1B3B5A]">Curiosity is <br /><span className="text-[#B3704C]">essential.</span></p>
               <p className="text-[#5D6D5E] font-light text-xl md:text-2xl px-4 max-w-2xl mx-auto italic serif">"We are not making garments. We are identifying history and styling it for the long line."</p>
               <div className="pt-12">
                  <Link 
                    to="/archive" 
                    className="inline-block bg-[#1B3B5A] text-white px-16 py-6 rounded-sm mono text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-[#B3704C] transition-all duration-700 shadow-2xl"
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
