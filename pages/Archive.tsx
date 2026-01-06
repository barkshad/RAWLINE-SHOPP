
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { TiltCard } from '../components/TiltCard';

interface ArchiveProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => (
  <div className={`animate-reveal stagger-${(index % 4) + 1}`}>
    <TiltCard className="h-full">
      <Link to={`/product/${product.id}`} className="group block space-y-8 h-full bg-white/40 p-2 rounded-sm border border-black/[0.03] hover:border-black/10 hover:shadow-2xl transition-all duration-500">
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="glass px-6 py-3 rounded-full shadow-xl">
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Examine Study</p>
            </div>
          </div>
          <div className="absolute top-4 left-4">
             <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-white/50 group-hover:text-white transition-colors">Ref {product.id.padStart(3, '0')}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-2 pb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-[14px] uppercase tracking-[0.2em] font-semibold text-black/80 group-hover:text-black transition-colors">{product.name}</h3>
          </div>
          <p className="text-[11px] text-gray-400 italic serif">{product.category}</p>
          <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2 font-light max-w-[280px]">
            {product.description}
          </p>
          <div className="pt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-6 h-[1px] bg-black"></div>
             <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Documented Study</span>
          </div>
        </div>
      </Link>
    </TiltCard>
  </div>
);

const Archive: React.FC<ArchiveProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return activeCategory === 'All' 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-24">
      <div className="mb-32 space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-black/5 pb-16 animate-reveal">
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-gray-300 stagger-1">Repository Index</h2>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter serif italic stagger-2">Archive Registry</h1>
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400 font-medium max-w-md leading-loose stagger-3">
              A curated digital record of structural explorations and garment prototypes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-10 mt-16 lg:mt-0 items-center animate-reveal stagger-4">
            <nav className="flex items-center glass px-8 py-4 rounded-full shadow-sm">
              <span className="text-[9px] uppercase tracking-widest font-bold text-gray-300 mr-8">Classify</span>
              <div className="flex gap-8">
                {CATEGORIES.map(cat => (
                    <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative py-1 ${
                        activeCategory === cat ? 'text-black' : 'text-gray-300 hover:text-black'
                    }`}
                    >
                    {cat}
                    {activeCategory === cat && (
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black animate-in fade-in zoom-in duration-500"></span>
                    )}
                    </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-64 text-center animate-reveal">
          <p className="serif italic text-4xl text-gray-200 mb-8 leading-tight">"Sometimes silence is the most resolved choice."</p>
          <button 
            onClick={() => setActiveCategory('All')}
            className="text-[11px] uppercase tracking-[0.4em] font-bold glass px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500"
          >
            Reset Registry View
          </button>
        </div>
      )}

      <div className="mt-64 text-center max-w-2xl mx-auto space-y-12 animate-reveal">
        <div className="flex justify-center items-center gap-10">
            <div className="w-16 h-px bg-black/10"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300 font-bold">End of Current Registry</p>
            <div className="w-16 h-px bg-black/10"></div>
        </div>
        <p className="text-lg text-editorial text-gray-400 italic serif leading-relaxed">
          The archive is not a catalog of sales. It is a registry of meaning. Every study included has been vetted for structural clarity and intentionality.
        </p>
      </div>
    </div>
  );
};

export default Archive;
