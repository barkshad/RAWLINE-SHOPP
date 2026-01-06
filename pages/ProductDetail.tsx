
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-64 text-center space-y-12">
        <h2 className="text-4xl font-light serif italic opacity-30">Record retracted or classified.</h2>
        <Link 
            to="/archive" 
            className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold border border-[#1B3B5A]/10 px-10 py-5 rounded-sm glass text-[#1B3B5A] hover:bg-[#1B3B5A] hover:text-white transition-all duration-700"
        >
          Return to Registry Origin
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <Link 
        to="/archive" 
        className="fixed top-32 left-8 md:left-12 z-40 bg-white/80 backdrop-blur-md p-3 rounded-full border border-[#1B3B5A]/10 text-[#1B3B5A] hover:bg-[#1B3B5A] hover:text-white transition-all shadow-sm hidden md:flex items-center justify-center group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-40 items-start">
        
        {/* Visual Documentation */}
        <div className="space-y-16 reveal">
          {product.images.map((img, i) => (
            <div key={i} className="aspect-[3/4] bg-white overflow-hidden shadow-2xl rounded-sm group relative border-4 border-white">
              <img 
                src={img} 
                alt={`${product.name} view ${i+1}`} 
                className="w-full h-full object-cover transition-all duration-1000" 
              />
              <div className="absolute top-8 right-8 glass px-4 py-2 rounded-sm border border-[#1B3B5A]/10 text-[#1B3B5A]">
                <p className="text-[9px] uppercase tracking-widest font-bold">Plate {String(i + 1).padStart(2, '0')}</p>
              </div>
            </div>
          ))}
          <div className="pt-12 border-t border-[#1B3B5A]/10 flex items-center justify-between reveal">
             <p className="mono text-[10px] uppercase tracking-[0.4em] text-[#B3704C] font-bold">ARCHIVAL_STUDY_{product.id}</p>
             <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1B3B5A]"></div>
                <div className="w-2 h-2 rounded-full bg-[#B3704C]"></div>
                <div className="w-2 h-2 rounded-full bg-[#5D6D5E]"></div>
             </div>
          </div>
        </div>

        {/* Conceptual Documentation */}
        <div className="lg:sticky lg:top-40 space-y-16 py-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <header className="space-y-10 border-b border-[#1B3B5A]/10 pb-16">
            <div className="space-y-6">
              <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-[#5D6D5E]/60">Archival Ref: {product.id}</h2>
              <h1 className="leading-[0.85] tracking-tighter serif italic text-[#1B3B5A]">
                {product.name}
              </h1>
              <div className="flex items-center gap-8 pt-4">
                 <span className="text-3xl font-light text-[#B3704C] mono">€{product.price}</span>
                 <span className="w-12 h-[2px] bg-[#1B3B5A]/10"></span>
                 <span className="text-[11px] mono uppercase tracking-[0.3em] font-bold text-[#5D6D5E] bg-[#5D6D5E]/10 px-3 py-1 rounded-full">{product.category}</span>
              </div>
            </div>
          </header>

          <section className="space-y-20">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#1B3B5A]/30">The Editorial Thesis</h2>
                <div className="flex-grow h-[1px] bg-[#1B3B5A]/05"></div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-sm border border-[#1B3B5A]/5 shadow-sm">
                <div className="text-editorial text-xl md:text-2xl text-[#1B3B5A]/70 font-light leading-relaxed whitespace-pre-wrap italic serif">
                    {product.editorial}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 border-t border-[#1B3B5A]/10">
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#B3704C]">Material Integrity</h3>
                <p className="mono text-[12px] text-[#1B3B5A] leading-relaxed font-bold tracking-tight uppercase">{product.fabric}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#B3704C]">Structural Fit</h3>
                <p className="mono text-[12px] text-[#1B3B5A] leading-relaxed font-bold tracking-tight uppercase">{product.fit}</p>
              </div>
            </div>
          </section>

          <footer className="pt-24 space-y-12">
            <div className="w-24 h-[2px] bg-[#B3704C]"></div>
            <div className="space-y-10">
              <p className="text-[12px] text-[#5D6D5E] uppercase tracking-[0.4em] font-medium leading-loose max-w-sm italic">
                RAWLINE findings are documented for longevity. Each fit contributes to our ongoing evolution of curated silhouette.
              </p>
              <div className="flex items-center gap-10">
                <Link 
                    to="/archive" 
                    className="group relative inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.4em] font-bold text-[#1B3B5A] py-2"
                >
                    <span className="relative z-10 group-hover:text-[#B3704C]">Return to Archive</span>
                    <span className="w-10 h-[2px] bg-[#1B3B5A] group-hover:w-20 group-hover:bg-[#B3704C] transition-all duration-700"></span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
