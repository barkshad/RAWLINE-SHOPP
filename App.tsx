
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
import { Product, SiteContent } from './types';
import { INITIAL_PRODUCTS, INITIAL_SITE_CONTENT } from './constants';
import { Menu, X, ShoppingBag, Database, ShieldCheck } from 'lucide-react';

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

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

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

const Header = ({ content }: { content: SiteContent }) => {
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

  const navLinksLeft = [
    { name: 'The Findings', path: '/archive' },
    { name: 'Philosophy', path: '/philosophy' },
  ];

  const navLinksRight = [
    { name: 'Restoration', path: '/process' },
    { name: 'Journal', path: '/notes' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-[10px] transition-opacity duration-700 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ease-in-out ${
          scrolled ? 'museum-glass py-4 shadow-xl border-b border-black/5' : 'bg-transparent py-10 md:py-16'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-8 md:px-16 flex justify-between items-center">
          <nav className="hidden lg:flex items-center gap-12 w-1/3">
            {navLinksLeft.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] mono uppercase tracking-[0.4em] font-black transition-all ${
                  pathname === link.path ? 'text-[#8E4E35]' : 'text-black/40 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex-grow flex justify-center lg:w-1/3">
            <Link to="/" className="flex flex-col items-center gap-1 group relative z-[110]">
              <span className={`mono text-[14px] md:text-[20px] font-black tracking-[1em] uppercase transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-current'}`}>
                {content.brand.name}
              </span>
              <span className={`mono text-[7px] tracking-[0.6em] uppercase opacity-40 transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-current'}`}>
                {content.brand.subBrand} • {content.brand.location}
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-12 w-1/3">
             <nav className="hidden lg:flex items-center gap-12">
               {navLinksRight.map((link) => (
                 <Link 
                   key={link.path} 
                   to={link.path}
                   className={`text-[10px] mono uppercase tracking-[0.4em] font-black transition-all ${
                     pathname === link.path ? 'text-[#8E4E35]' : 'text-black/40 hover:text-black'
                   }`}
                 >
                   {link.name}
                 </Link>
               ))}
             </nav>
             <button className="hidden sm:flex items-center gap-2 text-[10px] mono uppercase tracking-widest font-black text-black/40 hover:text-black transition-colors">
                <ShoppingBag size={16} />
                <span className="hidden xl:inline">The Boutique</span>
             </button>
             <button 
               className="lg:hidden p-2 relative z-[110] transition-transform duration-300 hover:scale-110 active:scale-95"
               onClick={() => setMenuOpen(!menuOpen)}
               aria-label="Toggle Navigation"
             >
               {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-[60] bg-[#121212] transition-all duration-[1000ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 md:p-24 h-full flex flex-col justify-center items-center text-center">
          <nav className="flex flex-col gap-8 md:gap-16">
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-5xl md:text-[10vh] serif italic transition-all duration-700 font-light tracking-tighter ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${pathname === link.path ? 'text-[#8E4E35]' : 'text-white/20 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

const Footer = ({ content }: { content: SiteContent }) => (
  <footer className="bg-[#1A1816] text-[#F2EDE4] py-32 md:py-48 overflow-hidden relative border-t border-white/5">
    <div className="max-w-[1800px] mx-auto px-8 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-4 space-y-12">
           <Link to="/" className="flex flex-col gap-2">
              <span className="mono text-2xl font-black tracking-[0.8em] uppercase">{content.brand.name}</span>
              <span className="mono text-[10px] tracking-[0.4em] uppercase text-white/30">{content.brand.subBrand} — {content.brand.location}</span>
           </Link>
           <p className="max-w-md text-xl md:text-2xl text-white/40 font-light italic serif leading-relaxed">
             {content.brand.description}
           </p>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-16">
           <div className="space-y-10">
             <h4 className="mono text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">The Archive</h4>
             <ul className="space-y-5 text-[11px] mono uppercase tracking-[0.3em] font-black text-white/50">
               <li><Link to="/archive" className="hover:text-white transition-colors">The Findings</Link></li>
               <li><Link to="/philosophy" className="hover:text-white transition-colors">Manifesto</Link></li>
               <li><Link to="/process" className="hover:text-white transition-colors">Methodology</Link></li>
             </ul>
           </div>
           <div className="space-y-10">
             <h4 className="mono text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Services</h4>
             <ul className="space-y-5 text-[11px] mono uppercase tracking-[0.3em] font-black text-white/50">
               <li><a href="#" className="hover:text-white">Shipping</a></li>
               <li><a href="#" className="hover:text-white">Authentication</a></li>
             </ul>
           </div>
           <div className="space-y-10">
             <h4 className="mono text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Operational Portal</h4>
             <Link 
               to="/admin" 
               className="group flex items-center gap-4 mono text-[9px] uppercase tracking-[0.5em] font-black text-[#8E4E35] bg-[#8E4E35]/10 px-6 py-4 border border-[#8E4E35]/30 hover:bg-[#8E4E35] hover:text-white transition-all w-fit rounded-sm shadow-2xl"
             >
               <Database size={16} />
               Maison_CMS_Terminal
               <ShieldCheck size={16} className="opacity-40 group-hover:opacity-100" />
             </Link>
           </div>
        </div>
      </div>
      
      <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <span className="mono text-[9px] uppercase tracking-[0.4em] text-white/10">© 2024 {content.brand.name} MAISON D'ARCHIVE. ALL RIGHTS SECURED.</span>
        <div className="flex flex-wrap justify-center items-center gap-12 mono text-[9px] uppercase tracking-[0.4em] text-white/10">
           <span className="text-[#8E4E35] font-black">{content.brand.location} • PARIS • TOKYO</span>
           <span>RESTRICTED_ACCESS_PROTOCOL</span>
        </div>
      </div>
    </div>
  </footer>
);

const AppContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('rawline_products_v6');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return INITIAL_PRODUCTS;
    } catch (e) {
      console.error("Failed to load products", e);
      return INITIAL_PRODUCTS;
    }
  });

  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem('rawline_content_v6');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.brand) return parsed; 
      }
      return INITIAL_SITE_CONTENT;
    } catch (e) {
       console.error("Failed to load site content", e);
      return INITIAL_SITE_CONTENT;
    }
  });

  const updateProducts = (updated: Product[]) => {
    setProducts(updated);
    localStorage.setItem('rawline_products_v6', JSON.stringify(updated));
  };

  const updateSiteContent = (updated: SiteContent) => {
    setSiteContent(updated);
    localStorage.setItem('rawline_content_v6', JSON.stringify(updated));
  };

  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-[#8E4E35] selection:text-white">
        <Header content={siteContent} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} content={siteContent} />} />
            <Route path="/archive" element={<Archive products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/philosophy" element={<Philosophy content={siteContent} />} />
            <Route path="/process" element={<Process content={siteContent} />} />
            <Route path="/notes" element={<Notes content={siteContent} />} />
            <Route path="/admin" element={<Admin products={products} siteContent={siteContent} onUpdateProducts={updateProducts} onUpdateContent={updateSiteContent} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer content={siteContent} />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
