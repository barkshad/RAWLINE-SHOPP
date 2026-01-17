
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { Search, Fingerprint } from 'lucide-react';
import { getCloudinaryUrl } from '../services/cloudinary';

interface ArchiveProps {
  products: Product[];
}

const Archive: React.FC<ArchiveProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return products.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-32">
      <header className="mb-24 space-y-12 reveal">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mono text-[10px] font-black text-[#8E4E35] uppercase tracking-[0.4em]">
               <Fingerprint size={14} />
               THE_REGISTRY_2024
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter serif italic text-[#1A1816]">The Archive.</h1>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-black/20" />
            <input 
              type="text" 
              placeholder="SEARCH_REGISTRY"
              className="w-full bg-transparent border-b border-black/10 py-4 pl-8 mono text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#8E4E35] transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center border-t border-black/5 pt-12">
           {CATEGORIES.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`text-[10px] mono uppercase tracking-widest font-black transition-all ${
                 activeCategory === cat ? 'text-[#8E4E35] opacity-100' : 'text-black/30 hover:text-black'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {filteredProducts.map((product, i) => (
          <div key={product.id} className="reveal" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
            <Link to={`/product/${product.id}`} className="group block space-y-6">
              <div className="archive-photo">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img 
                    src={getCloudinaryUrl(product.images[0], "w_600,c_fill")} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute top-4 right-4 mono text-[8px] font-black tracking-widest text-black/20">
                  {product.id}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black uppercase tracking-widest">{product.name}</h3>
                <div className="flex justify-between items-center text-[10px] mono text-black/30 font-bold uppercase tracking-widest">
                   <span>{product.category}</span>
                   <span className="text-[#8E4E35]">€{product.price}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-32 text-center opacity-30 serif italic text-2xl">
          Coordinate empty.
        </div>
      )}
    </div>
  );
};

export default Archive;
