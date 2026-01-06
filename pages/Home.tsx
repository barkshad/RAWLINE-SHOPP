
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48">
      <div className="max-w-5xl mx-auto space-y-32 mb-48">
        {/* Hero Section */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-2">
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">RAWLINE — Origin</h2>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] serif">
              Timeless fits.<br />
              Raw ideas. <span className="italic">Defined form.</span>
            </h1>
          </div>
          <div className="max-w-2xl space-y-8">
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-editorial">
              RAWLINE is a space for beginnings. Not finished products. Not loud conclusions. 
              But the first line — the moment before something becomes refined, packaged, or explained away.
            </p>
            <Link to="/archive" className="inline-block border-b border-black pb-2 text-[11px] uppercase tracking-[0.3em] font-bold hover:opacity-40 transition-opacity">
              Enter the Archive
            </Link>
          </div>
        </section>

        {/* Philosophy Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-black/5">
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/1200/1500?random=42" alt="Process detail" className="object-cover w-full h-full opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/20 to-transparent"></div>
          </div>
          <div className="space-y-16">
            <div className="space-y-8 text-editorial text-xl text-gray-600 leading-relaxed">
              <p>
                We are interested in process. In thought before polish. In work that still carries its fingerprints.
              </p>
              <p>
                RAWLINE exists to slow things down. To make room for intention in a culture that rushes to outcomes.
              </p>
              <p className="italic text-gray-400">
                This is not a brand built on trends. It is built on attention.
              </p>
            </div>
            
            <div className="space-y-8 pt-12">
               <h3 className="text-[11px] uppercase tracking-widest font-bold">The Blueprint</h3>
               <p className="text-gray-500 leading-relaxed">
                 Every piece of work starts somewhere imperfect. A sketch. A note. A discarded idea. 
                 RAWLINE stays close to that moment. We believe clarity comes from restraint.
               </p>
               <Link to="/philosophy" className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-black/10 hover:border-black transition-colors">
                 Read Manifesto
               </Link>
            </div>
          </div>
        </section>

        {/* Site Purpose Section */}
        <section className="py-32 text-center max-w-3xl mx-auto space-y-10">
          <p className="serif italic text-4xl text-gray-300 leading-tight">
            "This site is not a storefront. It is a record of thinking."
          </p>
          <div className="w-12 h-px bg-black/10 mx-auto"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">RAWLINE Studio — Document 001</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
