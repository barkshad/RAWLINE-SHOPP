
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-64 text-center space-y-12 reveal">
      <div className="space-y-6">
        <h1 className="text-8xl md:text-[15vw] font-light serif italic opacity-10">404</h1>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-600 italic serif">The coordinate does not exist.</h2>
      </div>
      <p className="max-w-md mx-auto text-lg text-gray-400 text-editorial leading-relaxed italic serif px-6">
        Sometimes a line leads to a dead end. In design, this is called a revision. You have reached a blueprint that has been retracted.
      </p>
      <Link to="/" className="inline-block mono text-[11px] uppercase tracking-[0.5em] font-bold border-b border-black pb-2 hover:opacity-50 transition-all">
        Return to Origin
      </Link>
    </div>
  );
};

export default NotFound;
