
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-8 md:px-16 pt-48 pb-32 bg-[#F8F6F3]">
      <header className="mb-32 space-y-24 reveal text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6 mono text-[10px] font-black text-[#8E4E35] uppercase tracking-[0.6em]">
            <Camera size={16} />
            STYLED_INVESTIGATIONS_2024
          </div>
          <h1 className="text-6xl md:text-[10vw] font-normal tracking-tighter serif italic text-[#1B3B5A] leading-[0.8]">The Visual Registry.</h1>
          <p className="max-w-2xl mx-auto text-[#121212]/50 font-light text-2xl italic serif leading-relaxed">
            A curated archive of styled silhouettes. Each look is a dialogue between multiple historical findings, restructured into a singular, cohesive statement by the Maison.
          </p>
        </div>
      </header>

      <main className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-12 space-y-12">
        {GALLERY_ITEMS.map((item, index) => (
          <div key={item.id} className="reveal group break-inside-avoid" style={{ transitionDelay: `${index * 0.05}s` }}>
            <div className="archive-photo p-4 relative overflow-hidden">
              <div className="image-zoom-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="mono text-[10px] font-black tracking-[0.4em] uppercase">{item.title}</h3>
                  <p className="serif italic text-lg font-light text-white/70 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="mt-64 pt-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 mono text-[9px] text-black/20 font-black tracking-[0.8em] reveal">
        <div className="flex items-center gap-8">
          <span>VISUAL_PLATES: {GALLERY_ITEMS.length}</span>
          <span className="w-12 h-[1px] bg-black/5"></span>
          <span>CURATION_SYSTEM_4.0</span>
        </div>
        <span className="italic">RAWLINE_STYLED_INVESTIGATIONS_NBO</span>
      </footer>
    </div>
  );
};

export default Gallery;
