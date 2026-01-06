
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24">
      <div className="max-w-3xl mx-auto space-y-32 mb-48">
        <header className="space-y-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light serif italic tracking-tighter">The Process over the Product.</h1>
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-gray-300">A Manifesto of Intent</p>
        </header>

        <section className="text-editorial space-y-12 text-xl leading-relaxed text-gray-700">
          <p className="first-letter:text-7xl first-letter:font-light first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:serif">
            Fashion has become a noise machine. It is a system designed to convince you that what you have is already obsolete. At RAWLINE, we reject the cycle of planned obsolescence. We are not interested in "new" for the sake of novelty. We are interested in "resolved."
          </p>
          
          <p>
            Our founder, a pattern maker by trade, grew disillusioned with the high-street speed. The beauty of the studio—the pinned muslin, the chalk marks on raw canvas, the smell of industrial steam—was consistently erased by the time the garment hit the floor. The "finish" felt like a lie.
          </p>

          <blockquote className="border-l-4 border-black/5 pl-8 italic serif text-2xl text-gray-400 py-4">
            "To hide the construction is to hide the truth of the labor. We choose to speak the truth."
          </blockquote>

          <p>
            RAWLINE was founded on the belief that clothing is architecture for the body. We treat our materials with the respect they deserve, which often means leaving them in their most natural state. We don't bleach away the imperfections of organic cotton. We don't sand down the natural variation in our deadstock wools.
          </p>

          <p>
            Our goal is simple: to create a wardrobe of study. Each piece is a draft that you continue to write as you wear it. It is an honest collaboration between the designer, the material, and the wearer.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 border-t border-black/5">
          <div className="space-y-6">
             <h3 className="text-[11px] uppercase tracking-widest font-bold">The Source</h3>
             <p className="text-sm text-gray-500 leading-relaxed">
               90% of our materials are sourced within a 100-mile radius of our studio. We utilize deadstock, remnants, and low-impact organic fibers exclusively.
             </p>
          </div>
          <div className="space-y-6">
             <h3 className="text-[11px] uppercase tracking-widest font-bold">The Time</h3>
             <p className="text-sm text-gray-500 leading-relaxed">
               We release one item at a time. We do not follow a calendar. A piece is ready when it is ready. This is our promise of longevity.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
