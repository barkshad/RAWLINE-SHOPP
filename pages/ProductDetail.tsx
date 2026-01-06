
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 text-center space-y-12">
        <h2 className="text-4xl font-light serif italic opacity-30">Concept retracted.</h2>
        <Link to="/archive" className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
          Return to Registry
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        {/* Images Column */}
        <div className="space-y-16">
          {product.images.map((img, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-100 overflow-hidden shadow-sm group">
              <img 
                src={img} 
                alt={`${product.name} perspective ${i+1}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0" 
              />
            </div>
          ))}
          <div className="pt-12 border-t border-black/5">
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-bold">Image Documentation — Proof {product.id.padStart(3, '0')}</p>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:sticky lg:top-48 space-y-24 py-12 lg:py-0">
          <header className="space-y-8">
            <div className="space-y-4 border-b border-black/5 pb-12">
              <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Study Reference {product.id.padStart(4, '0')}</h2>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.85] serif italic">{product.name}</h1>
            </div>
          </header>

          <section className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-400">The Thesis</h2>
              <div className="text-editorial text-2xl text-gray-700 font-light leading-relaxed whitespace-pre-wrap max-w-xl">
                {product.editorial}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-black/5">
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Analysis of Composition</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed italic serif">{product.fabric}</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Geometry of Form</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed italic serif">{product.fit}</p>
              </div>
            </div>
          </section>

          <footer className="pt-24 space-y-12">
            <div className="w-16 h-px bg-black opacity-10"></div>
            <div className="space-y-6">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.3em] leading-loose max-w-sm">
                RAWLINE garments are produced as limited structural iterations. Each study is documented here to serve as a reference for future evolution.
              </p>
              <Link to="/archive" className="inline-block text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black/10 hover:border-black transition-all">
                Registry Index
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
