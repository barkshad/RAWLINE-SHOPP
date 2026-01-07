
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import Philosophy from './pages/Philosophy';
import Process from './pages/Process';
import Notes from './pages/Notes';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { Product, SiteContent } from './types';
import { INITIAL_PRODUCTS, INITIAL_SITE_CONTENT } from './constants';
import { Menu, X, ShoppingBag, Database, ShieldCheck, Loader2 } from 'lucide-react';
import { Logo } from './components/Logo';
import { fetchProducts, fetchSiteContent, saveProduct, saveSiteContent, removeProduct } from './services/contentService';

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
    }, 200);

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
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [pathname, menuOpen]);

  const navLinksLeft = [
    { name: 'Gallery', path: '/gallery' },
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
        className={`fixed inset-0 z-[105] bg-black/60 backdrop-blur-[10px] transition-opacity duration-700 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled ? 'museum-glass py-4 shadow-xl' : 'bg-transparent py-6 md:py-12'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 w-1/3">
            {navLinksLeft.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[9px] xl:text-[10px] mono uppercase tracking-[0.4em] font-black transition-all ${
                  pathname === link.path ? 'text-[#8E4E35]' : 'text-black/40 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex-grow flex justify-center lg:w-1/3">
            <Link to="/" className="flex flex-col items-center group relative z-[110]">
              <Logo className={`text-xl md:text-2xl xl:text-3xl transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-current'}`} />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6 xl:gap-12 w-1/3">
             <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
               {navLinksRight.map((link) => (
                 <Link 
                   key={link.path} 
                   to={link.path}
                   className={`text-[9px] xl:text-[10px] mono uppercase tracking-[0.4em] font-black transition-all ${
                     pathname === link.path ? 'text-[#8E4E35]' : 'text-black/40 hover:text-black'
                   }`}
                 >
                   {link.name}
                 </Link>
               ))}
             </nav>
             <button className="hidden sm:flex items-center gap-2 text-[10px] mono uppercase tracking-widest font-black text-black/40 hover:text-black transition-colors">
                <ShoppingBag size={14} className="md:w-4 md:h-4" />
                <span className="hidden xl:inline">The Boutique</span>
             </button>
             <button 
               className="lg:hidden p-2 relative z-[110] transition-transform duration-300 hover:scale-110"
               onClick={() => setMenuOpen(!menuOpen)}
               aria-label="Toggle Navigation"
             >
               {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-[106] bg-[#121212] transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 md:p-24 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
          <nav className="flex flex-col gap-6 md:gap-12 py-12">
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-4xl md:text-7xl lg:text-[8vh] serif italic transition-all duration-700 font-light tracking-tighter ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${pathname === link.path ? 'text-[#8E4E35]' : 'text-white/20 hover:text-white'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-12 lg:hidden">
             <Logo className="text-white/10 text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = ({ content }: { content: SiteContent }) => (
  <footer className="bg-[#1A1816] text-[#F2EDE4] py-20 md:py-32 lg:py-48 overflow-hidden relative border-t border-white/5">
    <div className="max-w-[1800px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
        <div className="lg:col-span-4 space-y-8 md:space-y-12">
           <Link to="/" className="flex flex-col items-start gap-3 md:gap-4">
              <Logo className="text-2xl md:text-3xl text-white" />
              <span className="mono text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-white/30">{content.brand.subBrand} — {content.brand.location}</span>
           </Link>
           <p className="max-w-md text-lg md:text-xl lg:text-2xl text-white/40 font-light italic serif leading-relaxed">
             {content.brand.description}
           </p>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
           <div className="space-y-6 md:space-y-10">
             <h4 className="mono text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">The Archive</h4>
             <ul className="space-y-3 md:space-y-5 text-[10px] md:text-[11px] mono uppercase tracking-[0.3em] font-black text-white/50">
               <li><Link to="/gallery" className="hover:text-white transition-colors">Visual Gallery</Link></li>
               <li><Link to="/archive" className="hover:text-white transition-colors">The Findings</Link></li>
               <li><Link to="/philosophy" className="hover:text-white transition-colors">Manifesto</Link></li>
               <li><Link to="/process" className="hover:text-white transition-colors">Methodology</Link></li>
             </ul>
           </div>
           <div className="space-y-6 md:space-y-10">
             <h4 className="mono text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Services</h4>
             <ul className="space-y-3 md:space-y-5 text-[10px] md:text-[11px] mono uppercase tracking-[0.3em] font-black text-white/50">
               <li><a href="#" className="hover:text-white">Shipping</a></li>
               <li><a href="#" className="hover:text-white">Authentication</a></li>
             </ul>
           </div>
           <div className="space-y-6 md:space-y-10">
             <h4 className="mono text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Operational Portal</h4>
             <Link 
               to="/login" 
               className="group flex items-center gap-3 md:gap-4 mono text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black text-[#8E4E35] bg-[#8E4E35]/10 px-4 md:px-6 py-3 md:py-4 border border-[#8E4E35]/30 hover:bg-[#8E4E35] hover:text-white transition-all w-fit rounded-sm shadow-2xl"
             >
               <Database size={14} className="md:w-4 md:h-4" />
               Maison_Terminal
               <ShieldCheck size={14} className="opacity-40 group-hover:opacity-100 md:w-4 md:h-4" />
             </Link>
           </div>
        </div>
      </div>
      
      <div className="mt-20 md:mt-40 pt-10 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        <span className="mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/10 text-center">© 2024 {content.brand.name} MAISON D'ARCHIVE. ALL RIGHTS SECURED.</span>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/10">
           <span className="text-[#8E4E35] font-black">{content.brand.location}, KENYA</span>
           <span>RESTRICTED_ACCESS_PROTOCOL</span>
        </div>
      </div>
    </div>
  </footer>
);

const AppContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent>(INITIAL_SITE_CONTENT);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('rawline_auth') === 'true');

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [fetchedProducts, fetchedContent] = await Promise.all([
          fetchProducts(),
          fetchSiteContent()
        ]);
        setProducts(fetchedProducts);
        setSiteContent(fetchedContent);
      } catch (e) {
        console.error("Critical Failure: Data fetch failed.", e);
      } finally {
        setIsLoading(false);
      }
    };
    initializeData();
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('rawline_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('rawline_auth');
    setIsAuthenticated(false);
  };

  const updateProducts = async (updated: Product[]) => {
    // Optimistic UI update
    setProducts(updated);
    // Persist changes individually or detect diff? 
    // For simplicity, handleAdmin will call saveProduct for specific edits.
  };

  const updateSiteContent = async (updated: SiteContent) => {
    setSiteContent(updated);
    await saveSiteContent(updated);
  };

  useScrollReveal();

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#1A1816] flex flex-col items-center justify-center text-[#F2EDE4]">
        <Logo className="text-4xl animate-pulse mb-8" />
        <div className="flex items-center gap-4 mono text-[10px] tracking-[0.4em] uppercase text-white/20">
          <Loader2 className="animate-spin" size={16} />
          Synchronizing_Archive
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-[#8E4E35] selection:text-white">
        <Header content={siteContent} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} content={siteContent} />} />
            <Route path="/archive" element={<Archive products={products} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/philosophy" element={<Philosophy content={siteContent} />} />
            <Route path="/process" element={<Process content={siteContent} />} />
            <Route path="/notes" element={<Notes content={siteContent} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route 
              path="/admin" 
              element={
                isAuthenticated ? (
                  <Admin 
                    products={products} 
                    siteContent={siteContent} 
                    onUpdateProducts={setProducts} 
                    onUpdateContent={updateSiteContent} 
                    onLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
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
