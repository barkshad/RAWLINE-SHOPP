
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import ProductDetail from './pages/ProductDetail';
import Philosophy from './pages/Philosophy';
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
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const useScrollReveal = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Initial reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Dynamic handling for route changes
    const timer = setTimeout(() => {
      const newElements = document.querySelectorAll('.reveal');
      newElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
          scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group relative z-[100]">
            <div className="w-4 h-4 md:w-5 md:h-5 border border-black/20 flex items-center justify-center group-hover:bg-black transition-all duration-500">
               <div className="w-1 h-1 bg-black group-hover:bg-white rounded-full"></div>
            </div>
            <span className="mono text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase">RAWLINE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] mono uppercase tracking-[0.2em] font-medium transition-all ${
                  pathname === link.path ? 'text-black border-b border-black pb-1' : 'text-gray-400 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-black/10 mx-2"></div>
            <Link to="/admin" className="text-[10px] mono uppercase tracking-[0.2em] font-bold text-[#2D3E50] hover:opacity-50 transition-opacity">
              Internal
            </Link>
          </nav>

          <button 
            className="lg:hidden p-2 relative z-[100]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-700 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="p-8 md:p-16 h-full flex flex-col justify-between pt-40">
          <nav className="flex flex-col gap-8">
            <span className="mono text-[10px] font-bold text-gray-300 tracking-[0.5em] mb-4">STUDIO_NAV_INDEX</span>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-5xl md:text-7xl serif italic transition-all ${pathname === link.path ? 'text-black' : 'text-gray-300 hover:text-black'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pb-12 border-t pt-10 border-black/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <Link to="/admin" className="text-sm mono uppercase tracking-widest text-[#2D3E50] font-bold">
              Access Restricted Database
            </Link>
            <div className="flex gap-10 mono text-[10px] uppercase tracking-widest text-gray-400">
                <span>Berlin, DE</span>
                <span>EST 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 py-24 md:py-32 overflow-hidden">
    <div className="max-w-[1700px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-10">
           <Link to="/" className="flex items-center gap-4">
              <div className="w-5 h-5 border border-black/20 flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
              <span className="mono text-xs font-bold tracking-[0.6em]">RAWLINE</span>
           </Link>
           <p className="max-w-md text-xl md:text-2xl text-editorial text-gray-400 font-light italic serif leading-relaxed">
             A study in structural honesty. We celebrate the beauty of construction, the silence of the muslin, and the longevity of resolved form.
           </p>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
           <div className="space-y-8">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Navigation</h4>
             <ul className="space-y-4 text-[11px] mono uppercase tracking-[0.2em] font-medium">
               <li><Link to="/archive" className="hover:text-[#2D3E50] transition-colors">Archive</Link></li>
               <li><Link to="/philosophy" className="hover:text-[#2D3E50] transition-colors">Manifesto</Link></li>
               <li><Link to="/process" className="hover:text-[#2D3E50] transition-colors">Methods</Link></li>
               <li><Link to="/notes" className="hover:text-[#2D3E50] transition-colors">Journal</Link></li>
             </ul>
           </div>
           <div className="space-y-8">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Connect</h4>
             <ul className="space-y-4 text-[11px] mono uppercase tracking-[0.2em] font-medium">
               <li><a href="#" className="hover:text-[#2D3E50] flex items-center gap-2">Studio Dispatch <ArrowUpRight size={12} /></a></li>
               <li><a href="#" className="hover:text-[#2D3E50] flex items-center gap-2">Coordinates <ArrowUpRight size={12} /></a></li>
             </ul>
           </div>
           <div className="space-y-8">
             <h4 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Dispatch</h4>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter Coordinate (Email)" 
                  className="w-full bg-transparent border-b border-black/10 py-3 mono text-[10px] uppercase tracking-widest outline-none focus:border-black transition-colors"
                />
             </div>
           </div>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="mono text-[9px] uppercase tracking-[0.3em] text-gray-300">© 2024 RAWLINE STUDIO. ALL RECORDS DOCUMENTED.</span>
        <div className="flex flex-wrap justify-center items-center gap-8 mono text-[9px] uppercase tracking-[0.3em] text-gray-300">
           <span className="text-[#2D3E50] font-bold">52.5200° N, 13.4050° E</span>
           <span className="hidden md:inline h-3 w-[1px] bg-black/10"></span>
           <span>Berlin Registry No. 00-24</span>
        </div>
      </div>
    </div>
  </footer>
);

// New inner component to handle hooks that depend on Router context
const AppContent: React.FC<{ products: Product[]; addProduct: (p: Product) => void }> = ({ products, addProduct }) => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#2D3E50] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/archive" element={<Archive products={products} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/process" element={<Process />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/admin" element={<Admin products={products} onAdd={addProduct} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('rawline_registry_v3');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch (e) {
      console.error("Failed to parse local storage", e);
      return INITIAL_PRODUCTS;
    }
  });

  const addProduct = (product: Product) => {
    const updated = [product, ...products];
    setProducts(updated);
    localStorage.setItem('rawline_registry_v3', JSON.stringify(updated));
  };

  return (
    <Router>
      <AppContent products={products} addProduct={addProduct} />
    </Router>
  );
};

export default App;
