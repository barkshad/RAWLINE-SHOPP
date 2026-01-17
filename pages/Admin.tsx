
import React, { useState } from 'react';
import { Product, SiteContent, ProcessStep, Note } from '../types';
import { CATEGORIES } from '../constants';
import { generateEditorialThesis } from '../services/geminiService';
import { uploadToCloudinary, getCloudinaryUrl } from '../services/cloudinary';
import { saveProduct, removeProduct } from '../services/contentService';
import { 
  Database, Cpu, Plus, FileText, Settings, BookOpen, 
  Layers, Edit3, Trash2, MoveRight, ShieldCheck, 
  Activity, Globe, Terminal, RefreshCw, Save, LogOut,
  Image as ImageIcon, Upload, Loader2, CheckCircle2, X
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

  // --- Content Updates Helpers ---

  const updateBrand = (key: keyof SiteContent['brand'], val: string) => {
    onUpdateContent({ ...siteContent, brand: { ...siteContent.brand, [key]: val } });
    handleSaveAnimation();
  };

  const updatePhilosophy = (key: keyof SiteContent['philosophy'], val: string) => {
    onUpdateContent({ ...siteContent, philosophy: { ...siteContent.philosophy, [key]: val } });
    handleSaveAnimation();
  };

  // Process / Methodology Helpers
  const updateProcess = (key: keyof SiteContent['process'], val: any) => {
    onUpdateContent({ ...siteContent, process: { ...siteContent.process, [key]: val } });
    handleSaveAnimation();
  };

  const updateStep = (index: number, key: keyof ProcessStep, val: string) => {
    const newSteps = [...siteContent.process.steps];
    newSteps[index] = { ...newSteps[index], [key]: val };
    updateProcess('steps', newSteps);
  };

  const addProcessStep = () => {
    const newSteps = [...siteContent.process.steps, { 
      id: Date.now().toString(), 
      title: 'New Method Step', 
      description: 'Describe the archival process...', 
      image: '' 
    }];
    updateProcess('steps', newSteps);
  };

  const removeProcessStep = (index: number) => {
    const newSteps = siteContent.process.steps.filter((_, i) => i !== index);
    updateProcess('steps', newSteps);
  };

  // Notes / Journal Helpers
  const updateNotes = (key: keyof SiteContent['notes'], val: any) => {
    onUpdateContent({ ...siteContent, notes: { ...siteContent.notes, [key]: val } });
    handleSaveAnimation();
  };

  const updateNoteEntry = (index: number, key: keyof Note, val: string) => {
    const newEntries = [...siteContent.notes.entries];
    newEntries[index] = { ...newEntries[index], [key]: val };
    updateNotes('entries', newEntries);
  };

  const addNoteEntry = () => {
    const newEntries = [{ 
      id: Date.now().toString(), 
      title: 'New Studio Reflection', 
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase(), 
      content: 'Record thoughts here...' 
    }, ...siteContent.notes.entries];
    updateNotes('entries', newEntries);
  };

  const removeNoteEntry = (index: number) => {
    const newEntries = siteContent.notes.entries.filter((_, i) => i !== index);
    updateNotes('entries', newEntries);
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
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Hero Subtitle</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-lg md:text-xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.heroSubtitle} onChange={(e) => updateBrand('heroSubtitle', e.target.value)} />
                   </div>
                   <div className="space-y-3 md:space-y-4">
                      <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Hero Tagline</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 md:p-4 text-lg md:text-xl font-light outline-none focus:border-[#8E4E35] transition-colors" 
                        value={siteContent.brand.heroTagline} onChange={(e) => updateBrand('heroTagline', e.target.value)} />
                   </div>
                </div>
                <div className="space-y-4">
                    <label className="text-[9px] md:text-[10px] uppercase font-black text-white/30 tracking-widest">Brand Description</label>
                    <textarea rows={4} className="w-full bg-black/40 border border-white/5 p-6 md:p-8 text-lg serif italic outline-none focus:border-[#8E4E35] transition-colors resize-none text-white/80 leading-relaxed" 
                      value={siteContent.brand.description} onChange={(e) => updateBrand('description', e.target.value)} />
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

            {activeTab === 'Philosophy' && (
              <div className="space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="border-b border-white/5 pb-8 md:pb-12 flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl md:text-4xl serif italic text-white/90">Maison Philosophy</h2>
                      <p className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest mt-2">Core values and manifesto.</p>
                   </div>
                   <BookOpen size={20} className="text-white/10 md:w-6 md:h-6" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Page Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg font-light outline-none focus:border-[#8E4E35]" 
                        value={siteContent.philosophy.title} onChange={(e) => updatePhilosophy('title', e.target.value)} />
                  </div>
                  <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Document ID</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg font-light outline-none focus:border-[#8E4E35]" 
                        value={siteContent.philosophy.documentId} onChange={(e) => updatePhilosophy('documentId', e.target.value)} />
                  </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Main Manifesto Paragraph</label>
                    <textarea rows={5} className="w-full bg-black/40 border border-white/5 p-6 text-xl serif italic outline-none focus:border-[#8E4E35] resize-none text-white/90 leading-relaxed" 
                      value={siteContent.philosophy.mainParagraph} onChange={(e) => updatePhilosophy('mainParagraph', e.target.value)} />
                </div>

                <div className="grid grid-cols-1 gap-12 pt-8 border-t border-white/5">
                   <div className="space-y-4">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Section 1 Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-xl serif italic outline-none focus:border-[#8E4E35]" 
                        value={siteContent.philosophy.sec1Title} onChange={(e) => updatePhilosophy('sec1Title', e.target.value)} />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                          <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Section 1 Content</label>
                          <textarea rows={6} className="w-full bg-black/20 border border-white/5 p-4 text-sm leading-relaxed outline-none focus:border-[#8E4E35] resize-none" 
                            value={siteContent.philosophy.sec1Content} onChange={(e) => updatePhilosophy('sec1Content', e.target.value)} />
                      </div>
                      <div className="space-y-4">
                          <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Section 2 Content</label>
                          <textarea rows={6} className="w-full bg-black/20 border border-white/5 p-4 text-sm leading-relaxed outline-none focus:border-[#8E4E35] resize-none" 
                            value={siteContent.philosophy.sec2Content} onChange={(e) => updatePhilosophy('sec2Content', e.target.value)} />
                      </div>
                   </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/5">
                    <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Highlight Quote</label>
                    <textarea rows={3} className="w-full bg-black/40 border border-white/5 p-6 text-2xl serif italic outline-none focus:border-[#8E4E35] resize-none text-[#8E4E35]" 
                      value={siteContent.philosophy.quote} onChange={(e) => updatePhilosophy('quote', e.target.value)} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Footer Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.philosophy.footerTitle} onChange={(e) => updatePhilosophy('footerTitle', e.target.value)} />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Footer Content</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.philosophy.footerContent} onChange={(e) => updatePhilosophy('footerContent', e.target.value)} />
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'Methodology' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="border-b border-white/5 pb-8 flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl md:text-4xl serif italic text-white/90">Methodology & Process</h2>
                      <p className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest mt-2">Restoration workflow documentation.</p>
                   </div>
                   <Edit3 size={20} className="text-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Section Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.process.title} onChange={(e) => updateProcess('title', e.target.value)} />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Document ID</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.process.documentId} onChange={(e) => updateProcess('documentId', e.target.value)} />
                   </div>
                </div>

                <div className="space-y-8">
                  {siteContent.process.steps.map((step, index) => (
                    <div key={step.id} className="bg-black/20 border border-white/5 p-6 md:p-8 rounded-sm group relative">
                       <button onClick={() => removeProcessStep(index)} className="absolute top-4 right-4 text-white/10 hover:text-red-500 transition-colors">
                          <X size={16} />
                       </button>
                       <span className="absolute top-4 left-6 text-[100px] leading-none font-black text-white/[0.02] pointer-events-none select-none -translate-x-4 -translate-y-4">
                         0{index + 1}
                       </span>
                       
                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                          <div className="lg:col-span-4">
                             <FileUpload 
                               label="Step_Visualization" 
                               currentPublicId={step.image}
                               onUpload={(id) => updateStep(index, 'image', id)}
                             />
                          </div>
                          <div className="lg:col-span-8 space-y-6">
                             <div className="space-y-3">
                                <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Step Title</label>
                                <input className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold outline-none focus:border-[#8E4E35]" 
                                  value={step.title} onChange={(e) => updateStep(index, 'title', e.target.value)} />
                             </div>
                             <div className="space-y-3">
                                <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Description</label>
                                <textarea rows={4} className="w-full bg-transparent border border-white/5 p-4 text-lg serif italic outline-none focus:border-[#8E4E35] resize-none" 
                                  value={step.description} onChange={(e) => updateStep(index, 'description', e.target.value)} />
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
                  
                  <button onClick={addProcessStep} className="w-full py-8 border border-dashed border-white/10 text-white/30 hover:text-[#8E4E35] hover:border-[#8E4E35] hover:bg-[#8E4E35]/5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase font-black tracking-widest">
                    <Plus size={16} /> Add Method Step
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Journal' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
                 <div className="border-b border-white/5 pb-8 flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl md:text-4xl serif italic text-white/90">Journal & Notes</h2>
                      <p className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest mt-2">Studio reflections and logs.</p>
                   </div>
                   <FileText size={20} className="text-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Section Title</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.notes.title} onChange={(e) => updateNotes('title', e.target.value)} />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Document ID</label>
                      <input className="w-full bg-black/20 border-b border-white/10 p-3 text-lg outline-none focus:border-[#8E4E35]" 
                        value={siteContent.notes.documentId} onChange={(e) => updateNotes('documentId', e.target.value)} />
                   </div>
                </div>

                <div className="space-y-8">
                   {siteContent.notes.entries.map((note, index) => (
                      <div key={note.id} className="bg-black/20 border border-white/5 p-6 md:p-8 space-y-6 relative group">
                         <button onClick={() => removeNoteEntry(index)} className="absolute top-4 right-4 text-white/10 hover:text-red-500 transition-colors">
                            <X size={16} />
                         </button>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Entry Title</label>
                                <input className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-light serif italic outline-none focus:border-[#8E4E35]" 
                                  value={note.title} onChange={(e) => updateNoteEntry(index, 'title', e.target.value)} />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Date</label>
                                <input className="w-full bg-transparent border-b border-white/10 p-2 text-sm font-black mono uppercase outline-none focus:border-[#8E4E35]" 
                                  value={note.date} onChange={(e) => updateNoteEntry(index, 'date', e.target.value)} />
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[9px] uppercase font-black text-white/30 tracking-widest">Content</label>
                            <textarea rows={4} className="w-full bg-transparent border border-white/5 p-4 text-lg serif font-light text-white/80 outline-none focus:border-[#8E4E35] resize-none" 
                               value={note.content} onChange={(e) => updateNoteEntry(index, 'content', e.target.value)} />
                         </div>
                      </div>
                   ))}
                   
                   <button onClick={addNoteEntry} className="w-full py-8 border border-dashed border-white/10 text-white/30 hover:text-[#8E4E35] hover:border-[#8E4E35] hover:bg-[#8E4E35]/5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase font-black tracking-widest">
                    <Plus size={16} /> New Journal Entry
                  </button>
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
