
import React from 'react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../components/TiltCard';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48">
      <div className="max-w-5xl mx-auto space-y-48 mb-48">
        
        {/* Hero Section */}
        <section className="space-y-16">
          <div className="space-y-6 animate-reveal">
            <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-gray-300 stagger-1">RAWLINE — Origin Registry</h2>
            <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.85] serif stagger-2">
              Timeless fits.<br />
              Raw ideas. <span className="italic text-gray-400">Defined form.</span>
            </h1>
          </div>
          <div className="max-w-2xl space-y-10 animate-reveal stagger-3">
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-editorial">
              RAWLINE is a space for beginnings. Not finished products. Not loud conclusions. 
              But the first line — the moment before something becomes refined, packaged, or explained away.
            </p>
            <div className="flex items-center gap-10">
                <Link 
                    to="/archive" 
                    className="group relative inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-500 overflow-hidden"
                >
                    <span className="relative z-10">Enter the Archive</span>
                    <span className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500"></span>
                    <div className="absolute inset-0 bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 -z-0"></div>
                </Link>
                <Link to="/philosophy" className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 hover:text-black transition-colors">
                    The Manifesto
                </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Intro with Interactive Elements */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center pt-24 border-t border-black/5">
          <div className="animate-reveal stagger-2">
            <TiltCard>
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl rounded-sm">
                    <img 
                        src="https://picsum.photos/1200/1500?random=42" 
                        alt="Process detail" 
                        className="object-cover w-full h-full opacity-80 grayscale hover:grayscale-0 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/40 via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8 glass px-4 py-2 rounded-sm">
                        <p className="text-[9px] uppercase tracking-widest font-bold">Plate 01: The Muslin</p>
                    </div>
                </div>
            </TiltCard>
          </div>
          <div className="space-y-20 animate-reveal stagger-4">
            <div className="space-y-10 text-editorial text-2xl text-gray-600 leading-relaxed font-light">
              <p>
                We are interested in <span className="text-black font-medium">process</span>. In thought before polish. In work that still carries its fingerprints.
              </p>
              <p>
                RAWLINE exists to slow things down. To make room for intention in a culture that rushes to outcomes.
              </p>
              <p className="italic text-gray-400 border-l-2 border-black/5 pl-10">
                This is not a brand built on trends. It is built on attention.
              </p>
            </div>
            
            <div className="space-y-8 pt-12 glass p-10 rounded-sm">
               <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold">The Blueprint</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Every piece of work starts somewhere imperfect. A sketch. A note. A discarded idea. 
                 RAWLINE stays close to that moment. We believe clarity comes from restraint.
               </p>
               <Link to="/philosophy" className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black hover:border-black/20 transition-all">
                 Read Manifesto
               </Link>
            </div>
          </div>
        </section>

        {/* Site Purpose Section - Glass Card */}
        <section className="py-48 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-[20vw] font-bold serif italic uppercase">Clarity</span>
          </div>
          <div className="relative glass py-24 px-12 rounded-lg max-w-4xl mx-auto space-y-12 animate-reveal shadow-sm">
            <p className="serif italic text-4xl md:text-5xl text-black/70 leading-tight">
              "This site is not a storefront. It is a record of thinking."
            </p>
            <div className="flex flex-col items-center gap-6">
                <div className="w-12 h-[1px] bg-black/10"></div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">RAWLINE Studio — Registry Document 001</p>
            </div>
          </div>
        </section>

        {/* Closing Visual Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[51, 52, 53].map((id, i) => (
                <div key={id} className={`aspect-[3/4] overflow-hidden rounded-sm animate-reveal stagger-${i+1}`}>
                    <img 
                        src={`https://picsum.photos/800/1000?random=${id}`} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000" 
                        alt="Archive study" 
                    />
                </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
