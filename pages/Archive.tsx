
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ArchiveProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link to={`/product/${product.id}`} className="group block space-y-6">
    <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-sm">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[9px] uppercase tracking-widest font-bold text-white bg-black px-3 py-1">View Study</p>
      </div>
    </div>
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-baseline">
        <h3 className="text-[13px] uppercase tracking-[0.2em] font-medium">{product.name}</h3>
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">REF. {product.id.padStart(4, '0')}</p>
      </div>
      <p className="text-[11px] text-gray-400 italic serif">{product.category}</p>
      <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2 font-light max-w-[280px]">
        {product.description}
      </p>
    </div>
  </Link>
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
      <div className="mb-32 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-16">
          <div className="space-y-6">
            <h1 className="text-6xl font-light tracking-tighter serif italic">Archive Registry</h1>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 font-bold max-w-sm leading-loose">
              A curated digital record of structural explorations and garment prototypes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-10 mt-12 md:mt-0 items-center">
            <nav className="flex space-x-8">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 pb-2 border-b-2 ${activeCategory === cat ? 'border-black opacity-100' : 'border-transparent opacity-20 hover:opacity-100'}`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-40">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-64 text-center">
          <p className="serif italic text-4xl text-gray-200 mb-8 leading-tight">"Sometimes silence is the most resolved choice."</p>
          <button 
            onClick={() => setActiveCategory('All')}
            className="text-[11px] uppercase tracking-[0.3em] font-bold border-b border-black/20 hover:border-black transition-colors"
          >
            Reset Registry View
          </button>
        </div>
      )}

      <div className="mt-64 text-center max-w-xl mx-auto space-y-8">
        <div className="w-12 h-px bg-black/10 mx-auto"></div>
        <p className="text-sm text-editorial text-gray-400 italic serif leading-relaxed">
          The archive is not a catalog of sales. It is a registry of meaning. Every study included has been vetted for structural clarity and intentionality.
        </p>
      </div>
    </div>
  );
};

export default Archive;
