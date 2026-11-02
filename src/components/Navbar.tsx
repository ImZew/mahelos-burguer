import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle, Clock, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/menu', label: 'Menú al Carbón' },
    { to: '/nosotros', label: 'Nuestra Historia' },
    { to: '/ubicacion', label: 'Sede & Domicilios' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0f12]/95 backdrop-blur-md border-b border-orange-500/20 transition-all">
      {/* Top micro bar for Minca atmosphere */}
      <div className="bg-gradient-to-r from-red-950 via-[#180e08] to-red-950 text-xs py-1.5 px-4 text-center border-b border-orange-500/15 flex items-center justify-center gap-3 sm:gap-6 text-amber-200/95 font-medium">
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
        <Link to="/" className="flex items-center gap-3 group">
          <BrandLogo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                MAHELO'S
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/40 font-black tracking-wider uppercase">
                AL CARBÓN
              </span>
            </div>
            <p className="text-[11px] text-amber-400/90 font-semibold tracking-wider uppercase">
              Minca • Sierra Nevada
            </p>
          </div>
        </Link>

        {/* Center navigation links (Home Burgers Clean Style) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors relative py-1.5 ${
                  isActive
                    ? 'text-amber-400 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:rounded-full'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick WhatsApp contact link */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("¡Hola Mahelo's Burguer! Quiero consultar una duda sobre el menú.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all text-xs font-bold"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Cart Header Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir pedido"
            className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:from-amber-400 hover:to-orange-400 transition-all transform active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span>Mi Pedido</span>
            {totalCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-black text-amber-400 text-xs font-black animate-bounce">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#120e0c] border-b border-orange-500/20 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-gray-300 hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-xs font-semibold text-pink-400 hover:text-pink-300"
          >
            📸 Síguenos en Instagram {RESTAURANT_INFO.instagramUser}
          </a>
        </div>
      )}
    </header>
  );
};
