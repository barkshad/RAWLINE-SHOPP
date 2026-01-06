
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Cart from './components/Cart';
import { Product } from './types';
import { INITIAL_PRODUCTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = ({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF9F6]/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-end">
        <div className="flex items-baseline space-x-12">
          <Link to="/" className="text-2xl font-light tracking-[0.2em] hover:opacity-60 transition-opacity">RAWLINE</Link>
          <nav className="hidden md:flex space-x-8 text-[11px] uppercase tracking-widest font-medium">
            <Link to="/shop" className="hover:opacity-40 transition-opacity">Collections</Link>
            <Link to="/about" className="hover:opacity-40 transition-opacity">Philosophy</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-8 text-[11px] uppercase tracking-widest font-medium">
           <button onClick={onOpenCart} className="flex items-center space-x-2 hover:opacity-40 transition-opacity">
             <span>Bag</span>
             {cartCount > 0 && <span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-[8px]">{cartCount}</span>}
           </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 pt-32 pb-16 mt-32">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
        <div className="md:col-span-1">
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">RAWLINE STUDIO</h4>
          <p className="max-w-xs text-sm text-editorial text-gray-400 leading-relaxed italic serif">
            "We build clothing for those who see the beauty in the blueprint. Design is the documentation of intent."
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Resources</h4>
          <ul className="space-y-4 text-[13px] text-gray-500">
            <li><Link to="/shop" className="hover:text-black transition-colors">Archive</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Philosophy</Link></li>
            <li><a href="#" className="hover:text-black transition-colors">Care Guide</a></li>
            <li><Link to="/admin" className="hover:text-black transition-colors">Internal Access</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Contact</h4>
          <p className="text-[13px] text-gray-500 mb-4">studio@rawline.process</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black">Instagram</a>
            <a href="#" className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black">Journal</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-300 space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} RAWLINE CLOTHING — ALL RIGHTS RESERVED</p>
        <div className="flex space-x-8">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
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

  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>(() => {
    const saved = localStorage.getItem('rawline_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('rawline_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('rawline_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (product: Product) => setProducts([product, ...products]);

  const addToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
        <Header cartCount={totalQuantity} onOpenCart={() => setIsCartOpen(true)} />
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems} 
          onRemove={removeFromCart} 
        />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
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
