
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
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 text-center space-y-12 animate-reveal">
        <h2 className="text-4xl font-light serif italic opacity-30">Concept retracted.</h2>
        <Link 
            to="/archive" 
            className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold border border-black/10 px-8 py-4 rounded-full glass hover:bg-black hover:text-white transition-all duration-500"
        >
          Return to Registry
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        
        {/* Images Column */}
        <div className="space-y-16 animate-reveal">
          {product.images.map((img, i) => (
            <div key={i} className={`aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl rounded-sm group stagger-${i+1}`}>
              <img 
                src={img} 
                alt={`${product.name} perspective ${i+1}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute top-6 right-6 glass px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[8px] uppercase tracking-widest font-bold">Plate {String(i + 1).padStart(2, '0')}</p>
              </div>
            </div>
          ))}
          <div className="pt-12 border-t border-black/5 flex items-center justify-between">
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-bold">Documentation — Proof {product.id.padStart(3, '0')}</p>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black/10"></div>
                <div className="w-2 h-2 rounded-full bg-black/10"></div>
             </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:sticky lg:top-48 space-y-24 py-12 lg:py-0 animate-reveal stagger-2">
          <header className="space-y-10">
            <div className="space-y-6 border-b border-black/5 pb-16">
              <h2 className="text-[11px] uppercase tracking-[0.7em] font-bold text-gray-300">Study Reference {product.id.padStart(4, '0')}</h2>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.8] serif italic text-black/90">
                {product.name}
              </h1>
            </div>
          </header>

          <section className="space-y-20">
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/20">The Thesis</h2>
                <div className="flex-grow h-[1px] bg-black/[0.05]"></div>
              </div>
              <div className="glass p-10 md:p-14 rounded-lg shadow-sm border-white/50">
                <div className="text-editorial text-2xl text-gray-700 font-light leading-relaxed whitespace-pre-wrap">
                    {product.editorial}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-black/5">
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300">Composition Analysis</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic serif">{product.fabric}</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300">Geometry of Form</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic serif">{product.fit}</p>
              </div>
            </div>
          </section>

          <footer className="pt-24 space-y-12">
            <div className="w-24 h-[1px] bg-black opacity-10"></div>
            <div className="space-y-8">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.4em] font-medium leading-loose max-w-sm italic">
                RAWLINE garments are produced as limited structural iterations. Each study is documented here to serve as a reference for future evolution.
              </p>
              <div className="flex items-center gap-10">
                <Link 
                    to="/archive" 
                    className="group relative inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-black overflow-hidden"
                >
                    <span className="relative z-10">Back to Registry</span>
                    <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all duration-500"></span>
                    <div className="absolute inset-0 bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 -z-0"></div>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
