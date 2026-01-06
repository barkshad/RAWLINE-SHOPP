
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ShopProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link to={`/product/${product.id}`} className="group block space-y-4">
    <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-sm">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
    </div>
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-baseline">
        <h3 className="text-[12px] uppercase tracking-widest font-semibold">{product.name}</h3>
        <p className="text-[12px] font-light text-gray-400">€{product.price}</p>
      </div>
      <p className="text-[11px] text-gray-400 italic serif">{product.category}</p>
      <p className="text-[12px] text-gray-500 leading-relaxed pt-2 line-clamp-2 font-light">
        {product.description}
      </p>
    </div>
  </Link>
);

const Shop: React.FC<ShopProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All' 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);

    if (sortBy === 'Price: Low-High') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'Price: High-Low') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'Newest') result.sort((a, b) => b.createdAt - a.createdAt);

    return result;
  }, [products, activeCategory, sortBy]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16">
      <div className="mb-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-light tracking-tight serif italic">Archive</h1>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-300 font-bold">
              Selection from {products.length} cataloged studies
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 mt-12 md:mt-0 items-center">
            <div className="flex space-x-6">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all duration-300 pb-1 border-b-2 ${activeCategory === cat ? 'border-black opacity-100' : 'border-transparent opacity-20 hover:opacity-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-black/5 pl-8">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Sort By</span>
              <select 
                className="bg-transparent text-[10px] uppercase tracking-widest font-bold outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-32">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-64 text-center">
          <p className="serif italic text-3xl text-gray-300 mb-6">A moment of silence.</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">This category is currently being re-evaluated.</p>
          <button 
            onClick={() => setActiveCategory('All')}
            className="mt-12 text-[11px] uppercase tracking-widest font-bold border-b border-black"
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className="mt-48 pt-24 border-t border-black/5 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 mb-8">End of Catalog</p>
        <Link to="/about" className="serif italic text-xl hover:opacity-50 transition-opacity">Read about our construction philosophy</Link>
      </div>
    </div>
  );
};

export default Shop;
