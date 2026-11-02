import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle, Navigation, Wifi, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-gray-100 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Minca, Santa Marta • Colombia</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sede, Horarios & <span className="text-emerald-400">Domicilios</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Visítanos en nuestro local en Minca o pide directamente a tu hostal, hotel o cabaña a través de WhatsApp.
          </p>
        </div>

        {/* Main Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Information Card */}
          <div className="lg:col-span-5 bg-[#141210] rounded-3xl p-6 sm:p-8 border border-orange-500/20 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs text-orange-400 font-extrabold uppercase tracking-wider">Punto Físico</span>
                <h2 className="text-2xl font-black text-white mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {RESTAURANT_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {RESTAURANT_INFO.addressDescription}
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">Horario de Cocina</h3>
                    <p className="text-xs text-gray-300 mt-0.5">{RESTAURANT_INFO.schedule}</p>
                    <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Abierto todos los días
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">Cobertura de Domicilios</h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Entregamos en hostales, hoteles, cabañas y casco urbano de Minca. Despacho rápido coordinado por WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">Servicios en el Local</h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Wi-Fi libre de alta velocidad, ambiente pet-friendly, terraza al aire libre y música relajada de montaña.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-6 border-t border-orange-500/20 space-y-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("¡Hola Mahelo's Burguer! ¿Cómo puedo llegar a su local en Minca?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp ({RESTAURANT_INFO.displayPhone})</span>
              </a>

              <Link
                to="/menu"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Hacer Pedido en el Menú</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#141210] rounded-3xl overflow-hidden border border-orange-500/20 relative min-h-[420px] flex flex-col justify-between shadow-2xl">
            <div className="w-full h-full min-h-[380px] relative">
              <iframe
                title="Mapa de Minca Santa Marta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.61803730554!2d-74.12648434771569!3d11.144415843411132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f58c73cbe1ad%3A0xb3388710d29a597a!2sMinca%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                className="w-full h-full min-h-[420px] border-0 filter grayscale-[30%] contrast-125 opacity-90"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#0d0f12]/95 backdrop-blur-md border border-orange-500/30 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Referencia Central</h4>
                    <p className="text-[11px] text-gray-300">A solo 2 minutos a pie del puente de Minca y la estación de moto-taxis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom highlights strip */}
            <div className="p-4 bg-black/60 border-t border-orange-500/20 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-black text-amber-400">Ambiente Abierto</span>
                <span className="text-[10px] text-gray-400">Terraza & Vista Verde</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-black text-emerald-400">Cerveza Helada</span>
                <span className="text-[10px] text-gray-400">Artesanal & Club Col.</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-black text-white">Pagos Fáciles</span>
                <span className="text-[10px] text-gray-400">Nequi & Daviplata</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
