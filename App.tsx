
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out ${
        scrolled ? 'glass py-5 border-b border-black/5 shadow-sm' : 'bg-transparent py-12'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-light tracking-[0.5em] hover:opacity-50 transition-all duration-700 flex items-center gap-4 group"
        >
          <div className="w-6 h-6 border border-black/10 rounded-full flex items-center justify-center group-hover:border-black transition-colors duration-700">
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
          RAWLINE
        </Link>
        
        <nav className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-bold">
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
              className={`relative py-1 overflow-hidden transition-all duration-700 ${
                isActive(item.path) ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transition-transform duration-700 origin-right ${
                isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
              }`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8">
            <Link to="/admin" className="hidden lg:block text-[9px] uppercase tracking-[0.3em] font-bold text-gray-300 hover:text-black transition-colors italic">Registry Access</Link>
            <div className="lg:hidden">
              <Link to="/archive" className="text-[10px] uppercase tracking-widest font-bold border border-black/10 px-6 py-2 rounded-full glass hover:bg-black hover:text-white transition-all">
                Registry
              </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 pt-40 pb-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none flex items-center justify-center">
        <span className="text-[40vw] font-bold serif italic leading-none">RAW</span>
    </div>
    <div className="max-w-[1700px] mx-auto px-8 md:px-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.6em] font-bold text-gray-300">Origin Study</h4>
            <p className="max-w-md text-2xl text-editorial text-gray-400 font-light leading-snug italic serif">
              A continuous practice in structural clarity. We favor the silence of creation over the noise of the marketplace.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-16 h-[1px] bg-black/10"></div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-300 font-bold">Studio Archive No. 00-24</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-10 text-gray-300">Registry</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              <li><Link to="/archive" className="hover:text-black hover:pl-2 transition-all duration-500 block">Archive Index</Link></li>
              <li><Link to="/philosophy" className="hover:text-black hover:pl-2 transition-all duration-500 block">Manifesto</Link></li>
              <li><Link to="/notes" className="hover:text-black hover:pl-2 transition-all duration-500 block">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-10 text-gray-300">Interface</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              <li><a href="#" className="hover:text-black hover:pl-2 transition-all duration-500 block">Studio Dispatch</a></li>
              <li><a href="#" className="hover:text-black hover:pl-2 transition-all duration-500 block">Visual Log</a></li>
              <li><a href="#" className="hover:text-black hover:pl-2 transition-all duration-500 block">Coordinates</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-10 text-gray-300">Engagement</h4>
            <div className="space-y-6">
                <input 
                    type="email" 
                    placeholder="Studio Dispatch" 
                    className="w-full bg-transparent border-b border-black/10 py-3 text-[10px] uppercase tracking-widest outline-none focus:border-black transition-colors"
                />
                <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-widest italic font-medium">Monthly updates from the cutting table.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-black/5 text-[10px] uppercase tracking-[0.4em] text-gray-300 space-y-8 md:space-y-0 font-bold">
        <p>© RAWLINE — Founded on curiosity, not certainty.</p>
        <div className="flex items-center gap-10">
            <p className="italic serif opacity-50">Documenting the process</p>
            <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
            <p>Berlin Studio</p>
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
