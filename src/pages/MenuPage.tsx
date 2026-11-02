import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flame, Smile, GlassWater, Search, SlidersHorizontal, Plus } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/menuData';
import { formatCurrency } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { openProductModal, quickAdd } = useCart();

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
    <div className="min-h-screen bg-[#0d0f12] text-gray-100 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Home Burgers Style Header) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Carta Oficial • Minca, Santa Marta</span>
          </div>
          <h1 
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Menú <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Al Carbón</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Todas nuestras hamburguesas son asadas sobre brasas vivas y se acompañan con <strong className="text-amber-400 font-bold">papitas criollas doradas</strong>. Selecciona tus favoritas y envía tu orden directa a WhatsApp.
          </p>

          {/* Sello Papitas Criollas */}
          <div className="pt-1">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold">
              🥔 ★ Garantía Mahelo's: Papitas criollas doradas incluidas con cada hamburguesa ★
            </span>
          </div>
        </div>

        {/* Sticky Category Bar + Search */}
        <div className="sticky top-20 z-30 bg-[#0d0f12]/95 backdrop-blur-md py-4 border-b border-orange-500/20 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category tabs */}
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
        </div>

        {/* Counter Info */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-400 border-b border-orange-500/15 pb-3">
          <span>
            Mostrando <strong className="text-amber-400">{filteredProducts.length}</strong> opciones de la carta
          </span>
          <span className="hidden sm:inline text-amber-300 font-semibold">
            🛵 Envíos a hostales de Minca & servicio en local
          </span>
        </div>

        {/* Products Grid (Home Burgers Clean Style) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-[#151210] rounded-3xl overflow-hidden border border-orange-500/15 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div 
                    className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151210] via-transparent to-black/30" />

                    {product.badge && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-black text-xs font-black shadow-lg flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-black" />
                        <span>{product.badge}</span>
                      </div>
                    )}

                    {product.weight && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-extrabold flex items-center gap-1">
                        <span>⚖️</span>
                        <span>{product.weight}</span>
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-orange-500/30 text-amber-400 font-black text-sm sm:text-base shadow-lg">
                      {formatCurrency(product.price)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="cursor-pointer" onClick={() => openProductModal(product)}>
                      <h3 
                        className="text-xl font-black text-white group-hover:text-amber-400 transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {product.name}
                      </h3>

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
                    onClick={() => openProductModal(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                    <span>{product.availableExtras ? 'Personalizar' : 'Ver Detalles'}</span>
                  </button>

                  <button
                    onClick={() => quickAdd(product)}
                    aria-label={`Añadir ${product.name} al pedido`}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                    title="Añadir directo"
                  >
                    <Plus className="w-5 h-5 stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
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
    </div>
  );
};
