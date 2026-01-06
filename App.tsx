
import React, { useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#FAF9F6]/95 backdrop-blur-sm py-4 border-b border-black/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-baseline">
        <Link to="/" className="text-2xl font-light tracking-[0.3em] hover:opacity-50 transition-opacity">RAWLINE</Link>
        <nav className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
          <Link to="/archive" className="hover:text-black transition-colors">Archive</Link>
          <Link to="/philosophy" className="hover:text-black transition-colors">Philosophy</Link>
          <Link to="/process" className="hover:text-black transition-colors">Process</Link>
          <Link to="/founder" className="hover:text-black transition-colors">Founder</Link>
          <Link to="/notes" className="hover:text-black transition-colors">Notes</Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 pt-32 pb-16 mt-32">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
        <div className="space-y-8">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">RAWLINE</h4>
          <p className="max-w-md text-sm text-editorial text-gray-400 leading-relaxed italic serif">
            RAWLINE is an ongoing exploration of raw ideas and intentional creation. 
            This project is not finished — and it doesn’t need to be.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-24 space-y-12 md:space-y-0">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-gray-300">Sections</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
              <li><Link to="/archive" className="hover:text-black transition-colors">Archive Registry</Link></li>
              <li><Link to="/philosophy" className="hover:text-black transition-colors">The Manifesto</Link></li>
              <li><Link to="/notes" className="hover:text-black transition-colors">Journal Entries</Link></li>
              <li><Link to="/admin" className="hover:text-black transition-colors opacity-30">Admin Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-gray-300">Engagement</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-gray-300 space-y-6 md:space-y-0">
        <p>© RAWLINE — Founded on curiosity, not certainty.</p>
        <p className="italic serif">Process over Trend.</p>
      </div>
    </div>
  </footer>
);

import { useState } from 'react';

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
