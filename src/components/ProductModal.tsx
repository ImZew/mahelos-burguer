import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Check, Flame } from 'lucide-react';
import type { Product, ExtraOption } from '../types';
import { formatCurrency } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, extras: ExtraOption[], notes: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedExtras([]);
      setSpecialNotes('');
      setJustAdded(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const toggleExtra = (extra: ExtraOption) => {
    if (selectedExtras.some((item) => item.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((item) => item.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  const totalPrice = (product.price + extrasTotal) * quantity;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedExtras, specialNotes);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-[#161210] border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-gray-100 max-h-[90vh] flex flex-col"
        >
          {/* Header image with close button */}
          <div className="relative aspect-[16/9] w-full bg-zinc-900 shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-transparent to-black/40" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-gray-300 hover:text-white transition-all cursor-pointer backdrop-blur-md border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {product.badge && (
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-black text-xs font-black shadow-lg flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-black" />
                <span>{product.badge}</span>
              </div>
            )}
          </div>

          {/* Scrollable content */}
          <div className="p-6 overflow-y-auto space-y-5 flex-1">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {product.name}
                  </h2>
                  {product.weight && (
                    <span className="text-xs font-bold text-orange-400">
                      Peso: {product.weight}
                    </span>
                  )}
                </div>
                <span className="text-2xl font-black text-amber-400 shrink-0">
                  {formatCurrency(product.price)}
                </span>
              </div>

              {/* Papitas Criollas Banner */}
              {product.includesCriollas && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <span className="text-base">🥔</span>
                  <span>Incluye porción de papitas criollas doradas al estilo Mahelo's</span>
                </div>
              )}

              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ingredients list */}
            {product.ingredients && (
              <div>
                <h4 className="text-xs font-extrabold text-orange-400 uppercase tracking-wider mb-2">
                  Ingredientes & Preparación al Carbón:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Extras Section (if available) */}
            {product.availableExtras && product.availableExtras.length > 0 && (
              <div className="pt-3 border-t border-orange-500/20">
                <h4 className="text-sm font-extrabold text-white flex items-center gap-2 mb-3">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>¿Deseas adiciones a la brasa?</span>
                </h4>
                <div className="space-y-2">
                  {product.availableExtras.map((extra) => {
                    const isSelected = selectedExtras.some((e) => e.id === extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra)}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                            : 'bg-white/5 border-white/5 hover:border-white/20 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs font-bold ${
                              isSelected
                                ? 'bg-amber-500 border-amber-500 text-black'
                                : 'border-gray-500 bg-transparent'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-semibold">{extra.name}</span>
                        </div>
                        <span className="text-xs font-black text-amber-400">
                          +{formatCurrency(extra.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special notes input */}
            <div className="pt-2 border-t border-orange-500/20">
              <label htmlFor="notes" className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-2">
                Instrucciones para cocina (opcional):
              </label>
              <textarea
                id="notes"
                rows={2}
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="Ejemplo: Término medio, sin cebolla, salsa aparte..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Footer with quantity and add to cart button */}
          <div className="p-5 bg-black/60 border-t border-orange-500/20 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            {/* Quantity controls */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-3 bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-black text-base text-white">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit button */}
            <button
              onClick={handleAdd}
              disabled={justAdded}
              className={`flex-1 w-full py-3.5 px-6 rounded-xl font-black flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer ${
                justAdded
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-black shadow-orange-500/25'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>¡Añadido a tu Pedido!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Añadir al Pedido • {formatCurrency(totalPrice)}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
