import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Compass } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-gray-100 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Nuestra Historia • Minca, Sierra Nevada de Santa Marta</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            La Pasión de la Brasa en el Corazón de la Sierra
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Nacimos en Minca con un objetivo auténtico: elevar la hamburguesa artesanal a través del fuego vivo del carbón, ingredientes honestos y el calor humano de la montaña.
          </p>
        </div>

        {/* Feature Image with Brand Mascot Seal */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/30 aspect-[16/9] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85"
            alt="Hamburguesas al carbón en Minca"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute top-6 left-6">
            <BrandLogo size="lg" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider">Filosofía Mahelo's</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">"Hecho con amor, al carbón"</h3>
              <p className="text-xs text-gray-300">Cada hamburguesa se asa al instante sobre brasas vivas en Minca.</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 font-black text-xs sm:text-sm">
              ★ 100% Carbón de Leña
            </div>
          </div>
        </div>

        {/* Editorial Narrative (Home Burgers Style Storytelling) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              El Origen en Minca
            </h3>
            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
              Santa Marta • Magdalena
            </p>
            <div className="p-4 rounded-2xl bg-[#151210] border border-orange-500/20 text-xs text-gray-300 space-y-2">
              <span className="block font-black text-white">Nuestra Promesa:</span>
              <p>
                Sin procesos congelados, sin carnes industriales. Sencillez, generosidad y el inconfundible sabor ahumado de la leña.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              Minca es un rincón privilegiado del Caribe colombiano: una montaña mágica donde la brisa marina de Santa Marta se funde con la vegetación espesa de la Sierra Nevada. Entre fincas cafeteras, ríos cristalinos y senderos naturales, sentíamos que faltaba algo fundamental: <strong>una hamburguesa de verdad, jugosa, generosa y asada al carbón</strong>.
            </p>
            <p>
              Así nació <strong>Mahelo's Burguer</strong>. Decidimos que cada hamburguesa debía tener alma. Por eso descartamos las planchas industriales y elegimos el método más noble y exigente: las brasas de carbón vegetal. Ese toque ahumado sella la carne en su punto, manteniendo los jugos internos y creando una costra exterior irresistible.
            </p>
            <p>
              Y porque creemos en las raíces colombianas, rompimos con el cliché de las papas a la francesa congeladas: en Mahelo's, cada hamburguesa se sirve con <strong>papitas criollas doradas al punto</strong>, con su piel crocante y sal marina.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-3xl bg-[#151210] border border-orange-500/20 space-y-3">
            <span className="text-3xl">🔥</span>
            <h4 className="text-lg font-black text-white">El Carbón de Leña</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              La brasa aporta una temperatura óptima que dora la carne sin secarla, otorgándole el auténtico sabor parrillero.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#151210] border border-orange-500/20 space-y-3">
            <span className="text-3xl">🥔</span>
            <h4 className="text-lg font-black text-white">Papitas Criollas</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Ingrediente emblemático de nuestra tierra. Tiernas por dentro, doradas y crocantes por fuera. Siempre incluidas.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#151210] border border-orange-500/20 space-y-3">
            <span className="text-3xl">❤️</span>
            <h4 className="text-lg font-black text-white">Hecho con Amor</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Atendemos con la calidez de la Sierra a viajeros de todo el mundo y a nuestra querida comunidad local.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-950/60 via-[#161210] to-red-950/60 border border-orange-500/30 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            ¿Listo para Probar el Auténtico Sabor al Carbón?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Explora nuestra carta completa con opciones de res, pollo, la Súper Mixta (240g), menú infantil y bebidas tradicionales de 16 oz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black text-sm flex items-center gap-2 shadow-xl hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              <Flame className="w-4 h-4 fill-black" />
              <span>Ver Menú al Carbón</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ubicacion"
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 transition-all"
            >
              Cómo Llegar & Horarios
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
