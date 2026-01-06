
import React from 'react';
import { SiteContent } from '../types';

interface NotesProps {
  content: SiteContent;
}

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

const Notes: React.FC<NotesProps> = ({ content }) => {
  const n = content.notes;
  return (
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-24 md:py-48 bg-[#F2EDE4]">
      <div className="max-w-4xl mx-auto space-y-48">
        <header className="space-y-12 reveal">
          <div className="flex items-center gap-8">
            <span className="w-16 h-[1.5px] bg-black/10"></span>
            <h2 className="text-[12px] uppercase tracking-[0.8em] font-bold text-gray-300">{n.documentId}</h2>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-light serif italic tracking-tighter leading-[0.85] text-black/90">
            {n.title}
          </h1>
        </header>

        <section className="space-y-32">
          {n.entries.map((entry, i) => (
            <NoteCard key={entry.id} title={entry.title} date={entry.date} index={i}>
              {entry.content}
            </NoteCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Notes;
