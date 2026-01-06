
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-48 text-center space-y-12">
      <div className="space-y-4">
        <h1 className="text-6xl font-light serif italic opacity-20">404</h1>
        <h2 className="text-2xl font-light tracking-tight">The path has been obscured.</h2>
      </div>
      <p className="max-w-md mx-auto text-sm text-gray-400 text-editorial leading-relaxed">
        Sometimes a line leads to a dead end. In design, this is called a revision. 
        You have reached a coordinate that does not exist in our current blueprint.
      </p>
      <Link to="/" className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
        Return to Origin
      </Link>
    </div>
  );
};

export default NotFound;
