
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Fingerprint, MapPin, Calendar } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-64 text-center space-y-12 bg-[#F2EDE4] min-h-screen">
        <h2 className="text-4xl font-light serif italic opacity-30">Archive Ref Retracted.</h2>
        <Link 
            to="/archive" 
            className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-black border border-[#8E4E35]/20 px-10 py-5 rounded-full text-[#8E4E35] hover:bg-[#8E4E35] hover:text-white transition-all duration-700"
        >
          Return to Registry Origin
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F2EDE4] min-h-screen">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <Link 
          to="/archive" 
          className="fixed top-32 left-8 md:left-12 z-50 museum-glass p-4 rounded-full border border-black/5 text-[#1A1816] hover:bg-[#8E4E35] hover:text-white transition-all shadow-sm flex items-center justify-center group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-40 items-start">
          
          {/* Visual Documentation - Archive File Style */}
          <div className="space-y-24 reveal">
            {product.images.map((img, i) => (
              <div key={i} className="relative group">
                {/* Subtle 'Tape' Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 backdrop-blur-[1px] rotate-2 z-10 border border-black/5 shadow-sm opacity-60"></div>
                
                <div className="archive-photo">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${product.name} view ${i+1}`} 
                      className="w-full h-full object-cover transition-all duration-2000 grayscale sepia-[0.2] contrast-110" 
                    />
                  </div>
                  <div className="pt-6 pb-2 border-t border-black/5 mt-4 flex justify-between items-center">
                    <span className="handwritten text-xl text-[#8E4E35]">Plate No. {i + 1}</span>
                    <span className="mono text-[8px] uppercase tracking-widest text-black/30">NBO_ARC_PHOTOGRAPHY</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-12 border-t border-black/5 flex items-center justify-between reveal opacity-60">
               <div className="flex items-center gap-4">
                  <Fingerprint size={16} className="text-[#8E4E35]" />
                  <p className="mono text-[10px] uppercase tracking-[0.4em] text-[#1A1816] font-bold">VERIFIED_ARCHIVE_ENTRY</p>
               </div>
               <div className="flex gap-2">
                  <div className="w-3 h-3 border border-black/10 bg-[#8E4E35]"></div>
                  <div className="w-3 h-3 border border-black/10 bg-[#2D3E50]"></div>
                  <div className="w-3 h-3 border border-black/10 bg-[#B09E80]"></div>
               </div>
            </div>
          </div>

          {/* Archival Record Sidebar */}
          <div className="lg:sticky lg:top-48 space-y-20 py-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <header className="space-y-12 border-b border-black/5 pb-20 relative">
              <div className="absolute top-0 right-0 mono text-[8px] text-[#8E4E35] opacity-40 -rotate-90 origin-top-right translate-x-12 mt-4 uppercase tracking-[0.6em]">
                MAISON_RESTRICTED_RECORD
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-[#8E4E35]/60 mono text-[9px] font-black tracking-[0.4em] uppercase">
                  <MapPin size={12} /> Nairobi Studio Archive
                </div>
                <h1 className="text-6xl md:text-8xl leading-[0.85] tracking-tighter serif italic text-[#1A1816] ink-bleed">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center gap-8 pt-6">
                   <span className="text-4xl font-light text-[#8E4E35] mono">€{product.price}</span>
                   <span className="w-16 h-[1px] bg-black/5"></span>
                   <span className="text-[10px] mono uppercase tracking-[0.4em] font-black text-[#2D3E50] border border-[#2D3E50]/20 px-4 py-1.5 rounded-full">{product.category}</span>
                   <span className="text-[10px] mono uppercase tracking-[0.4em] font-black text-black/20 italic">REF_ID_{product.id}</span>
                </div>
              </div>
            </header>

            <section className="space-y-24">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-black/20">The Archival Thesis</h2>
                  <div className="flex items-center gap-2 text-[#8E4E35] opacity-60">
                    <Calendar size={12} />
                    <span className="mono text-[8px] tracking-[0.4em]">RECORDED_OCT_24</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#8E4E35]/20"></div>
                  <div className="text-editorial text-2xl md:text-3xl text-[#1A1816]/80 font-light leading-relaxed whitespace-pre-wrap italic serif">
                      {product.editorial}
                  </div>
                </div>
                <div className="handwritten text-2xl text-[#8E4E35] mt-10">
                  — Identification Note by Maison Head Archivist
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-20 border-t border-black/5">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8E4E35]">Historical Fabric</h3>
                  <p className="mono text-[11px] text-[#1A1816] leading-relaxed font-bold tracking-tight uppercase border-b border-black/5 pb-2">{product.fabric}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8E4E35]">Restored Fit</h3>
                  <p className="mono text-[11px] text-[#1A1816] leading-relaxed font-bold tracking-tight uppercase border-b border-black/5 pb-2">{product.fit}</p>
                </div>
              </div>
            </section>

            <footer className="pt-24 space-y-16">
              <div className="flex items-center gap-12">
                <div className="w-24 h-[1px] bg-[#8E4E35]"></div>
                <div className="mono text-[8px] tracking-[0.8em] text-black/20 uppercase font-black">END_OF_RECORD</div>
              </div>
              <div className="space-y-10">
                <p className="text-[13px] text-[#1A1816]/60 uppercase tracking-[0.4em] font-medium leading-relaxed max-w-sm italic serif">
                  This finding has been authenticated by the Nairobi Atelier. Curation completed.
                </p>
                <div className="flex items-center gap-10 pt-8">
                  <Link 
                      to="/archive" 
                      className="group relative inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.5em] font-black text-[#1A1816]"
                  >
                      <span className="relative z-10 group-hover:text-[#8E4E35] transition-colors">Return to Registry Index</span>
                      <div className="w-12 h-[2px] bg-[#1A1816] group-hover:w-24 group-hover:bg-[#8E4E35] transition-all duration-700"></div>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
