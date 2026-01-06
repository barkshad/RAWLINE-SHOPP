
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 text-center space-y-8">
        <h2 className="text-3xl font-light serif italic">This concept has been retracted from the archive.</h2>
        <Link to="/shop" className="inline-block text-[11px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity">
          Return to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        {/* Images Column */}
        <div className="space-y-12">
          {product.images.map((img, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-100 overflow-hidden shadow-sm">
              <img 
                src={img} 
                alt={`${product.name} perspective ${i+1}`} 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" 
              />
            </div>
          ))}
        </div>

        {/* Content Column */}
        <div className="lg:sticky lg:top-40 space-y-20 py-8 lg:py-0">
          <header className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-black/5 pb-8">
              <h1 className="text-5xl font-light tracking-tighter serif italic">{product.name}</h1>
              <p className="text-2xl font-light text-gray-300 tracking-tighter">€{product.price}</p>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Archive Reference: {product.id.padStart(5, '0')}</p>
          </header>

          <section className="space-y-10">
            <div>
              <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-300 mb-6">The Thesis</h2>
              <div className="text-editorial text-lg text-gray-700 leading-relaxed whitespace-pre-wrap max-w-xl">
                {product.editorial}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-black/5">
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Composition</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium">{product.fabric}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Fit Architecture</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium">{product.fit}</p>
              </div>
            </div>
          </section>

          <div className="pt-12 space-y-8">
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full py-8 bg-black text-white text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition-all duration-500 shadow-xl"
            >
              Acquire for Study
            </button>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] text-center max-w-xs leading-relaxed">
                Logistics are deliberate. Please allow for a period of reflection as we prepare your shipment.
              </p>
              <Link to="/shop" className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-transparent hover:border-gray-400 transition-all">Back to Archive</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
