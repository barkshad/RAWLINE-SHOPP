
import React, { useState } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { generateEditorialThesis } from '../services/geminiService';
import { Database, Cpu, Save, Plus, FileText } from 'lucide-react';

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
      alert("Designation and classification required for AI synthesis.");
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
      id: `REF-${(products.length + 1).toString().padStart(3, '0')}`,
      status: 'published',
      createdAt: Date.now(),
    };
    onAdd(product);
    alert('Garment record successfully committed to Registry Database.');
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
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <header className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 reveal">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mono text-[11px] font-bold text-[#2D3E50] uppercase tracking-widest">
            <Database size={16} />
            INTERNAL_REGISTRY_SYSTEM
          </div>
          <h1 className="text-5xl md:text-7xl serif italic leading-tight">Registry <span className="text-[#2D3E50]">Terminal</span></h1>
          <p className="mono text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Berlin Studio Archive — Restricted Access Protocol</p>
        </div>
        <div className="hidden lg:flex items-center gap-10">
           <div className="text-right">
              <p className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Active_Records</p>
              <p className="text-3xl font-light mono tracking-tighter text-[#2D3E50]">{products.length.toString().padStart(3, '0')}</p>
           </div>
           <div className="w-px h-12 bg-black/10"></div>
           <div className="text-right">
              <p className="mono text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">System_Status</p>
              <p className="text-3xl font-light mono tracking-tighter text-[#8A9A8A]">STABLE</p>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">
        {/* Registration Form */}
        <div className="xl:col-span-8 bg-white border border-black/5 p-8 md:p-16 shadow-2xl rounded-sm reveal" style={{ transitionDelay: '0.1s' }}>
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Garment Designation</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Structural Plate 12"
                  className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-light outline-none focus:border-black transition-colors"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                />
              </div>
              <div className="space-y-4">
                <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Classification</label>
                <select 
                  className="w-full bg-transparent border-b border-black/10 py-5 mono text-[11px] font-bold uppercase tracking-widest outline-none cursor-pointer"
                  value={newProduct.category}
                  onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                >
                  {CATEGORIES.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Core Narrative (Short Description)</label>
              <input 
                required
                type="text"
                placeholder="Thematic structural logic summary..."
                className="w-full bg-transparent border-b border-black/10 py-4 text-xl italic serif text-gray-600 outline-none focus:border-black transition-colors"
                value={newProduct.description}
                onChange={e => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">The Editorial Thesis (Philosophical Depth)</label>
                <button 
                  type="button"
                  onClick={handleGenerateEditorial}
                  disabled={isGenerating}
                  className="flex items-center gap-3 bg-[#FDFCFB] border border-black/10 px-5 py-2.5 mono text-[9px] font-bold tracking-widest hover:bg-black hover:text-white transition-all disabled:opacity-30 shadow-sm"
                >
                  <Cpu size={14} />
                  {isGenerating ? "SYNTHESIZING THESIS..." : "GENERATE_AI_THESIS"}
                </button>
              </div>
              <textarea 
                required
                rows={6}
                placeholder="Document the architectural intent and material poetry..."
                className="w-full bg-[#FAFAFA] border border-black/5 p-10 text-xl text-editorial italic serif leading-relaxed outline-none focus:border-black transition-all resize-none shadow-inner"
                value={newProduct.editorial}
                onChange={e => setNewProduct({...newProduct, editorial: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-4">
                  <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Material Composition</label>
                  <input 
                    required
                    type="text"
                    placeholder="e.g. Raw Linen"
                    className="w-full bg-transparent border-b border-black/10 py-4 text-[12px] mono uppercase outline-none focus:border-black"
                    value={newProduct.fabric}
                    onChange={e => setNewProduct({...newProduct, fabric: e.target.value})}
                  />
               </div>
               <div className="space-y-4">
                  <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fit Geometry</label>
                  <input 
                    required
                    type="text"
                    placeholder="e.g. Boxy Arch"
                    className="w-full bg-transparent border-b border-black/10 py-4 text-[12px] mono uppercase outline-none focus:border-black"
                    value={newProduct.fit}
                    onChange={e => setNewProduct({...newProduct, fit: e.target.value})}
                  />
               </div>
               <div className="space-y-4">
                  <label className="mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">Registry Valuation (€)</label>
                  <input 
                    required
                    type="number"
                    className="w-full bg-transparent border-b border-black/10 py-4 text-[12px] mono outline-none focus:border-black"
                    value={newProduct.price}
                    onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  />
               </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-8 mono text-xs font-bold uppercase tracking-[0.6em] hover:bg-[#2D3E50] transition-all flex items-center justify-center gap-6 shadow-2xl"
            >
              <Save size={20} />
              Commit Study to Registry Archive
            </button>
          </form>
        </div>

        {/* Studio Sidebar */}
        <div className="xl:col-span-4 space-y-16 reveal" style={{ transitionDelay: '0.3s' }}>
           <div className="bg-[#2D3E50] text-white p-12 rounded-sm shadow-xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                 <FileText size={100} />
              </div>
              <h3 className="mono text-[11px] font-bold uppercase tracking-[0.4em] relative z-10">Archive Protocol 00-24</h3>
              <p className="text-lg italic serif opacity-80 leading-relaxed relative z-10">
                Documentation is our primary act of preservation. Every entry must reflect the architectural integrity and intellectual restraint established by the RAWLINE Manifesto.
              </p>
              <div className="pt-6 flex items-center gap-4 relative z-10">
                 <div className="w-2 h-2 bg-[#8A9A8A] rounded-full animate-pulse shadow-[0_0_10px_#8A9A8A]"></div>
                 <span className="mono text-[10px] font-bold tracking-[0.3em]">ENCRYPTED_ENTRY_MODE</span>
              </div>
           </div>

           <div className="space-y-10">
              <h3 className="mono text-[11px] font-bold text-gray-300 uppercase tracking-[0.4em] border-b border-black/5 pb-6">Recent Log Entries</h3>
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-6 custom-scrollbar">
                 {products.slice(0, 10).map(p => (
                   <div key={p.id} className="flex items-center gap-8 p-6 border border-black/5 hover:border-black/20 hover:bg-white transition-all rounded-sm group">
                      <div className="w-16 h-20 bg-gray-100 flex-shrink-0 overflow-hidden shadow-sm">
                        <img src={p.images[0]} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      </div>
                      <div className="flex-grow">
                         <h4 className="text-[12px] font-bold uppercase tracking-widest mb-2 group-hover:translate-x-2 transition-transform">{p.name}</h4>
                         <div className="flex items-center gap-4">
                            <p className="mono text-[9px] text-gray-300 uppercase tracking-widest">{p.id}</p>
                            <span className="w-1 h-1 bg-black/10 rounded-full"></span>
                            <p className="mono text-[9px] text-[#8A9A8A] uppercase font-bold tracking-widest">{p.category}</p>
                         </div>
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
