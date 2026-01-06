
import React from 'react';
import { Product } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: Product; quantity: number }[];
  onRemove: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-[#FAF9F6] shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
        <div className="p-8 flex justify-between items-center border-b border-black/5">
          <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold">Acquisition Bag</h2>
          <button onClick={onClose} className="text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">Close</button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30">
              <p className="serif italic text-xl">The bag is empty.</p>
              <p className="text-[10px] uppercase tracking-widest">No studies selected</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex space-x-6">
                <div className="w-24 aspect-[3/4] bg-gray-100 flex-shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-[13px] uppercase tracking-wider font-medium">{item.product.name}</h3>
                    <p className="text-[12px] text-gray-400">€{item.product.price}</p>
                  </div>
                  <p className="text-[11px] text-gray-400 italic serif">{item.product.category}</p>
                  <div className="pt-2 flex justify-between items-center">
                    <p className="text-[11px] text-gray-500">Qty: {item.quantity}</p>
                    <button 
                      onClick={() => onRemove(item.product.id)}
                      className="text-[10px] uppercase tracking-widest text-red-300 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 border-t border-black/5 bg-white space-y-6">
          <div className="flex justify-between items-end">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Total Value</p>
            <p className="text-xl font-light tracking-tighter">€{total}</p>
          </div>
          <button 
            disabled={items.length === 0}
            className={`w-full py-6 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${items.length > 0 ? 'bg-black text-white hover:opacity-80' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
          >
            Proceed to Final Review
          </button>
          <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest leading-relaxed">
            By proceeding, you acknowledge the unique nature of RAWLINE garments and our commitment to slow logistics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
