import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, Star, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, PRODUCTS } from '../data/menuData';
import { BrandLogo } from '../components/BrandLogo';
import { InstagramFeed } from '../components/InstagramFeed';
import { formatCurrency } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { quickAdd, openProductModal } = useCart();
  const featuredBurgers = PRODUCTS.filter((p) => p.category === 'burgers').slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Editorial Hero Section (Inspired by Home Burgers Clean Aesthetic) */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 border-b border-orange-500/20 bg-gradient-to-b from-[#140e0b] via-[#0d0f12] to-[#0d0f12]">
        {/* Glow ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-red-600/20 via-orange-500/15 to-amber-500/10 blur-[140px] -z-10 pointer-events-none rounded-full" />
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-600/15 blur-[110px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Brand Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Top Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-orange-500/40 text-amber-300 text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-lg shadow-orange-500/10">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>★ EL AUTÉNTICO SABOR AL CARBÓN ★</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-amber-400 tracking-wider uppercase">
                  {RESTAURANT_INFO.name}
                </h2>
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  HAMBURGUESAS <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    AL CARBÓN
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Carne 100% de res y pollo asadas sobre brasas vivas, pan de mantequilla dorado, queso Colby Jack derretido y <strong className="text-amber-400 font-bold">siempre acompañadas de nuestras papitas criollas doradas</strong>. Descubre el sabor que conquistó la montaña de Minca.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Flame className="w-5 h-5 fill-black" />
                  <span>Explorar Menú Completo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("¡Hola Mahelo's Burguer! Deseo pedir una hamburguesa al carbón.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-center gap-2.5 border border-white/10 transition-all hover:border-emerald-500/50"
                >
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>

              {/* Micro badges from PDF menu */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-orange-500/20 text-left">
                <div className="p-3 rounded-2xl bg-black/40 border border-orange-500/20 flex flex-col justify-center">
                  <span className="text-xl mb-1">🥔</span>
                  <h4 className="text-xs sm:text-sm font-black text-white">Papitas Criollas</h4>
                  <p className="text-[11px] text-amber-400/90 font-medium">Siempre incluidas</p>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-orange-500/20 flex flex-col justify-center">
                  <span className="text-xl mb-1">🧀</span>
                  <h4 className="text-xs sm:text-sm font-black text-white">Queso Colby Jack</h4>
                  <p className="text-[11px] text-amber-400/90 font-medium">& Mozzarella fundido</p>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-orange-500/20 flex flex-col justify-center">
                  <span className="text-xl mb-1">❤️</span>
                  <h4 className="text-xs sm:text-sm font-black text-white">Hecho con Amor</h4>
                  <p className="text-[11px] text-amber-400/90 font-medium">Al carbón en Minca</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual with Brand Logo badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-orange-600/20 border-2 border-orange-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
                  alt="Clásica de Res al Carbón - Mahelo's Burguer Minca"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <BrandLogo size="md" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#110e0c]/90 backdrop-blur-md border border-orange-500/30 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-amber-400 font-extrabold tracking-wider uppercase flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        1. Clásica de Res (180g)
                      </span>
                      <h3 className="text-lg font-black text-white">Colby Jack + Tocineta</h3>
                      <p className="text-xs text-amber-200/80">★ Acompañada de papitas criollas doradas</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-amber-400">$32.000</span>
                      <span className="block text-[10px] text-gray-400">COP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:-right-6 p-3.5 rounded-2xl bg-[#18100c]/95 border border-orange-500/40 shadow-2xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-black text-lg">
                  <Star className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Sabor 100% al Carbón</p>
                  <p className="text-[11px] text-orange-400 font-semibold">Minca, Santa Marta</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Craft (Home Burgers Style Minimalist Value Proposition) */}
      <section className="py-16 sm:py-20 bg-[#0a0c0e] border-b border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">Nuestra Filosofía</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              ¿Por qué las Hamburguesas de Mahelo's son Únicas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#14110f] border border-orange-500/20 space-y-4 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-2xl font-black">
                🔥
              </div>
              <h3 className="text-xl font-black text-white">Fuego Vivo & Carbón Real</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                No usamos planchas eléctricas ni gas. Cada hamburguesa es asada directamente sobre carbón vegetal de leña, sellando los jugos y logrando un ahumado inconfundible.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#14110f] border border-orange-500/20 space-y-4 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl font-black">
                🥔
              </div>
              <h3 className="text-xl font-black text-white">Siempre con Papitas Criollas</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Olvídate de las papas congeladas industriales. Cada hamburguesa de la casa viene servida con papitas criollas auténticas, doradas al instante con su piel y toque de sal marina.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#14110f] border border-orange-500/20 space-y-4 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center text-2xl font-black">
                🧀
              </div>
              <h3 className="text-xl font-black text-white">Pan de Mantequilla & Colby Jack</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pan suave horneado a diario, sellado en mantequilla en la parrilla, combinado con queso Colby Jack fundido y tocineta ahumada ultra crocante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Preview (Home Burgers Clean Showcase) */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] border-b border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">Lo más pedido</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Favoritas de la Montaña
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-black text-amber-400 hover:text-white transition-colors group"
            >
              <span>Ver Menú Completo (14 Opciones)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBurgers.map((burger) => (
              <div
                key={burger.id}
                className="group bg-[#151210] rounded-3xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => openProductModal(burger)}
                  >
                    <img
                      src={burger.image}
                      alt={burger.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151210] via-transparent to-black/30" />

                    {burger.badge && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-black text-xs font-black shadow-lg">
                        {burger.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md text-amber-400 font-black text-sm">
                      {formatCurrency(burger.price)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 
                      className="text-xl font-black text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      onClick={() => openProductModal(burger)}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {burger.name}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                      <span>🥔</span>
                      <span>Incluye papitas criollas</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-2">
                      {burger.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => openProductModal(burger)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold transition-all cursor-pointer border border-white/10"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={() => quickAdd(burger)}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs hover:from-amber-400 hover:to-orange-400 transition-all cursor-pointer"
                  >
                    + Pedir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 hover:border-amber-500/40 transition-all"
            >
              <span>Ver Menú con Sándwiches, Mini Perros & Bebidas de 16 oz</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Story Teaser Section */}
      <section className="py-16 sm:py-20 bg-[#0f0b09] border-b border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">Nuestra Historia</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Nacidos en el Paraíso Verde de Minca
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Minca es conocida por su clima fresco, cascadas y café orgánico. En medio de esta mágica atmósfera de la Sierra Nevada de Santa Marta, creamos <strong>Mahelo's Burguer</strong> con un propósito claro: hacer las hamburguesas al carbón más honestas, generosas y memorables de Colombia.
              </p>
              <div className="pt-2">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center gap-2 text-sm font-black text-amber-400 hover:text-white transition-colors"
                >
                  <span>Conoce más sobre nuestra historia & brasas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl relative aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
                alt="Hamburguesas al carbón en Minca"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-amber-200 font-bold">
                📍 Minca, Sierra Nevada de Santa Marta • Colombia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Community Lookbook */}
      <InstagramFeed />

      {/* Delivery / Location Teaser */}
      <section className="py-14 bg-[#0a0c0e] border-t border-orange-500/15 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 tracking-wider uppercase flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>¿Estás en Minca?</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Llevamos tu pedido a tu hostal, cabaña o ven a nuestro local
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Abiertos de Lunes a Domingo de 12:00 PM a 10:30 PM. Entregas rápidas coordinadas vía WhatsApp.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/ubicacion"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/15 transition-all"
            >
              Ver Ubicación & Horarios
            </Link>
            <Link
              to="/menu"
              className="px-6 py-3 rounded-xl bg-amber-500 text-black font-black text-xs hover:bg-amber-400 transition-all"
            >
              Pedir Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
