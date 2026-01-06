
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import ProductDetail from './pages/ProductDetail';
import Philosophy from './pages/Philosophy';
import Founder from './pages/Founder';
import Process from './pages/Process';
import Notes from './pages/Notes';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { Product } from './types';
import { INITIAL_PRODUCTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'glass py-4 border-b border-black/5' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-light tracking-[0.4em] hover:opacity-50 transition-all duration-500 group flex items-center gap-3"
        >
          <span className="w-8 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
          RAWLINE
        </Link>
        <nav className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-semibold">
          {[
            { name: 'Archive', path: '/archive' },
            { name: 'Philosophy', path: '/philosophy' },
            { name: 'Process', path: '/process' },
            { name: 'Founder', path: '/founder' },
            { name: 'Notes', path: '/notes' },
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`relative py-1 transition-colors duration-500 ${
                isActive(item.path) ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black transition-all"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          {/* Mobile menu trigger could go here, for now keeping it simple as per original */}
          <Link to="/archive" className="text-[10px] uppercase tracking-widest font-bold border border-black/10 px-4 py-2 rounded-full glass">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 pt-32 pb-16 mt-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A]/[0.02] -skew-x-12 translate-x-20"></div>
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
        <div className="space-y-10">
          <h4 className="text-[11px] uppercase tracking-[0.5em] font-bold opacity-30">Studio Identity</h4>
          <p className="max-w-md text-lg text-editorial text-gray-400 leading-relaxed italic serif">
            RAWLINE is an ongoing exploration of raw ideas and intentional creation. 
            This project is not finished — and it doesn’t need to be.
          </p>
          <div className="pt-4 flex items-center gap-6">
            <span className="w-12 h-[1px] bg-black/10"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300">Est. 2024</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-24 space-y-12 md:space-y-0">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8 text-gray-300">Registry</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
              <li><Link to="/archive" className="hover:text-black hover:translate-x-1 transition-all inline-block">Archive Index</Link></li>
              <li><Link to="/philosophy" className="hover:text-black hover:translate-x-1 transition-all inline-block">The Manifesto</Link></li>
              <li><Link to="/notes" className="hover:text-black hover:translate-x-1 transition-all inline-block">Journal Entries</Link></li>
              <li><Link to="/admin" className="hover:text-black opacity-30 hover:opacity-100 transition-all inline-block italic">System Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8 text-gray-300">Connection</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Studio Dispatch</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Digital Presence</a></li>
              <li><a href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Visual Archive</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-black/5 text-[9px] uppercase tracking-[0.4em] text-gray-300 space-y-6 md:space-y-0">
        <p>© RAWLINE — Founded on curiosity, not certainty.</p>
        <div className="flex items-center gap-8">
            <p className="italic serif">Process over Trend.</p>
            <span className="w-1 h-1 bg-black/10 rounded-full"></span>
            <p className="font-semibold tracking-[0.2em]">Designed in the Void</p>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('rawline_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const addProduct = (product: Product) => {
    const updated = [product, ...products];
    setProducts(updated);
    localStorage.setItem('rawline_products', JSON.stringify(updated));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/process" element={<Process />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/admin" element={<Admin products={products} onAdd={addProduct} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
