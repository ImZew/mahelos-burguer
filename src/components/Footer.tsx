import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090706] border-t border-orange-500/20 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-orange-500/15">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <div>
                <span 
                  className="text-2xl font-black text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  MAHELO'S BURGUER
                </span>
                <span className="block text-xs text-orange-400 font-extrabold tracking-wider uppercase">
                  AL CARBÓN • MINCA
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              El auténtico sabor al carbón en la Sierra Nevada de Santa Marta. 100% preparadas sobre brasas vivas, pan de mantequilla, queso Colby Jack y acompañadas siempre de papitas criollas doradas.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center gap-2 text-xs font-bold transition-colors"
                title="Instagram @mahelos_burger"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span>{RESTAURANT_INFO.instagramUser}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">
              Carta al Carbón
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Hamburguesas al Carbón (con Papitas Criollas)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Para los Más Chicos (Sándwiches & Mini Perros)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Bebidas de la Casa (16 oz & Cervezas)
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-amber-400 transition-colors">
                  Comunidad @mahelos_burger
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">
              Pedidos & Domicilios Minca
            </h4>
            <div className="text-xs sm:text-sm space-y-2">
              <p className="text-gray-200">
                Línea oficial de WhatsApp:
                <br />
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                  className="font-black text-amber-400 hover:underline"
                >
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </p>
              <p className="text-gray-400 text-xs">
                Entregas directas a hostales, cabañas y casco urbano de Minca.
              </p>
              <p className="text-amber-300 text-xs font-bold">
                Lunes a Domingo: 12:00 PM - 10:30 PM
              </p>
              <p className="text-orange-400 text-xs font-extrabold pt-1">
                ❤️ HECHO CON AMOR, AL CARBÓN 💨
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>y sabor al carbón en Minca, Santa Marta.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
