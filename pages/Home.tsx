
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 md:pt-32">
      <div className="max-w-4xl mx-auto space-y-24 mb-48">
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight serif">
            The beauty of the <span className="italic">first draft</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl text-editorial">
            RAWLINE is an architectural exploration of garment construction. We prioritize the honesty of the process over the noise of the final polish.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
             <img src="https://picsum.photos/1200/1600?random=10" alt="Process shot" className="object-cover w-full h-full opacity-90" />
             <div className="absolute inset-0 bg-black/5"></div>
          </div>
          <div className="space-y-12">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-400">Statement 001</h2>
            <div className="space-y-6 text-editorial text-lg text-gray-700 leading-relaxed">
              <p>
                In an era defined by hyper-speed and disposable trends, RAWLINE exists as a deliberate pause. We believe that a piece of clothing should not just be a covering, but a record of intent. 
              </p>
              <p>
                Our collections are not dictated by seasons, but by readiness. When a structural concept is resolved, it is released. We keep the seams visible, the hems raw, and the materials unadulterated. 
              </p>
              <p>
                This is not "unfinished." This is "essential."
              </p>
            </div>
            <Link to="/shop" className="inline-block border-b border-black pb-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">
              Explore the Archive
            </Link>
          </div>
        </section>

        <section className="pt-24 border-t border-black/5 text-center max-w-2xl mx-auto space-y-12">
          <p className="serif italic text-3xl text-gray-400">"Longevity is found in the restraint of the hand."</p>
          <p className="text-sm uppercase tracking-widest text-gray-500">— Anonymous Studio Note</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
