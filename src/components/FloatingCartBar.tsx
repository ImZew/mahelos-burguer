import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types';
import { calculateCartTotal, formatCurrency } from '../utils/whatsapp';

interface FloatingCartBarProps {
  items: CartItem[];
  onOpenCart: () => void;
}

export const FloatingCartBar: React.FC<FloatingCartBarProps> = ({ items, onOpenCart }) => {
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = calculateCartTotal(items);

  return (
    <AnimatePresence>
      {totalCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-40"
        >
          <div
            onClick={onOpenCart}
            className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-black shadow-2xl shadow-amber-500/30 flex items-center justify-between cursor-pointer active:scale-98 transition-transform border border-amber-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center font-black text-sm">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="block text-xs font-black uppercase tracking-wider">
                  {totalCount} {totalCount === 1 ? 'producto' : 'productos'} en tu pedido
                </span>
                <span className="text-base font-black leading-none">
                  {formatCurrency(totalAmount)} COP
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm bg-black text-white px-3.5 py-2 rounded-xl">
              <span>Pedir</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
