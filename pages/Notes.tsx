
import React from 'react';

const NoteCard: React.FC<{ title: string; date: string; children: React.ReactNode }> = ({ title, date, children }) => (
  <article className="space-y-6 pb-20 border-b border-black/5 last:border-0 group">
    <div className="flex justify-between items-baseline">
      <h3 className="text-2xl font-light serif italic group-hover:text-gray-400 transition-colors">{title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-300">{date}</p>
    </div>
    <div className="text-editorial text-lg text-gray-600 leading-relaxed max-w-2xl">
      {children}
    </div>
  </article>
);

const Notes: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 pb-32">
      <div className="max-w-3xl mx-auto space-y-32">
        <header className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Section 04</h2>
          <h1 className="text-6xl md:text-8xl font-light serif italic tracking-tighter leading-none">Journal Notes</h1>
        </header>

        <section className="space-y-24">
          <NoteCard title="On Restraint" date="MAR 12, 2024">
            Sometimes doing less is the most difficult decision. Restraint requires confidence — not in what you add, but in what you leave out.
          </NoteCard>
          
          <NoteCard title="On Beginnings" date="FEB 04, 2024">
            Every beginning is fragile. It doesn’t need pressure. It needs space. 
            The first line is the most important one because it dictates the potential of everything that follows.
          </NoteCard>

          <NoteCard title="On Silence" date="JAN 20, 2024">
            Not everything needs to be said immediately. Silence can be part of the design. 
            In the gap between the material and the body, we find the truth of the fit.
          </NoteCard>
        </section>

        <section className="pt-24 border-t border-black/5 flex justify-between items-baseline">
           <p className="text-[10px] uppercase tracking-widest text-gray-300">Ongoing Practice</p>
           <div className="text-[10px] uppercase tracking-widest font-bold">
             <span className="opacity-20">04</span> / 04
           </div>
        </section>
      </div>
    </div>
  );
};

export default Notes;
