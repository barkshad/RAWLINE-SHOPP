
import React, { useState } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { generateEditorialThesis } from '../services/geminiService';

interface AdminProps {
  products: Product[];
  onAdd: (product: Product) => void;
}

const Admin: React.FC<AdminProps> = ({ products, onAdd }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Tops',
    price: 0,
    description: '',
    editorial: '',
    fabric: '',
    fit: '',
    images: ['https://picsum.photos/800/1200?random=' + Math.floor(Math.random() * 1000)],
  });

  const handleGenerateEditorial = async () => {
    if (!newProduct.name || !newProduct.category) {
      alert("Please provide a designation and classification first.");
      return;
    }
    setIsGenerating(true);
    const thesis = await generateEditorialThesis(newProduct.name, newProduct.category);
    setNewProduct(prev => ({ ...prev, editorial: thesis }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      ...newProduct as Product,
      id: (products.length + 1).toString(),
      status: 'published',
      createdAt: Date.now(),
    };
    onAdd(product);
    alert('Research added to archive.');
    setNewProduct({
      name: '',
      category: 'Tops',
      price: 0,
      description: '',
      editorial: '',
      fabric: '',
      fit: '',
      images: ['https://picsum.photos/800/1200?random=' + Math.floor(Math.random() * 1000)],
    });
  };

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
      <header className="mb-24 space-y-4">
        <h1 className="text-3xl font-light serif italic">Archive Management</h1>
        <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Internal Utility for Structural Documentation</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-8">
             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Designation</label>
               <input 
                 required
                 type="text" 
                 placeholder="e.g., Structural Canvas Study 04"
                 className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-xl font-light placeholder:text-gray-200"
                 value={newProduct.name}
                 onChange={e => setNewProduct({...newProduct, name: e.target.value})}
               />
             </div>

             <div className="grid grid-cols-2 gap-8">
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Classification</label>
                 <select 
                    className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm cursor-pointer"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                 >
                   {CATEGORIES.filter(c => c !== 'All').map(c => (
                     <option key={c} value={c}>{c}</option>
                   ))}
                 </select>
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Valuation (€)</label>
                 <input 
                   required
                   type="number" 
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
                   value={newProduct.price}
                   onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                 />
               </div>
             </div>

             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Short Context</label>
               <input 
                 required
                 maxLength={100}
                 type="text" 
                 placeholder="A minimalist analysis of..."
                 className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm italic placeholder:text-gray-200"
                 value={newProduct.description}
                 onChange={e => setNewProduct({...newProduct, description: e.target.value})}
               />
             </div>

             <div className="flex flex-col space-y-4">
               <div className="flex justify-between items-center">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Editorial Essay (The 'Thesis')</label>
                 <button 
                  type="button"
                  onClick={handleGenerateEditorial}
                  disabled={isGenerating}
                  className="text-[9px] uppercase tracking-widest font-bold text-gray-400 border border-gray-200 px-3 py-1 hover:border-black hover:text-black transition-all disabled:opacity-30"
                 >
                   {isGenerating ? "Consulting Archive..." : "Editorial Assistant (AI)"}
                 </button>
               </div>
               <textarea 
                 required
                 rows={6}
                 className="bg-transparent border border-black/10 p-6 focus:border-black outline-none transition-colors text-sm leading-relaxed resize-none"
                 placeholder="Explain the intent and architectural philosophy behind this garment..."
                 value={newProduct.editorial}
                 onChange={e => setNewProduct({...newProduct, editorial: e.target.value})}
               />
             </div>

             <div className="grid grid-cols-2 gap-8">
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Material Analysis</label>
                 <input 
                   required
                   type="text" 
                   placeholder="e.g., 100% Unbleached Drill"
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
                   value={newProduct.fabric}
                   onChange={e => setNewProduct({...newProduct, fabric: e.target.value})}
                 />
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Geometry & Ease</label>
                 <input 
                   required
                   type="text" 
                   placeholder="e.g., Oversized, structural drape"
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
                   value={newProduct.fit}
                   onChange={e => setNewProduct({...newProduct, fit: e.target.value})}
                 />
               </div>
             </div>
          </div>

          <button type="submit" className="w-full py-8 bg-black text-white text-[12px] uppercase tracking-[0.3em] font-bold hover:opacity-80 transition-all duration-500 shadow-xl">
            Commit to Catalog Archive
          </button>
        </form>

        <div className="space-y-12">
          <div className="p-8 bg-gray-50 border border-black/5 rounded-sm">
             <h3 className="text-[11px] uppercase tracking-widest font-bold mb-4">Note on Administration</h3>
             <p className="text-xs text-gray-500 leading-relaxed text-editorial">
               The Archive is a shared record of RAWLINE's evolution. Ensure all documentation maintains our standard of thoughtful restraint. Use the Editorial Assistant sparingly—it is a tool for resonance, not a replacement for intent.
             </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Catalog Registry</h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 scrollbar-hide border-t border-black/5 pt-8">
               {products.map(p => (
                 <div key={p.id} className="flex items-center space-x-6 py-6 border-b border-black/5 group">
                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                      <img src={p.images[0]} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[13px] font-medium tracking-tight uppercase">{p.name}</h4>
                      <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">{p.category} — Ref. {p.id.padStart(4, '0')}</p>
                    </div>
                    <button className="text-[9px] text-red-200 uppercase font-bold hover:text-red-400 transition-colors tracking-widest">Retract</button>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
