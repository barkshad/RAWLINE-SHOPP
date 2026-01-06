
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
import { Menu, X, ArrowUpRight } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Registry', path: '/archive' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Process', path: '/process' },
    { name: 'Journal', path: '/notes' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled ? 'glass py-4' : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-5 h-5 border border-black/20 flex items-center justify-center group-hover:bg-black transition-all duration-500">
               <div className="w-1 h-1 bg-black group-hover:bg-white rounded-full"></div>
            </div>
            <span className="mono text-[11px] font-bold tracking-[0.4em] uppercase">RAWLINE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] mono uppercase tracking-[0.2em] font-medium transition-colors ${
                  pathname === link.path ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-black/10 mx-2"></div>
            <Link to="/admin" className="text-[10px] mono uppercase tracking-[0.2em] font-bold text-[#2D3E50] hover:underline underline-offset-4">
              Internal Registry
            </Link>
          </nav>

          <button 
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-700 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="mono text-xs font-bold tracking-[0.3em]">NAV_INDEX</span>
            <button onClick={() => setMenuOpen(false)}><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMenuOpen(false)}
                className="text-4xl serif italic hover:pl-4 transition-all duration-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pb-10 border-t pt-10 border-black/5">
            <Link 
              to="/admin" 
              onClick={() => setMenuOpen(false)}
              className="text-sm mono uppercase tracking-widest text-[#2D3E50]"
            >
              Registry Access Restricted
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 py-24">
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-8">
           <Link to="/" className="flex items-center gap-3">
              <div className="w-6 h-6 border border-black/10 flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
              <span className="mono text-xs font-bold tracking-[0.5em]">RAWLINE</span>
           </Link>
           <p className="max-w-md text-xl text-editorial text-gray-400 font-light italic serif">
             A continuous study in structural clarity. We reject the seasonal cycle in favor of the resolved form.
           </p>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
           <div className="space-y-6">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Navigation</h4>
             <ul className="space-y-3 text-[11px] mono uppercase tracking-widest font-medium">
               <li><Link to="/archive" className="hover:text-[#2D3E50] transition-colors">Archive</Link></li>
               <li><Link to="/philosophy" className="hover:text-[#2D3E50] transition-colors">Manifesto</Link></li>
               <li><Link to="/process" className="hover:text-[#2D3E50] transition-colors">Methods</Link></li>
             </ul>
           </div>
           <div className="space-y-6">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Connect</h4>
             <ul className="space-y-3 text-[11px] mono uppercase tracking-widest font-medium">
               <li><a href="#" className="hover:text-[#2D3E50] transition-colors flex items-center gap-2">Studio Dispatch <ArrowUpRight size={12} /></a></li>
               <li><a href="#" className="hover:text-[#2D3E50] transition-colors flex items-center gap-2">Coordinates <ArrowUpRight size={12} /></a></li>
             </ul>
           </div>
           <div className="col-span-2 md:col-span-1 space-y-6">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Dispatch</h4>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full bg-transparent border-b border-black/10 py-2 mono text-[10px] uppercase tracking-widest outline-none focus:border-black transition-colors"
                />
             </div>
           </div>
        </div>
      </div>
      
      <div className="mt-24 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="mono text-[9px] uppercase tracking-widest text-gray-300">© 2024 RAWLINE STUDIO. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-6 mono text-[9px] uppercase tracking-widest text-gray-300">
           <span className="text-[#2D3E50] font-bold">52.5200° N, 13.4050° E</span>
           <span className="h-3 w-[1px] bg-black/10"></span>
           <span>Berlin Archive No. 00-24</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('rawline_products_v2');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const addProduct = (product: Product) => {
    const updated = [product, ...products];
    setProducts(updated);
    localStorage.setItem('rawline_products_v2', JSON.stringify(updated));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-[#2D3E50] selection:text-white">
        <Header />
        <main className="flex-grow pt-20">
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
