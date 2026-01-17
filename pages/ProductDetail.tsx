
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Fingerprint, MapPin } from 'lucide-react';
import { getCloudinaryUrl } from '../services/cloudinary';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 py-64 text-center">
        <h2 className="text-3xl font-light serif italic opacity-30">Archive Ref Retracted.</h2>
        <Link to="/archive" className="mt-8 inline-block mono text-[11px] uppercase tracking-widest border-b border-black">Return to Registry</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
      <Link to="/archive" className="fixed top-32 left-12 z-50 p-2 text-black/30 hover:text-black transition-colors hidden xl:block">
        <ArrowLeft size={24} />
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Visual Archive */}
        <div className="space-y-16 reveal">
          {product.images.map((img, i) => (
            <div key={i} className="archive-photo">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={getCloudinaryUrl(img)} 
                  alt={`${product.name} Plate ${i+1}`} 
                  className="w-full h-full object-cover grayscale opacity-90" 
                />
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center">
                <span className="handwritten text-lg text-[#8E4E35]">Plate No. {i + 1}</span>
                <span className="mono text-[8px] uppercase tracking-widest text-black/20">STUDY_DOCUMENTATION</span>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Record */}
        <div className="lg:sticky lg:top-32 space-y-16 reveal" style={{ transitionDelay: '0.2s' }}>
          <header className="space-y-8 border-b border-black/5 pb-16">
            <div className="flex items-center gap-3 text-[#8E4E35]/60 mono text-[9px] font-black tracking-[0.4em] uppercase">
              <MapPin size={10} /> Nairobi Atelier
            </div>
            <h1 className="text-5xl md:text-7xl leading-none tracking-tighter serif italic text-[#1A1816]">
              {product.name}
            </h1>
            <div className="flex items-center gap-8 pt-4">
               <span className="text-3xl font-light text-[#8E4E35] mono">€{product.price}</span>
               <div className="h-6 w-[1px] bg-black/10"></div>
               <span className="text-[10px] mono uppercase tracking-widest font-black text-black/30">{product.category}</span>
            </div>
          </header>

          <section className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-black/20">Archival Thesis</h2>
              <div className="text-editorial text-xl md:text-2xl text-[#1A1816]/80 font-light leading-relaxed italic serif">
                  {product.editorial}
              </div>
              <div className="handwritten text-xl text-[#8E4E35] mt-6">— Studio Record</div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-black/5">
              <div className="space-y-2">
                <h3 className="text-[10px] uppercase tracking-widest font-black text-[#8E4E35]">Fabrication</h3>
                <p className="mono text-[11px] text-[#1A1816] leading-relaxed uppercase">{product.fabric}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] uppercase tracking-widest font-black text-[#8E4E35]">Restoration</h3>
                <p className="mono text-[11px] text-[#1A1816] leading-relaxed uppercase">{product.fit}</p>
              </div>
            </div>
          </section>

          <footer className="pt-24 space-y-8">
            <div className="flex items-center gap-8">
              <div className="w-16 h-[1px] bg-[#8E4E35]"></div>
              <div className="mono text-[8px] tracking-[0.6em] text-black/20 uppercase font-black">END_OF_RECORD</div>
            </div>
            <div className="flex items-center gap-4 text-[#8E4E35]">
               <Fingerprint size={16} />
               <p className="mono text-[10px] uppercase tracking-widest font-black">Maison Verified</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
