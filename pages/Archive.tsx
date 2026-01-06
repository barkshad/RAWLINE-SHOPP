
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { Search, Filter } from 'lucide-react';

interface ArchiveProps {
  products: Product[];
}

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
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <header className="mb-20 space-y-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="space-y-6 reveal">
            <div className="flex items-center gap-3 mono text-[11px] font-bold text-[#2D3E50] uppercase tracking-[0.4em]">
               <div className="w-2 h-2 bg-[#2D3E50] rounded-full"></div>
               REGISTRY_DATABASE_LIVE
            </div>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter serif italic text-black/90">Archive Records</h1>
            <p className="max-w-md text-gray-400 font-light text-lg italic serif leading-relaxed">
              A curated digital index of structural explorations and garment prototypes cataloged at the Berlin Studio.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-center gap-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative w-full md:w-72 group">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" />
              <input 
                type="text" 
                placeholder="Query Registry"
                className="w-full bg-white border border-black/10 py-4 pl-12 pr-6 rounded-sm mono text-[10px] uppercase tracking-widest outline-none focus:border-black transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar glass p-1.5 rounded-sm border border-black/5 flex items-center shadow-sm">
               {CATEGORIES.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 py-2.5 whitespace-nowrap mono text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                     activeCategory === cat ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </header>

      {/* Registry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
        {filteredProducts.map((product, i) => (
          <div key={product.id} className="reveal" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
            <Link to={`/product/${product.id}`} className="group block space-y-6">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm relative border border-black/5">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4 mono text-[9px] font-bold tracking-widest bg-white/90 px-3 py-1.5 border border-black/10">
                  {product.id}
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="glass px-4 py-2 mono text-[9px] font-bold tracking-[0.2em]">VIEW_RECORD</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-gray-800 line-clamp-1 group-hover:translate-x-1 transition-transform">{product.name}</h3>
                  <span className="mono text-[11px] text-gray-400">€{product.price}</span>
                </div>
                <p className="text-[10px] text-[#8A9A8A] mono uppercase tracking-[0.3em] font-bold">{product.category}</p>
                <p className="text-[13px] text-gray-400 font-light leading-relaxed line-clamp-2 italic serif">
                  {product.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-48 text-center space-y-8 reveal">
          <p className="text-3xl md:text-5xl font-light serif italic text-gray-200">The query returned zero records.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearch(''); }}
            className="mono text-[11px] font-bold uppercase tracking-widest border-b border-black pb-2 hover:opacity-50 transition-opacity"
          >
            Clear Search Parameters
          </button>
        </div>
      )}

      <footer className="mt-40 pt-16 border-t border-black/5 flex justify-between items-center mono text-[10px] text-gray-300 font-bold tracking-widest reveal">
         <span>DOCUMENTED RECORDS: {filteredProducts.length}</span>
         <span className="italic">END_OF_CATALOG</span>
      </footer>
    </div>
  );
};

export default Archive;
