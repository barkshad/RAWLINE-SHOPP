
import React from 'react';

const NoteCard: React.FC<{ title: string; date: string; children: React.ReactNode; index: number }> = ({ title, date, children, index }) => (
  <article className="space-y-8 pb-24 border-b border-black/5 last:border-0 reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6">
      <h3 className="text-3xl md:text-5xl font-light serif italic text-black/80 hover:translate-x-4 transition-transform duration-700 cursor-help">{title}</h3>
      <p className="mono text-[11px] uppercase tracking-[0.5em] text-[#8A9A8A] font-bold">{date}</p>
    </div>
    <div className="text-editorial text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl italic serif">
      {children}
    </div>
  </article>
);

const Notes: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">Document 04 — Journal</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            Registry <span className="text-[#8A9A8A]">Notes.</span>
          </h1>
        </header>

        <section className="space-y-32">
          <NoteCard title="On Restraint" date="OCTOBER 12, 2024" index={0}>
            Restraint is the hardest discipline. To leave a hem raw is to admit it is already enough. To leave a seam exposed is to celebrate the labor. We are constantly learning to trust the material to speak for itself.
          </NoteCard>
          
          <NoteCard title="The Weight of Silence" date="SEPTEMBER 04, 2024" index={1}>
            Clothing is the only architecture we carry with us. It dictates how we move, how we sit, and how we are perceived by the air around us. We favor weighted jersey because it provides a structural foundation for the quietest moments.
          </NoteCard>

          <NoteCard title="First Drafts" date="AUGUST 20, 2024" index={2}>
            There is a specific beauty in the muslin. It is unpretentious. It is a promise. We try to carry that same lack of ego into our final iterations, ensuring the piece never forgets its own humble origin.
          </NoteCard>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline reveal">
           <p className="text-[11px] uppercase tracking-[0.5em] text-gray-300 font-bold">Studio Log — Continuous Exploration</p>
           <div className="text-[12px] uppercase tracking-[0.6em] font-bold flex items-center gap-6">
             <span className="opacity-10 hidden sm:inline">Section Index</span>
             <span className="w-12 h-[1px] bg-black/10 hidden sm:inline"></span>
             <span>04 / 04</span>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Notes;
