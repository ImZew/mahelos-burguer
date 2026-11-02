import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-orange-500/20 bg-gradient-to-b from-[#120b08] via-[#0d0f12] to-[#0d0f12]">
      {/* Background ambient charcoal embers lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-red-600/20 via-orange-500/15 to-amber-500/10 blur-[140px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-600/15 blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-600/15 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Identity, Slogans & Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Ribbon from PDF: EL AUTÉNTICO SABOR AL CARBÓN */}
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

            {/* Description highlighting exact attributes from the menu */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Carne de res y pollo seleccionadas, asadas 100% sobre brasas ardientes al carbón. Servidas en pan de mantequilla, queso Colby Jack fundido, tocineta crocante y <strong className="text-amber-400 font-bold">siempre acompañadas de nuestras famosas papitas criollas doradas</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Flame className="w-5 h-5 fill-black" />
                <span>Ver Menú al Carbón</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('¡Hola Mahelo\'s Burguer! Deseo pedir una hamburguesa al carbón.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-center gap-2.5 border border-white/10 transition-all hover:border-emerald-500/50"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Pedir por WhatsApp</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 text-pink-300 font-bold text-sm flex items-center justify-center gap-2 border border-pink-500/30 transition-all"
              >
                <span>📸 {RESTAURANT_INFO.instagramUser}</span>
              </a>
            </div>

            {/* Micro badges from the PDF menu */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-orange-500/20 text-left">
              <div className="p-3 rounded-2xl bg-black/40 border border-orange-500/20 flex flex-col justify-center">
                <span className="text-xl mb-1">🥔</span>
                <h4 className="text-xs sm:text-sm font-black text-white">Papitas Criollas</h4>
                <p className="text-[11px] text-amber-400/90 font-medium">Incluidas en tu hamburguesa</p>
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

          {/* Right Column: Hero Visual with Real Product Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Main Burger Display */}
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-orange-600/20 border-2 border-orange-500/30 group">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
                alt="Clásica de Res al Carbón - Mahelo's Burguer Minca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Top Seal Badge */}
              <div className="absolute top-4 left-4 z-10">
                <BrandLogo size="md" />
              </div>

              {/* Bottom tag inside photo */}
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

            {/* Floating Badge 1: 5 Estrellas */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-6 p-3.5 rounded-2xl bg-[#18100c]/95 border border-orange-500/40 shadow-2xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-black text-lg">
                <Star className="w-5 h-5 fill-black" />
              </div>
              <div>
                <p className="text-xs font-black text-white">El Auténtico Sabor</p>
                <p className="text-[11px] text-orange-400 font-semibold">Al carbón en Minca</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Papitas criollas */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 p-3.5 rounded-2xl bg-[#18100c]/95 border border-amber-500/40 shadow-2xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl">
                🥔
              </div>
              <div>
                <p className="text-xs font-black text-white">Papitas Criollas</p>
                <p className="text-[11px] text-amber-300 font-medium">Siempre Incluidas</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
