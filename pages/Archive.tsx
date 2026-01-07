
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { Search, LayoutGrid, LayoutList, Fingerprint } from 'lucide-react';
import { getCloudinaryUrl } from '../services/cloudinary';

interface ArchiveProps {
  products: Product[];
}

const Archive: React.FC<ArchiveProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return products.filter(p => {
      if (!p) return false;
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = (p.name || '').toLowerCase().includes(search.toLowerCase()) || 
                           (p.description || '').toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-16 pt-32 md:pt-48 pb-20 md:pb-32 bg-[#F8F6F3]">
      <header className="mb-16 md:mb-32 space-y-12 md:space-y-24 reveal">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 md:gap-16">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-6 mono text-[9px] md:text-[10px] font-black text-[#A65D3C] uppercase tracking-[0.4em] md:tracking-[0.6em]">
               <Fingerprint size={14} className="md:w-4 md:h-4" />
               THE_REGISTRY_INDEX_2024
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-normal tracking-tighter serif italic text-[#1B3B5A] leading-[0.8]">The Registry.</h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-[#121212]/50 font-light text-xl md:text-2xl italic serif leading-relaxed">
              Our comprehensive index of identified historical silhouettes. Every piece is a rescue, documented and restored within our Nairobi atelier.
            </p>
          </div>
          
          <div className="w-full lg:w-auto space-y-8 md:space-y-12">
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <div className="relative w-full sm:w-80 md:w-96 group">
                <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 md:w-[18px] md:h-[18px]" />
                <input 
                  type="text" 
                  placeholder="SEARCH_THE_REGISTRY"
                  className="w-full bg-white border border-black/5 py-4 md:py-6 pl-14 md:pl-16 pr-6 md:pr-8 rounded-full mono text-[9px] md:text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#A65D3C]/10 transition-all shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 bg-white/40 p-1.5 md:p-2 rounded-full border border-black/5 shadow-inner">
                 <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 md:p-3 rounded-full transition-all ${viewMode === 'grid' ? 'bg-[#1B3B5A] text-white shadow-lg' : 'text-black/20 hover:text-black'}`}
                 >
                    <LayoutGrid size={18} className="md:w-5 md:h-5" />
                 </button>
                 <button 
                  onClick={() => setViewMode('editorial')}
                  className={`p-2.5 md:p-3 rounded-full transition-all ${viewMode === 'editorial' ? 'bg-[#1B3B5A] text-white shadow-lg' : 'text-black/20 hover:text-black'}`}
                 >
                    <LayoutList size={18} className="md:w-5 md:h-5" />
                 </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
               {CATEGORIES.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 md:px-8 py-2 md:py-4 mono text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-full border transition-all ${
                     activeCategory === cat ? 'bg-[#1B3B5A] text-white border-[#1B3B5A]' : 'bg-transparent border-black/5 text-black/40 hover:border-black'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </header>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-32">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className="reveal group" style={{ transitionDelay: `${(i % 4) * 0.05}s` }}>
              <Link to={`/product/${product.id}`} className="block space-y-6 md:space-y-10">
                <div className="image-zoom-container aspect-[3/4.2] rounded-sm relative border border-black/5 shadow-xl bg-white">
                  <img 
                    src={getCloudinaryUrl(product.images?.[0] || '', "w_600,c_fill")} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 mono text-[7px] md:text-[8px] font-black tracking-[0.4em] bg-[#1B3B5A] text-white px-3 md:px-4 py-1.5 md:py-2 shadow-xl">
                    ARCH_REF_{product.id}
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4 px-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#1B3B5A] group-hover:text-[#A65D3C] transition-colors leading-tight truncate">{product.name}</h3>
                    <span className="mono text-[10px] md:text-[11px] text-[#A65D3C] font-black">€{product.price}</span>
                  </div>
                  <p className="text-[10px] text-black/20 mono uppercase tracking-widest font-black">{product.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        /* Editorial View */
        <div className="space-y-20 md:space-y-32">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <Link to={`/product/${product.id}`} className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div className="md:col-span-5 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-white">
                   <img src={getCloudinaryUrl(product.images?.[0] || '', "w_800,c_fill")} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="md:col-span-7 space-y-6 md:space-y-12">
                   <div className="space-y-4">
                      <span className="mono text-[9px] md:text-[10px] text-[#A65D3C] font-black tracking-[0.4em] uppercase">{product.category} • ARCH_REF_{product.id}</span>
                      <h3 className="text-4xl md:text-6xl lg:text-8xl serif italic font-light tracking-tighter group-hover:text-[#A65D3C] transition-colors leading-tight">{product.name}</h3>
                   </div>
                   <p className="text-lg md:text-2xl text-black/40 italic serif leading-snug max-w-xl line-clamp-3">
                      {product.description}
                   </p>
                   <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-2xl md:text-3xl font-light mono text-[#1B3B5A]">€{product.price}</span>
                      <div className="h-6 md:h-8 w-[1px] bg-black/10"></div>
                      <span className="mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-black/20 group-hover:text-black transition-colors">Examine Archive</span>
                   </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
