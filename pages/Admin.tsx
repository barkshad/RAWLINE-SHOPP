
import React, { useState } from 'react';
import { Product, SiteContent } from '../types';
import { CATEGORIES } from '../constants';
import { generateEditorialThesis } from '../services/geminiService';
import { uploadToCloudinary, getCloudinaryUrl } from '../services/cloudinary';
import { saveProduct, removeProduct } from '../services/contentService';
import { 
  Database, Cpu, Plus, FileText, Settings, BookOpen, 
  Layers, Edit3, Trash2, MoveRight, ShieldCheck, 
  Activity, Globe, Terminal, RefreshCw, Save, LogOut,
  Image as ImageIcon, Upload, Loader2, CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdminProps {
  products: Product[];
  siteContent: SiteContent;
  onUpdateProducts: (products: Product[]) => void;
  onUpdateContent: (content: SiteContent) => void;
  onLogout: () => void;
}

type Tab = 'Identity' | 'Registry' | 'Philosophy' | 'Methodology' | 'Journal';

const FileUpload: React.FC<{ 
  onUpload: (publicId: string) => void;
  currentPublicId?: string;
  label: string;
}> = ({ onUpload, currentPublicId, label }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const publicId = await uploadToCloudinary(file);
      onUpload(publicId);
    } catch (err) {
      console.error(err);
      alert("Media Synchronize Failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">{label}</label>
      <div className="relative group">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          disabled={isUploading}
        />
        <div className={`w-full h-40 border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all ${
          isUploading ? 'border-[#8E4E35] bg-[#8E4E35]/5' : 'border-white/10 bg-white/5 hover:border-white/30'
        }`}>
          {isUploading ? (
            <>
              <Loader2 className="animate-spin text-[#8E4E35]" />
              <span className="text-[8px] mono uppercase tracking-widest">Uploading...</span>
            </>
          ) : currentPublicId ? (
            <div className="w-full h-full relative">
              <img 
                src={getCloudinaryUrl(currentPublicId, "w_400,c_fill")} 
                className="w-full h-full object-cover opacity-60" 
                alt="Preview"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload size={20} className="text-white mb-2" />
                <span className="text-[8px] mono uppercase text-white tracking-[0.2em]">Replace_Asset</span>
              </div>
            </div>
          ) : (
            <>
              <ImageIcon size={24} className="text-white/20" />
              <span className="text-[8px] mono uppercase tracking-[0.2em] text-white/40">Select_Archival_Plate</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Admin: React.FC<AdminProps> = ({ products, siteContent, onUpdateProducts, onUpdateContent, onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Identity');
  const [isGenerating, setIsGenerating] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'IDLE' | 'SAVING' | 'SAVED'>('IDLE');
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  const handleSaveAnimation = () => {
    setSaveStatus('SAVING');
    setTimeout(() => setSaveStatus('SAVED'), 800);
    setTimeout(() => setSaveStatus('IDLE'), 2000);
  };

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

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Tops',
    price: 0,
    description: '',
    editorial: '',
    fabric: '',
    fit: '',
    images: [],
  });

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.images?.length) {
      alert("Designation and at least one image plate required.");
      return;
    }
    
    setSaveStatus('SAVING');
    const p: Product = {
      ...newProduct as Product,
      id: `REF-${Date.now().toString().slice(-6)}`,
      status: 'published',
      createdAt: Date.now(),
    };

    try {
      await saveProduct(p);
      onUpdateProducts([p, ...products]);
      setNewProduct({
        name: '', category: 'Tops', price: 0, description: '', editorial: '', fabric: '', fit: '',
        images: [],
      });
      setSaveStatus('SAVED');
      setTimeout(() => setSaveStatus('IDLE'), 2000);
    } catch (err) {
      console.error(err);
      alert("Registry Commitment Failed.");
      setSaveStatus('IDLE');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm("Permanent registry retraction requested. Proceed?")) {
      setSaveStatus('SAVING');
      try {
        await removeProduct(id);
        onUpdateProducts(products.filter(p => p.id !== id));
        setSaveStatus('SAVED');
        setTimeout(() => setSaveStatus('IDLE'), 2000);
      } catch (err) {
        console.error(err);
        setSaveStatus('IDLE');
      }
    }
  };

  const updateBrand = (key: keyof SiteContent['brand'], val: string) => {
    onUpdateContent({ ...siteContent, brand: { ...siteContent.brand, [key]: val } });
    handleSaveAnimation();
  };

  const updatePhilosophy = (key: keyof SiteContent['philosophy'], val: string) => {
    onUpdateContent({ ...siteContent, philosophy: { ...siteContent.philosophy, [key]: val } });
    handleSaveAnimation();
  };

  const addProcessStep = () => {
    const newSteps = [...siteContent.process.steps, { id: Date.now().toString(), title: 'New Step', description: 'Step description...', image: '' }];
    onUpdateContent({ ...siteContent, process: { ...siteContent.process, steps: newSteps } });
    handleSaveAnimation();
  };

  const addJournalEntry = () => {
    const newEntries = [{ id: Date.now().toString(), title: 'New Studio Note', date: new Date().toLocaleDateString(), content: 'Journal entry...' }, ...siteContent.notes.entries];
    onUpdateContent({ ...siteContent, notes: { ...siteContent.notes, entries: newEntries } });
    handleSaveAnimation();
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F2EDE4] pt-32 md:pt-48 pb-20 md:pb-32 font-mono selection:bg-[#8E4E35]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16">
        
        {/* Top Status Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 md:mb-20 border border-white/5 p-4 md:p-6 bg-black/40 backdrop-blur-xl rounded-sm">
           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-[#8E4E35]/10 border border-[#8E4E35]/30 rounded-full">
                 <Terminal size={12} className="text-[#8E4E35] md:w-3.5 md:h-3.5" />
                 <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">UNIT_01_TERMINAL</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-green-500 text-[9px] md:text-[10px] font-black uppercase">
                 <Activity size={12} />
                 SYSTEM_STABLE
              </div>
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="hidden xl:block text-[9px] text-white/20 uppercase tracking-[0.4em]">
                 FIRESTORE_SYNC: ACTIVE
              </div>
              <div className={`flex items-center gap-2 text-[9px] md:text-[10px] font-black transition-all ${saveStatus === 'SAVED' ? 'text-green-500' : saveStatus === 'SAVING' ? 'text-yellow-500 animate-pulse' : 'text-white/40'}`}>
                 {saveStatus === 'SAVED' ? <CheckCircle2 size={12} /> : <RefreshCw size={12} className={saveStatus === 'SAVING' ? 'animate-spin' : ''} />}
                 {saveStatus === 'IDLE' ? 'READY' : saveStatus}
              </div>
              <button onClick={handleLogoutClick} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-red-500/50 hover:text-red-500 transition-colors">
                <LogOut size={12} />
                LOGOUT
              </button>
           </div>
        </div>

        <header className="mb-12 md:mb-24 space-y-4 md:space-y-8 reveal text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-[#8E4E35] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-[10px] md:text-[12px]">
            <ShieldCheck size={18} className="md:w-5 md:h-5" />
            MAISON_ADMIN_CMD
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-[8vw] leading-none tracking-tighter serif italic text-white/90">
            Control <span className="text-[#8E4E35]">Center.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <nav className="lg:col-span-3 lg:block reveal">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 md:gap-4 no-scrollbar">
              {(['Identity', 'Registry', 'Philosophy', 'Methodology', 'Journal'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 lg:w-full flex items-center justify-between p-4 md:p-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all border ${
                    activeTab === tab 
                    ? 'bg-[#8E4E35] text-white border-[#8E4E35] shadow-lg lg:translate-x-4' 
                    : 'bg-white/5 text-white/30 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    {tab === 'Identity' && <Globe size={14} />}
                    {tab === 'Registry' && <Layers size={14} />}
                    {tab === 'Philosophy' && <BookOpen size={14} />}
                    {tab === 'Methodology' && <Edit3 size={14} />}
                    {tab === 'Journal' && <FileText size={14} />}
                    {tab}
                  </div>
                  <MoveRight size={14} className={`hidden lg:block ${activeTab === tab ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-9 bg-[#1A1816] border border-white/10 p-6 md:p-12 lg:p-16 shadow-2xl reveal">
            
            {activeTab === 'Identity' && (
              <div className="space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="border-b border-white/5 pb-8 md:pb-12 flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl md:text-4xl serif italic text-white/90">Global Identity</h2>
                      <p className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest mt-2">Manage core identifiers.</p>
                   </div>
                   <Settings size={20} className="text-white/10 md:w-6 md:h-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Maison Name</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-xl md:text-2xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.name} onChange={(e) => updateBrand('name', e.target.value)} />
                   </div>
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Sub-Brand Label</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-xl md:text-2xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.subBrand} onChange={(e) => updateBrand('subBrand', e.target.value)} />
                   </div>
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Location</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-xl md:text-2xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.location} onChange={(e) => updateBrand('location', e.target.value)} />
                   </div>
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Hero Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-xl md:text-2xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.heroTitle} onChange={(e) => updateBrand('heroTitle', e.target.value)} />
                   </div>
                </div>
                <div className="space-y-4">
                    <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Manifesto Quote</label>
                    <textarea rows={3} className="w-full bg-black/40 border border-white/5 p-6 md:p-8 text-lg md:text-xl serif italic outline-none focus:border-[#8E4E35] transition-colors resize-none text-[#8E4E35] leading-relaxed" 
                      value={siteContent.brand.manifestoQuote} onChange={(e) => updateBrand('manifestoQuote', e.target.value)} />
                </div>
              </div>
            )}

            {activeTab === 'Registry' && (
              <div className="space-y-16 md:space-y-24 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="border-b border-white/5 pb-8 md:pb-12 flex justify-between items-end">
                   <div>
                     <h2 className="text-3xl md:text-4xl serif italic text-white/90">Registry Index</h2>
                     <p className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest mt-2">Identification logs.</p>
                   </div>
                   <Layers size={20} className="text-white/10 md:w-6 md:h-6" />
                </div>

                <div className="bg-black/30 border border-white/5 p-6 md:p-10 space-y-10 shadow-inner">
                   <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <Plus size={14} className="text-[#8E4E35]" />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">RECORD_NEW_FINDING</span>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="space-y-3 md:space-y-4">
                         <label className="text-[9px] md:text-[10px] font-black uppercase text-white/20 tracking-widest">Designation</label>
                         <input className="w-full bg-white/5 border-b border-white/10 p-2 md:p-3 text-base md:text-lg font-bold outline-none focus:border-[#8E4E35]" 
                           value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} placeholder="e.g., Gikomba Shell" />
                      </div>
                      <div className="space-y-3 md:space-y-4">
                         <label className="text-[9px] md:text-[10px] font-black uppercase text-white/20 tracking-widest">Classification</label>
                         <select className="w-full bg-white/5 border-b border-white/10 p-2 md:p-3 text-[9px] md:text-[10px] uppercase font-black outline-none"
                           value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                           {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c} className="bg-[#121212]">{c}</option>)}
                         </select>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <FileUpload 
                        label="Hero_Plate (Cloudinary)" 
                        onUpload={(id) => setNewProduct(prev => ({ ...prev, images: [id, ...(prev.images?.slice(1) || [])] }))}
                        currentPublicId={newProduct.images?.[0]}
                      />
                      <FileUpload 
                        label="Alt_Plate (Cloudinary)" 
                        onUpload={(id) => setNewProduct(prev => ({ ...prev, images: [prev.images?.[0] || '', id] }))}
                        currentPublicId={newProduct.images?.[1]}
                      />
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <button onClick={handleGenerateEditorial} disabled={isGenerating} className="flex-grow flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 md:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#8E4E35] transition-all disabled:opacity-20 group">
                        <Cpu size={14} className="group-hover:rotate-180 transition-transform duration-700" /> {isGenerating ? 'ANALYZING...' : 'AI_SYNTHESIS'}
                      </button>
                      <button onClick={handleAddProduct} className="flex-grow flex items-center justify-center gap-3 bg-[#8E4E35] text-white py-4 md:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        <Save size={14} /> COMMIT_TO_FIRESTORE
                      </button>
                   </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                   <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/10">Active Index Entries ({products.length})</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {products.map(p => (
                        <div key={p.id} className="flex items-center justify-between p-4 md:p-6 bg-black/20 border border-white/5 hover:border-[#8E4E35]/40 transition-all group rounded-sm">
                           <div className="flex items-center gap-4 md:gap-8">
                              <div className="w-12 h-16 md:w-16 md:h-20 bg-black overflow-hidden border border-white/10 flex-shrink-0">
                                 <img 
                                  src={getCloudinaryUrl(p.images[0], "w_150,c_fill")} 
                                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all" 
                                 />
                              </div>
                              <div className="min-w-0">
                                 <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-widest truncate">{p.name}</h4>
                                 <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/20 mt-1">{p.id} • {p.category}</p>
                              </div>
                           </div>
                           <button onClick={() => handleDeleteProduct(p.id)} className="p-3 md:p-4 text-white/10 hover:text-red-500 transition-colors">
                              <Trash2 size={14} />
                           </button>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
