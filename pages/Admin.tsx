
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
    alert('Study committed to registry.');
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
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-32">
      <header className="mb-24 space-y-4">
        <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-300">Internal Access</h2>
        <h1 className="text-5xl font-light serif italic">Registry Management</h1>
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold">Documenting structural evolution and intentional form</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-10">
             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Designation (Garment Name)</label>
               <input 
                 required
                 type="text" 
                 placeholder="e.g., Structural Study 08"
                 className="bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors text-2xl font-light placeholder:text-gray-100"
                 value={newProduct.name}
                 onChange={e => setNewProduct({...newProduct, name: e.target.value})}
               />
             </div>

             <div className="grid grid-cols-2 gap-12">
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Classification</label>
                 <select 
                    className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-[11px] uppercase tracking-widest font-bold cursor-pointer"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                 >
                   {CATEGORIES.filter(c => c !== 'All').map(c => (
                     <option key={c} value={c}>{c}</option>
                   ))}
                 </select>
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300 opacity-20 italic">Archival Cost Index (€)</label>
                 <input 
                   required
                   type="number" 
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm opacity-30"
                   value={newProduct.price}
                   onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                 />
               </div>
             </div>

             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Core Identity (Short Summary)</label>
               <input 
                 required
                 maxLength={100}
                 type="text" 
                 placeholder="A focused exploration of..."
                 className="bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors text-lg italic serif text-gray-500 placeholder:text-gray-100"
                 value={newProduct.description}
                 onChange={e => setNewProduct({...newProduct, description: e.target.value})}
               />
             </div>

             <div className="flex flex-col space-y-6">
               <div className="flex justify-between items-center">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">The Thesis (Editorial Philosophy)</label>
                 <button 
                  type="button"
                  onClick={handleGenerateEditorial}
                  disabled={isGenerating}
                  className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-black/5 px-4 py-2 hover:border-black hover:text-black transition-all disabled:opacity-20"
                 >
                   {isGenerating ? "Synthesizing Intent..." : "Consult Editorial AI"}
                 </button>
               </div>
               <textarea 
                 required
                 rows={6}
                 className="bg-transparent border border-black/5 p-8 focus:border-black outline-none transition-colors text-lg text-editorial leading-relaxed resize-none shadow-sm"
                 placeholder="Describe the logic of the blueprint and the physical reality of the material..."
                 value={newProduct.editorial}
                 onChange={e => setNewProduct({...newProduct, editorial: e.target.value})}
               />
             </div>

             <div className="grid grid-cols-2 gap-12">
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Material Composition</label>
                 <input 
                   required
                   type="text" 
                   placeholder="e.g., Raw Organic Indigo Denim"
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm italic serif"
                   value={newProduct.fabric}
                   onChange={e => setNewProduct({...newProduct, fabric: e.target.value})}
                 />
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Geometric Logic (Fit)</label>
                 <input 
                   required
                   type="text" 
                   placeholder="e.g., Structural, zero-waste cut"
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm italic serif"
                   value={newProduct.fit}
                   onChange={e => setNewProduct({...newProduct, fit: e.target.value})}
                 />
               </div>
             </div>
          </div>

          <button type="submit" className="w-full py-10 bg-black text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gray-800 transition-all duration-700 shadow-2xl">
            Commit to Archive Registry
          </button>
        </form>

        <div className="space-y-16">
          <div className="p-10 bg-white border border-black/5 shadow-sm">
             <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Archival Protocol</h3>
             <p className="text-sm text-gray-400 leading-relaxed text-editorial italic serif">
               Registry documentation is a shared record of identity. Ensure all entries maintain the RAWLINE standard of clarity, meaning, and intentional restraint. 
               We are not selling items; we are cataloging thoughts.
             </p>
          </div>

          <div className="space-y-10">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-300">Registry Index</h2>
            <div className="space-y-2 max-h-[800px] overflow-y-auto pr-6 scrollbar-hide">
               {products.map(p => (
                 <div key={p.id} className="flex items-center space-x-8 py-6 border-b border-black/5 group">
                    <div className="w-12 h-16 bg-gray-100 flex-shrink-0">
                      <img src={p.images[0]} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[12px] font-semibold tracking-widest uppercase">{p.name}</h4>
                      <p className="text-[9px] text-gray-300 uppercase tracking-[0.3em] mt-2">REF. {p.id.padStart(4, '0')} — {p.category}</p>
                    </div>
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
