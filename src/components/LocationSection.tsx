import React from 'react';
import { MapPin, Clock, MessageCircle, Navigation, Wifi } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-gradient-to-b from-[#0d0f12] via-[#11151c] to-[#0d0f12] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Encuéntranos en la Montaña</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Visítanos en <span className="text-emerald-400">Minca</span> o Pide a Domicilio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Ubicados en el corazón de Minca, rodeados de vegetación, brisa fresca de la Sierra y el mejor aroma a carne asada al carbón.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left card: Details & Schedule */}
          <div className="lg:col-span-5 bg-[#141822] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {RESTAURANT_INFO.addressDescription}
                </p>
              </div>

              {/* Info pills */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Horario de Atención</h4>
                    <p className="text-xs text-gray-300">{RESTAURANT_INFO.schedule}</p>
                    <span className="inline-block mt-1 text-[11px] text-emerald-400 font-semibold">
                      ● Cocina abierta ahora mismo
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Zonas de Domicilio en Minca</h4>
                    <p className="text-xs text-gray-300">
                      Entregamos a hostales en el pueblo, hoteles, cabañas y puntos de encuentro sobre la vía principal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Para Turistas & Viajeros</h4>
                    <p className="text-xs text-gray-300">
                      Zona Wi-Fi de alta velocidad para clientes, ambiente pet-friendly y música relajada de montaña.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct contact CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("¡Hola Mahelo's Burguer! ¿Cómo puedo llegar a su local en Minca?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir al WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Minca+Santa+Marta+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Cómo Llegar</span>
              </a>
            </div>
          </div>

          {/* Right card: Interactive Visual Map / Minca Guide */}
          <div className="lg:col-span-7 bg-[#141822] rounded-3xl overflow-hidden border border-white/10 relative min-h-[380px] flex flex-col justify-between">
            {/* Embedded Google Map */}
            <div className="w-full h-full min-h-[320px] relative">
              <iframe
                title="Mapa de Minca Santa Marta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.61803730554!2d-74.12648434771569!3d11.144415843411132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f58c73cbe1ad%3A0xb3388710d29a597a!2sMinca%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                className="w-full h-full min-h-[380px] border-0 filter grayscale-[40%] contrast-125 opacity-90"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay card over map */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#0d0f12]/90 backdrop-blur-md border border-white/15 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Punto de Referencia</h5>
                    <p className="text-[11px] text-gray-300">A solo 2 minutos a pie del puente de Minca y la estación de moto-taxis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom highlights strip */}
            <div className="p-4 bg-black/60 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs text-gray-300">
              <div className="p-2 rounded-lg bg-white/5">
                <span className="block font-bold text-amber-400">Ambiente Abierto</span>
                <span className="text-[10px] text-gray-400">Terraza & Vista verde</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5">
                <span className="block font-bold text-emerald-400">Cerveza Helada</span>
                <span className="text-[10px] text-gray-400">Artesanal & Nacional</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 col-span-2 sm:col-span-1">
                <span className="block font-bold text-white">Pagos Rápidos</span>
                <span className="text-[10px] text-gray-400">Nequi, Daviplata & Cash</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
