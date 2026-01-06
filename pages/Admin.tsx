
import React, { useState } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface AdminProps {
  products: Product[];
  onAdd: (product: Product) => void;
}

const Admin: React.FC<AdminProps> = ({ products, onAdd }) => {
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
        <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Enter new structural studies below</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-8">
             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Designation</label>
               <input 
                 required
                 type="text" 
                 className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-xl font-light"
                 value={newProduct.name}
                 onChange={e => setNewProduct({...newProduct, name: e.target.value})}
               />
             </div>

             <div className="grid grid-cols-2 gap-8">
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Classification</label>
                 <select 
                    className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
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
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Short Context (Max 100 chars)</label>
               <input 
                 required
                 maxLength={100}
                 type="text" 
                 className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm italic"
                 value={newProduct.description}
                 onChange={e => setNewProduct({...newProduct, description: e.target.value})}
               />
             </div>

             <div className="flex flex-col space-y-2">
               <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Editorial Essay (The 'Why')</label>
               <textarea 
                 required
                 rows={6}
                 className="bg-transparent border border-black/10 p-4 focus:border-black outline-none transition-colors text-sm leading-relaxed resize-none"
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
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
                   value={newProduct.fabric}
                   onChange={e => setNewProduct({...newProduct, fabric: e.target.value})}
                 />
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Form & Fit Philosophy</label>
                 <input 
                   required
                   type="text" 
                   className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-sm"
                   value={newProduct.fit}
                   onChange={e => setNewProduct({...newProduct, fit: e.target.value})}
                 />
               </div>
             </div>
          </div>

          <button type="submit" className="w-full py-6 bg-black text-white text-[12px] uppercase tracking-widest font-bold hover:opacity-80 transition-opacity">
            Submit to Research Archive
          </button>
        </form>

        <div className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Current Archive Entries</h2>
          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 scrollbar-hide border-t border-black/5 pt-8">
             {products.map(p => (
               <div key={p.id} className="flex items-center space-x-6 py-4 border-b border-black/5 group">
                  <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                    <img src={p.images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-[13px] font-medium">{p.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{p.category} — €{p.price}</p>
                  </div>
                  <button className="text-[10px] text-red-300 uppercase font-bold hover:text-red-500 transition-colors">Retract</button>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
