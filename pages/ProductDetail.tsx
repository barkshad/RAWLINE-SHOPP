
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Fingerprint, MapPin, Calendar } from 'lucide-react';
import { getCloudinaryUrl } from '../services/cloudinary';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 py-64 text-center space-y-12 bg-[#F2EDE4] min-h-screen">
        <h2 className="text-3xl md:text-4xl font-light serif italic opacity-30">Archive Ref Retracted.</h2>
        <Link 
            to="/archive" 
            className="inline-flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black border border-[#8E4E35]/20 px-8 md:px-10 py-4 md:py-5 rounded-full text-[#8E4E35] hover:bg-[#8E4E35] hover:text-white transition-all duration-700"
        >
          Return to Registry
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F2EDE4] min-h-screen">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-24 md:py-48">
        <Link 
          to="/archive" 
          className="fixed top-24 md:top-32 left-6 md:left-12 z-50 museum-glass p-3 md:p-4 rounded-full border border-black/5 text-[#1A1816] hover:bg-[#8E4E35] hover:text-white transition-all shadow-lg flex items-center justify-center group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform md:w-5 md:h-5" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 lg:gap-40 items-start">
          
          <div className="space-y-16 md:space-y-24 reveal order-2 lg:order-1">
            {product.images.map((img, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-6 md:h-8 bg-white/20 backdrop-blur-[1px] rotate-2 z-10 border border-black/5 shadow-sm opacity-60"></div>
                
                <div className="archive-photo">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={getCloudinaryUrl(img)} 
                      alt={`${product.name} view ${i+1}`} 
                      className="w-full h-full object-cover transition-all duration-1000 grayscale sepia-[0.2] contrast-110" 
                    />
                  </div>
                  <div className="pt-4 md:pt-6 pb-1 md:pb-2 border-t border-black/5 mt-3 md:mt-4 flex justify-between items-center">
                    <span className="handwritten text-lg md:text-xl text-[#8E4E35]">Plate No. {i + 1}</span>
                    <span className="mono text-[7px] md:text-[8px] uppercase tracking-widest text-black/30">NBO_ARC_STUDY</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-48 space-y-12 md:space-y-20 py-4 md:py-8 reveal order-1 lg:order-2">
            <header className="space-y-8 md:space-y-12 border-b border-black/5 pb-12 md:pb-20 relative">
              <div className="hidden lg:block absolute top-0 right-0 mono text-[8px] text-[#8E4E35] opacity-40 -rotate-90 origin-top-right translate-x-12 mt-4 uppercase tracking-[0.6em] whitespace-nowrap">
                MAISON_RECORD
              </div>
              
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-[#8E4E35]/60 mono text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase">
                  <MapPin size={10} className="md:w-3 md:h-3" /> Nairobi Studio
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter serif italic text-[#1A1816] ink-bleed">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4 md:pt-6">
                   <span className="text-3xl md:text-4xl font-light text-[#8E4E35] mono">€{product.price}</span>
                   <span className="hidden sm:block w-12 md:w-16 h-[1px] bg-black/5"></span>
                   <span className="text-[9px] md:text-[10px] mono uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-[#2D3E50] border border-[#2D3E50]/20 px-3 md:px-4 py-1.5 rounded-full">{product.category}</span>
                </div>
              </div>
            </header>

            <section className="space-y-16 md:space-y-24">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black text-black/20">Archival Thesis</h2>
                  <div className="flex items-center gap-2 text-[#8E4E35] opacity-60">
                    <Calendar size={10} className="md:w-3 md:h-3" />
                    <span className="mono text-[7px] md:text-[8px] tracking-[0.4em]">RECORDED_24</span>
                  </div>
                </div>
                <div className="relative pl-4">
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#8E4E35]/20"></div>
                  <div className="text-editorial text-xl md:text-2xl lg:text-3xl text-[#1A1816]/80 font-light leading-relaxed italic serif">
                      {product.editorial}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
