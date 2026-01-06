
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { TiltCard } from '../components/TiltCard';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ArchiveProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => (
  <div className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
    <Link to={`/product/${product.id}`} className="group block space-y-6">
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm relative border border-black/5">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute top-4 left-4 mono text-[8px] font-bold tracking-widest bg-white/90 px-2 py-1 border border-black/10">
          {product.id}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className="text-[13px] font-bold uppercase tracking-tight text-gray-800">{product.name}</h3>
          <span className="mono text-[10px] text-gray-400">€{product.price}</span>
        </div>
        <p className="text-[11px] text-[#8A9A8A] mono uppercase tracking-widest">{product.category}</p>
        <p className="text-[12px] text-gray-400 font-light leading-relaxed line-clamp-2 italic serif">
          {product.description}
        </p>
      </div>
    </Link>
  </div>
);

const Archive: React.FC<ArchiveProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-20">
      <div className="mb-24 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mono text-[10px] font-bold text-[#2D3E50] uppercase tracking-[0.4em]">
               <div className="w-1.5 h-1.5 bg-[#2D3E50] rounded-full"></div>
               REGISTRY_DB_ALPHA
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter serif italic text-black/90">Archive Records</h1>
            <p className="max-w-md text-gray-400 font-light text-lg italic serif leading-relaxed">
              A curated digital record of structural explorations and garment prototypes cataloged at RAWLINE Berlin.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search Database"
                className="w-full bg-white border border-black/5 py-3 pl-10 pr-4 rounded-sm mono text-[10px] uppercase tracking-widest outline-none focus:border-black transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center glass p-1 rounded-sm border border-black/5">
               {CATEGORIES.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 py-2 mono text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                     activeCategory === cat ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-40 text-center space-y-8 animate-fade-in">
          <p className="text-3xl md:text-5xl font-light serif italic text-gray-200">The query returned no results.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearch(''); }}
            className="mono text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Footer Stat */}
      <div className="mt-40 pt-16 border-t border-black/5 flex justify-between items-center mono text-[10px] text-gray-300 font-bold tracking-widest">
         <span>DISPLAYING {filteredProducts.length} RECORDS</span>
         <span className="italic">END_OF_INDEX</span>
      </div>
    </div>
  );
};

export default Archive;
