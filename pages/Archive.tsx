
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { Search, ListFilter, Grid3X3, ArrowUpRight, LayoutGrid, LayoutList, Fingerprint } from 'lucide-react';

interface ArchiveProps {
  products: Product[];
}

const Archive: React.FC<ArchiveProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="max-w-[1920px] mx-auto px-8 md:px-16 pt-48 pb-32 bg-[#F8F6F3]">
      <header className="mb-32 space-y-24 reveal">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-6 mono text-[10px] font-black text-[#A65D3C] uppercase tracking-[0.6em]">
               <Fingerprint size={16} />
               THE_REGISTRY_INDEX_2024
            </div>
            <h1 className="text-6xl md:text-[10vw] font-normal tracking-tighter serif italic text-[#1B3B5A] leading-[0.8]">The Registry.</h1>
            <p className="max-w-xl text-[#121212]/50 font-light text-2xl italic serif leading-relaxed">
              Our comprehensive index of identified historical silhouettes. Every piece is a rescue, documented and restored within our Nairobi atelier.
            </p>
          </div>
          
          <div className="w-full lg:w-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-96 group">
                <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-[#A65D3C] transition-colors" />
                <input 
                  type="text" 
                  placeholder="SEARCH_THE_REGISTRY"
                  className="w-full bg-white border border-black/5 py-6 pl-16 pr-8 rounded-full mono text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#A65D3C]/10 transition-all shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-4 bg-white/40 p-2 rounded-full border border-black/5 shadow-inner">
                 <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full transition-all ${viewMode === 'grid' ? 'bg-[#1B3B5A] text-white shadow-lg' : 'text-black/20 hover:text-black'}`}
                 >
                    <LayoutGrid size={20} />
                 </button>
                 <button 
                  onClick={() => setViewMode('editorial')}
                  className={`p-3 rounded-full transition-all ${viewMode === 'editorial' ? 'bg-[#1B3B5A] text-white shadow-lg' : 'text-black/20 hover:text-black'}`}
                 >
                    <LayoutList size={20} />
                 </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
               {CATEGORIES.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-8 py-4 mono text-[9px] font-black uppercase tracking-[0.4em] rounded-full border transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-32">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className="reveal group" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
              <Link to={`/product/${product.id}`} className="block space-y-10">
                <div className="image-zoom-container aspect-[3/4.2] rounded-sm relative border border-black/5 shadow-xl bg-white">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 mono text-[8px] font-black tracking-[0.4em] bg-[#1B3B5A] text-white px-4 py-2 shadow-xl">
                    ARCH_REF_{product.id}
                  </div>
                  <div className="absolute inset-0 bg-[#A65D3C]/0 group-hover:bg-[#A65D3C]/5 transition-colors"></div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#1B3B5A] group-hover:text-[#A65D3C] transition-colors leading-tight">{product.name}</h3>
                    <span className="mono text-[11px] text-[#A65D3C] font-black">€{product.price}</span>
                  </div>
                  <p className="text-[12px] text-black/20 mono uppercase tracking-widest font-black">{product.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        /* Editorial View */
        <div className="space-y-32">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <Link to={`/product/${product.id}`} className="group grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-5 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-white">
                   <img src={product.images[0]} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="md:col-span-7 space-y-12">
                   <div className="space-y-4">
                      <span className="mono text-[10px] text-[#A65D3C] font-black tracking-[0.4em] uppercase">{product.category} • ARCH_REF_{product.id}</span>
                      <h3 className="text-6xl md:text-8xl serif italic font-light tracking-tighter group-hover:text-[#A65D3C] transition-colors">{product.name}</h3>
                   </div>
                   <p className="text-2xl text-black/40 italic serif leading-snug max-w-xl line-clamp-3">
                      {product.description}
                   </p>
                   <div className="flex items-center gap-10">
                      <span className="text-3xl font-light mono text-[#1B3B5A]">€{product.price}</span>
                      <div className="h-8 w-[1px] bg-black/10"></div>
                      <span className="mono text-[11px] font-black uppercase tracking-[0.4em] text-black/20 group-hover:text-black transition-colors">Examine Archive</span>
                   </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="py-64 text-center space-y-12 reveal">
          <p className="text-5xl md:text-7xl font-normal serif italic text-black/10">Registry coordinate empty.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearch(''); }}
            className="mono text-[11px] font-black uppercase tracking-[0.5em] border-b-2 border-[#1B3B5A] pb-3 hover:text-[#A65D3C] hover:border-[#A65D3C] transition-all"
          >
            RESET_REGISTRY_PROTOCOL
          </button>
        </div>
      )}

      <footer className="mt-64 pt-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 mono text-[9px] text-black/20 font-black tracking-[0.8em] reveal">
         <div className="flex items-center gap-8">
            <span>REGISTRY_CAPACITY: {filteredProducts.length}</span>
            <span className="w-12 h-[1px] bg-black/5"></span>
            <span>SYSTEM_ARCHIVE_3.1</span>
         </div>
         <span className="italic">RAWLINE_LUXURY_SERVICES_NBO</span>
      </footer>
    </div>
  );
};

export default Archive;
