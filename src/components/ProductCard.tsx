import React from 'react';
import { motion } from 'framer-motion';
import { Plus, SlidersHorizontal, Flame } from 'lucide-react';
import type { Product } from '../types';
import { formatCurrency } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-[#151210] rounded-3xl overflow-hidden border border-orange-500/15 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-500/10"
    >
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onSelect(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151210] via-transparent to-black/30" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-black text-xs font-black shadow-lg flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-black" />
              <span>{product.badge}</span>
            </div>
          )}

          {/* Weight Tag */}
          {product.weight && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-extrabold flex items-center gap-1">
              <span>⚖️</span>
              <span>{product.weight}</span>
            </div>
          )}

          {/* Price Tag Pill */}
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-orange-500/30 text-amber-400 font-black text-sm sm:text-base shadow-lg">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="cursor-pointer" onClick={() => onSelect(product)}>
            <div className="flex items-baseline justify-between gap-2">
              <h3 
                className="text-xl font-black text-white group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.name}
              </h3>
            </div>

            {/* Papitas Criollas banner if included */}
            {product.includesCriollas && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <span>🥔</span>
                <span>Acompañada de papitas criollas</span>
              </div>
            )}

            <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Ingredients chips */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5 font-medium"
                >
                  {ingredient}
                </span>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-[11px] px-1.5 py-0.5 text-amber-400 font-semibold">
                  +{product.ingredients.length - 3} más
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action footer */}
      <div className="p-5 pt-0 mt-2 flex items-center gap-2">
        <button
          onClick={() => onSelect(product)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
          <span>{product.availableExtras ? 'Personalizar' : 'Ver Detalles'}</span>
        </button>

        <button
          onClick={() => onQuickAdd(product)}
          aria-label={`Añadir ${product.name} al carrito`}
          className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          title="Añadir directo"
        >
          <Plus className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </motion.div>
  );
};
