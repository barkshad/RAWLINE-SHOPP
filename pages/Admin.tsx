
import React, { useState } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { generateEditorialThesis } from '../services/geminiService';
import { Plus, Database, Cpu, Save } from 'lucide-react';

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
    images: ['https://picsum.photos/1000/1500?random=' + Math.floor(Math.random() * 1000)],
  });

  const handleGenerateEditorial = async () => {
    if (!newProduct.name || !newProduct.category) {
      alert("Designation and classification required for synthesis.");
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
      id: `REF-00${products.length + 1}`,
      status: 'published',
      createdAt: Date.now(),
    };
    onAdd(product);
    alert('Record successfully committed to registry.');
    setNewProduct({
      name: '',
      category: 'Tops',
      price: 0,
      description: '',
      editorial: '',
      fabric: '',
      fit: '',
      images: ['https://picsum.photos/1000/1500?random=' + Math.floor(Math.random() * 1000)],
    });
  };

  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-16">
      <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mono text-[10px] font-bold text-[#2D3E50] uppercase tracking-widest">
            <Database size={14} />
            INTERNAL_REGISTRY_ACCESS
          </div>
          <h1 className="text-5xl serif italic leading-tight">Registry <span className="text-[#2D3E50]">Management</span></h1>
          <p className="mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">Authorized personnel only — Berlin Studio Terminal</p>
        </div>
        <div className="hidden md:flex items-center gap-6">
           <div className="text-right">
              <p className="mono text-[9px] font-bold text-gray-300">ACTIVE_RECORDS</p>
              <p className="text-2xl font-light mono tracking-tight text-[#2D3E50]">{products.length.toString().padStart(3, '0')}</p>
           </div>
           <div className="w-px h-10 bg-black/10"></div>
           <div className="text-right">
              <p className="mono text-[9px] font-bold text-gray-300">SYSTEM_STATUS</p>
              <p className="text-2xl font-light mono tracking-tight text-[#8A9A8A]">STABLE</p>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
        {/* Form */}
        <div className="xl:col-span-8 bg-white border border-black/5 p-8 md:p-12 shadow-sm rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Designation</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Structural Plate 12"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light outline-none focus:border-black transition-colors"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Classification</label>
                <select 
                  className="w-full bg-transparent border-b border-black/10 py-4 mono text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer"
                  value={newProduct.category}
                  onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                >
                  {CATEGORIES.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Core Narrative (Short Summary)</label>
              <input 
                required
                type="text"
                placeholder="Brief thematic logic..."
                className="w-full bg-transparent border-b border-black/10 py-3 text-lg italic serif text-gray-600 outline-none focus:border-black transition-colors"
                value={newProduct.description}
                onChange={e => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">The Thesis (Editorial Philosophy)</label>
                <button 
                  type="button"
                  onClick={handleGenerateEditorial}
                  disabled={isGenerating}
                  className="flex items-center gap-2 bg-[#FDFCFB] border border-black/10 px-4 py-2 mono text-[8px] font-bold tracking-widest hover:bg-black hover:text-white transition-all disabled:opacity-30"
                >
                  <Cpu size={12} />
                  {isGenerating ? "SYNTHESIZING..." : "AI_THESIS_GEN"}
                </button>
              </div>
              <textarea 
                required
                rows={5}
                placeholder="The architectural logic behind the piece..."
                className="w-full bg-[#FAFAFA] border border-black/5 p-8 text-lg text-editorial italic serif leading-relaxed outline-none focus:border-black transition-colors resize-none"
                value={newProduct.editorial}
                onChange={e => setNewProduct({...newProduct, editorial: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="space-y-3">
                  <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Composition</label>
                  <input 
                    required
                    type="text"
                    placeholder="e.g. Raw Canvas"
                    className="w-full bg-transparent border-b border-black/10 py-3 text-sm mono uppercase outline-none focus:border-black"
                    value={newProduct.fabric}
                    onChange={e => setNewProduct({...newProduct, fabric: e.target.value})}
                  />
               </div>
               <div className="space-y-3">
                  <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Architecture (Fit)</label>
                  <input 
                    required
                    type="text"
                    placeholder="e.g. Oversized"
                    className="w-full bg-transparent border-b border-black/10 py-3 text-sm mono uppercase outline-none focus:border-black"
                    value={newProduct.fit}
                    onChange={e => setNewProduct({...newProduct, fit: e.target.value})}
                  />
               </div>
               <div className="space-y-3">
                  <label className="mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Valuation (€)</label>
                  <input 
                    required
                    type="number"
                    className="w-full bg-transparent border-b border-black/10 py-3 text-sm mono outline-none focus:border-black"
                    value={newProduct.price}
                    onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  />
               </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-6 mono text-xs font-bold uppercase tracking-[0.4em] hover:bg-[#2D3E50] transition-colors flex items-center justify-center gap-4 shadow-xl"
            >
              <Save size={18} />
              Commit Study to Registry
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="xl:col-span-4 space-y-12">
           <div className="bg-[#2D3E50] text-white p-10 rounded-sm shadow-xl space-y-6">
              <h3 className="mono text-[10px] font-bold uppercase tracking-widest">Studio Protocol</h3>
              <p className="text-sm italic serif opacity-80 leading-relaxed">
                Documentation is an act of preservation. Every entry should maintain the architectural integrity and intellectual depth established by the RAWLINE Manifesto. We do not sell; we record.
              </p>
              <div className="pt-4 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 bg-[#8A9A8A] rounded-full animate-pulse"></div>
                 <span className="mono text-[8px] font-bold tracking-widest">SYSTEM_ENCRYPTED</span>
              </div>
           </div>

           <div className="space-y-8">
              <h3 className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest">Latest Records</h3>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 scrollbar-hide">
                 {products.slice(0, 10).map(p => (
                   <div key={p.id} className="flex items-center gap-6 p-4 border border-black/5 hover:border-black/20 transition-all rounded-sm group">
                      <div className="w-12 h-16 bg-gray-100 flex-shrink-0">
                        <img src={p.images[0]} className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all" />
                      </div>
                      <div className="flex-grow">
                         <h4 className="text-[11px] font-bold uppercase tracking-widest">{p.name}</h4>
                         <p className="mono text-[8px] text-gray-300 uppercase mt-1">{p.id} — {p.category}</p>
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
