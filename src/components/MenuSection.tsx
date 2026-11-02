import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flame, Smile, GlassWater, Search } from 'lucide-react';
import type { Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/menuData';
import { ProductCard } from './ProductCard';

interface MenuSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectProduct,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'burgers': return <Flame className="w-4 h-4" />;
      case 'infantil': return <Smile className="w-4 h-4" />;
      case 'bebidas': return <GlassWater className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.ingredients && product.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 relative bg-[#0d0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Carta Oficial • Hecho con amor, al carbón</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nuestro Menú <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Al Carbón</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            El auténtico sabor a la brasa en Minca. Selecciona tus hamburguesas favoritas, personalízalas con adiciones y envía tu orden directa a nuestro WhatsApp.
          </p>

          {/* Special Papitas Criollas Announcement */}
          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold">
              🥔 ★ Recuerda: Todas nuestras hamburguesas vienen acompañadas de papitas criollas doradas ★
            </span>
          </div>
        </div>

        {/* Categories Tab Selector & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black border-amber-400 shadow-lg shadow-orange-500/25'
                      : 'bg-[#151210] text-gray-400 hover:text-white border-white/10 hover:border-orange-500/30'
                  }`}
                >
                  <span className={isActive ? 'text-black' : 'text-orange-400'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en la carta..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#151210] border border-orange-500/20 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Current Active Category Subtitle */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-400 border-b border-orange-500/20 pb-3">
          <span>
            Mostrando <strong className="text-amber-400">{filteredProducts.length}</strong> opciones de la carta oficial
          </span>
          <span className="hidden sm:inline text-amber-300 font-semibold">
            🛵 Domicilios en hostales de Minca & en el local
          </span>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if search returns nothing */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#161210] rounded-3xl border border-orange-500/20 p-8 max-w-md mx-auto">
            <span className="text-4xl">🍔🔍</span>
            <h3 className="mt-4 text-lg font-bold text-white">No encontramos productos</h3>
            <p className="mt-1 text-xs text-gray-400">
              No hay ítems que coincidan con &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-all cursor-pointer"
            >
              Ver toda la carta
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
