import React from 'react';
import { ShoppingBag, MessageCircle, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0d0f12]/95 backdrop-blur-md border-b border-orange-500/20 transition-all">
      {/* Top micro bar for Minca & Charcoal authenticity */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-xs py-1.5 px-4 text-center border-b border-orange-500/15 flex items-center justify-center gap-3 sm:gap-6 text-amber-200/95 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="text-orange-500">🔥</span>
          <strong className="text-white">¡El Auténtico Sabor al Carbón!</strong>
        </span>
        <span className="hidden sm:inline text-orange-500/40">•</span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          Minca, Santa Marta
        </span>
        <span className="hidden md:inline text-orange-500/40">•</span>
        <span className="hidden md:flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          12:00 PM - 10:30 PM
        </span>
        <span className="hidden lg:inline text-orange-500/40">•</span>
        <a
          href={RESTAURANT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1 text-amber-300 hover:text-white transition-colors"
        >
          <span>📸 {RESTAURANT_INFO.instagramUser}</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <BrandLogo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                MAHELO'S
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/40 font-black tracking-wider uppercase">
                AL CARBÓN
              </span>
            </div>
            <p className="text-[11px] text-amber-400/90 font-semibold tracking-wider uppercase">
              Minca • Sierra Nevada
            </p>
          </div>
        </a>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span>🍔</span>
            <span>Menú al Carbón</span>
          </a>
          <a href="#instagram" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span>📸</span>
            <span>Comunidad Instagram</span>
          </a>
          <a href="#ubicacion" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span>📍</span>
            <span>Ubicación en Minca</span>
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Instagram shortcut */}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-pink-400 border border-pink-500/30 text-xs font-bold transition-all"
            title="Ver en Instagram"
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span className="hidden lg:inline">{RESTAURANT_INFO.instagramUser}</span>
          </a>

          {/* Quick WhatsApp contact link */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('¡Hola Mahelo\'s Burguer! Quiero hacer una pregunta sobre el menú al carbón.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all text-xs font-bold"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Cart Header Button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de compras"
            className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:from-amber-400 hover:to-orange-400 transition-all transform active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span>Mi Pedido</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-black text-amber-400 text-xs font-black animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
