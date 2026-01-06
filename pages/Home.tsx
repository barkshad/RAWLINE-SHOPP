
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { TiltCard } from '../components/TiltCard';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 -right-20 md:-right-40 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#D4C7B0]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6 reveal">
              <div className="flex items-center gap-4">
                <span className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em]">Study Index — 2024 Collection</span>
                <div className="w-16 h-[1px] bg-black/10"></div>
              </div>
              <h1 className="leading-[0.85] tracking-tighter serif italic text-black/90">
                Form <span className="text-black font-normal not-italic">Follows</span> <br />
                <span className="text-[#2D3E50]">Intention.</span>
              </h1>
            </div>
            
            <div className="max-w-xl space-y-12 reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-editorial border-l-2 border-[#D4C7B0] pl-8 md:pl-12">
                RAWLINE is an architectural investigation of dress. We celebrate the raw draft, the exposed seam, and the honest dialogue between cloth and body.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <Link 
                  to="/archive" 
                  className="w-full sm:w-auto text-center group relative flex items-center justify-center gap-6 bg-black text-white px-10 md:px-12 py-5 rounded-sm mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#2D3E50]"
                >
                  View Archive
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link 
                  to="/philosophy" 
                  className="mono text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-[0.3em] flex items-center gap-4 transition-colors"
                >
                  The Manifesto
                  <div className="w-1.5 h-1.5 bg-[#D4C7B0] rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 reveal" style={{ transitionDelay: '0.4s' }}>
             <TiltCard>
                <div className="aspect-[3/4.5] overflow-hidden rounded-sm shadow-2xl relative border-[12px] border-white glass">
                    <img 
                      src="https://picsum.photos/1000/1500?random=105" 
                      className="w-full h-full object-cover grayscale brightness-105" 
                      alt="Garment structural detail" 
                    />
                    <div className="absolute top-6 left-6 mono text-[9px] text-black font-bold tracking-widest px-3 py-1.5 glass">REF_00_BLUEPRINT</div>
                </div>
             </TiltCard>
          </div>
        </div>
      </section>

      {/* Featured Items Grid */}
      <section className="py-32 md:py-48 border-t border-black/5">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8 reveal">
           <div className="space-y-4">
              <h3 className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.4em]">Current Studies</h3>
              <h2 className="text-4xl md:text-5xl serif italic">Featured in the Registry</h2>
           </div>
           <Link to="/archive" className="mono text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all">Explore Full Database</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {products.slice(0, 3).map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <Link to={`/product/${product.id}`} className="group block space-y-8">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm relative">
                   <img 
                     src={product.images[0]} 
                     className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                     alt={product.name}
                   />
                   <div className="absolute top-6 left-6 mono text-[8px] font-bold tracking-widest bg-white/90 px-3 py-1.5 shadow-sm">{product.id}</div>
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">{product.name}</h3>
                      <span className="mono text-[11px] text-gray-400">€{product.price}</span>
                   </div>
                   <p className="text-[12px] text-gray-400 font-light leading-relaxed line-clamp-2 italic serif">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 md:py-48 border-t border-black/5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
           <TiltCard>
             <div className="aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-sm relative shadow-xl">
                <img 
                  src="https://picsum.photos/1200/900?random=108" 
                  className="w-full h-full object-cover grayscale opacity-90" 
                  alt="Pattern cutting process" 
                />
                <div className="absolute inset-0 bg-[#2D3E50]/5"></div>
             </div>
           </TiltCard>
        </div>
        
        <div className="space-y-12 reveal order-1 lg:order-2" style={{ transitionDelay: '0.2s' }}>
          <div className="space-y-6">
            <h3 className="mono text-[10px] font-bold text-[#8A9A8A] uppercase tracking-[0.5em]">Method 01 — Construction</h3>
            <h2 className="text-4xl md:text-6xl serif italic leading-tight text-black/80">Designing the <br /> Invisible.</h2>
          </div>
          <p className="text-xl text-editorial text-gray-500 font-light leading-relaxed">
            We are fascinated by the draft. The pin marks, the chalk lines, and the temporary basting stitches tell the true story of a garment. At RAWLINE, we refuse to hide the labor. We make the skeleton the soul.
          </p>
          <Link to="/process" className="inline-flex items-center gap-4 mono text-[11px] font-bold text-black border-b border-black pb-2 hover:opacity-50 transition-all">
            Our Methods
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Call to Action Statement */}
      <section className="py-48 md:py-64 text-center space-y-12 reveal">
         <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl serif italic leading-tight text-black/90">Curiosity over <span className="text-[#D4C7B0]">Certainty.</span></h2>
            <p className="text-gray-400 font-light text-lg md:text-xl px-4">Join our quiet investigation into structural clarity and longevity.</p>
         </div>
         <Link 
            to="/archive" 
            className="inline-block border border-black px-12 md:px-16 py-5 rounded-sm mono text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700"
         >
            The Archive
         </Link>
      </section>
    </div>
  );
};

export default Home;
