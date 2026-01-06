
import React from 'react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../components/TiltCard';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16">
      {/* Immersive Hero Section - Massive Editorial Scale */}
      <section className="min-h-screen flex flex-col justify-center relative pt-20">
        <div className="absolute top-1/3 -right-32 w-[60%] h-[60%] bg-black/[0.015] rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          <div className="lg:col-span-9 space-y-16 animate-reveal">
            <div className="space-y-8">
              <div className="flex items-center gap-6 stagger-1">
                <span className="w-12 h-[1px] bg-black/10"></span>
                <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">
                  Registry Index — Study 01
                </h2>
              </div>
              <h1 className="text-8xl md:text-[14vw] font-light tracking-tighter leading-[0.75] serif stagger-2 select-none">
                Timeless fits.<br />
                Raw ideas.<br />
                <span className="italic text-gray-300 inline-block translate-x-4">Defined form.</span>
              </h1>
            </div>
            
            <div className="max-w-2xl space-y-16 animate-reveal stagger-3">
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed text-editorial border-l-2 border-black/5 pl-12 py-4">
                RAWLINE is a space for beginnings. Not finished products. Not loud conclusions. 
                But the first line — <span className="text-black/80 font-normal italic">the moment before it's explained.</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-16">
                <Link 
                  to="/archive" 
                  className="group relative inline-flex items-center gap-8 glass px-12 py-6 rounded-full text-[11px] uppercase tracking-[0.6em] font-bold transition-all duration-1000 ease-out overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border-white/60"
                >
                  <span className="relative z-10">Enter Archive</span>
                  <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000 -z-0"></div>
                </Link>
                
                <Link to="/philosophy" className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300 hover:text-black transition-all group flex items-center gap-6">
                  Philosophy
                  <div className="w-1.5 h-1.5 rounded-full bg-black/5 group-hover:bg-black group-hover:scale-150 transition-all duration-500"></div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-3 animate-reveal stagger-4 perspective-2000">
            <TiltCard>
              <div className="relative aspect-[3/4.5] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] glass p-2 border-white/40">
                <img 
                  src="https://picsum.photos/1000/1500?random=108" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2s] ease-out hover:grayscale-0 hover:scale-105"
                  alt="Process study 01"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Study Ref 01</p>
                  <p className="text-3xl serif italic leading-none">Muslin Draft</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-0 hidden md:flex flex-col items-center gap-6 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold vertical-text italic">Scroll to Begin</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-black to-transparent"></div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto space-y-72 mb-72">
        {/* Editorial Section 01 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center pt-64 border-t border-black/5">
          <div className="animate-reveal">
            <TiltCard>
              <div className="relative aspect-[4/5.5] bg-gray-100 overflow-hidden shadow-3xl rounded-sm group p-1 glass border-white/50">
                <img 
                  src="https://picsum.photos/1200/1800?random=42" 
                  alt="Process detail" 
                  className="object-cover w-full h-full opacity-85 grayscale group-hover:grayscale-0 transition-all duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/50 via-transparent to-transparent"></div>
                <div className="absolute top-12 left-12 glass px-8 py-4 rounded-sm shadow-xl">
                  <p className="text-[11px] uppercase tracking-[0.4em] font-bold">Plate 01: The Muslin Foundation</p>
                </div>
              </div>
            </TiltCard>
          </div>
          
          <div className="space-y-32 animate-reveal">
            <div className="space-y-16 text-editorial text-3xl text-gray-600 leading-relaxed font-light">
              <p>
                We are interested in <span className="text-black font-semibold underline underline-offset-[16px] decoration-black/5">process</span>. In the quiet logic that precedes the polished outcome.
              </p>
              <p>
                RAWLINE exists to slow things down. To make room for intention in a culture that rushes to conclusions.
              </p>
              <p className="italic text-gray-300 border-l-4 border-black/5 pl-16 py-8">
                Creation is more honest when it isn’t trying to impress. It is simply <span className="text-gray-400">trying to be.</span>
              </p>
            </div>
            
            <div className="space-y-12 glass p-16 rounded-xl border-white/60 shadow-lg group hover:shadow-2xl transition-all duration-700">
               <h3 className="text-[12px] uppercase tracking-[0.6em] font-bold text-gray-300 group-hover:text-black transition-colors">Methodology Review</h3>
               <p className="text-gray-500 leading-relaxed text-lg font-light">
                 Clarity is the result of relentless subtraction. We believe that meaning survives longer than noise, and that honest construction is the highest form of design.
               </p>
               <Link to="/philosophy" className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] font-bold border-b border-black/20 pb-2 hover:border-black transition-all">
                 Read Archive Manifesto
                 <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:translate-x-4 transition-transform duration-500"></div>
               </Link>
            </div>
          </div>
        </section>

        {/* Section Title Divider */}
        <section className="py-24 text-center">
            <h2 className="text-[10vw] font-bold serif italic text-black/[0.03] uppercase select-none leading-none">The Record</h2>
        </section>

        {/* Immersive Overlay Quote */}
        <section className="relative overflow-hidden py-64 group">
          <div className="absolute inset-0 bg-[#1A1A1A]/[0.01] -z-10 rounded-full scale-150 blur-3xl"></div>
          <div className="relative glass py-40 px-16 rounded-[40px] max-w-5xl mx-auto space-y-20 animate-reveal shadow-xl border-white/80 group-hover:scale-[1.02] transition-transform duration-1000">
            <p className="serif italic text-6xl md:text-8xl text-black/80 leading-[0.95] tracking-tighter text-center">
              "Meaning survives<br /> longer than <span className="text-gray-300">noise.</span>"
            </p>
            <div className="flex flex-col items-center gap-10">
                <div className="w-32 h-[1px] bg-black/10"></div>
                <p className="text-[12px] uppercase tracking-[0.7em] text-gray-400 font-bold">Studio Statement 001</p>
            </div>
          </div>
        </section>

        {/* Visual Documentation Grid */}
        <section className="space-y-20">
            <div className="flex items-center justify-between animate-reveal">
                <h3 className="text-[12px] uppercase tracking-[0.6em] font-bold text-gray-300">Archive Documentation</h3>
                <Link to="/archive" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-1">Registry Index</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[112, 115, 118].map((id, i) => (
                    <div key={id} className={`group aspect-[3/4.5] overflow-hidden rounded-lg animate-reveal shadow-2xl glass p-1 border-white/40 stagger-${i+1}`}>
                        <img 
                            src={`https://picsum.photos/1000/1500?random=${id}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-[2.5s] ease-out" 
                            alt="Archive study" 
                        />
                        <div className="absolute bottom-10 left-10 glass px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 shadow-lg">
                            <p className="text-[9px] uppercase tracking-[0.4em] font-bold">Study Plate 0{i+1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Final Studio Prompt */}
        <section className="text-center space-y-16 animate-reveal">
            <div className="w-px h-32 bg-gradient-to-b from-black/10 to-transparent mx-auto"></div>
            <div className="space-y-6">
                <p className="text-3xl md:text-5xl font-light serif italic text-gray-300">Curiosity over certainty.</p>
                <Link to="/archive" className="inline-block text-[11px] uppercase tracking-[0.6em] font-bold text-black border border-black px-12 py-5 rounded-full hover:bg-black hover:text-white transition-all duration-700">
                    Enter the Full Archive
                </Link>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
