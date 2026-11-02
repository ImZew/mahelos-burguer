import React from 'react';
import { Heart, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    likes: 342,
    comments: 28,
    caption: '¡Fuego, carbón y pasión en Minca! 🔥 Nuestra Clásica de Res con queso Colby Jack y tocineta crocante lista para salir.',
    tag: '#AlCarbon'
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80',
    likes: 418,
    comments: 35,
    caption: 'Súper Mixta: 240g de puro poder (res + pollo al carbón) acompañada de nuestras papitas criollas doradas. 🥔🍔',
    tag: '#SuperMixta'
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    likes: 289,
    comments: 19,
    caption: 'Tarde fresca en la Sierra con una Limonada Cerezada de 16 oz bien helada. El maridaje ideal. 🍒🍋',
    tag: '#LimonadaCerezada'
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    likes: 375,
    comments: 24,
    caption: 'Doble Pollo al carbón bañada en salsa cremosa de champiñones y queso mozzarella derretido. ¡Una delicia! 🧀',
    tag: '#MincaBurgers'
  }
];

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#0a0c0e] border-t border-b border-orange-500/15 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-600/10 via-orange-600/10 to-amber-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-wider">
              <span>📸 Comunidad Oficial</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>Síguenos en Instagram</span>
              <span className="text-pink-400">@mahelos_burger</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Comparte tu experiencia en Minca, etiquétanos en tus historias con tus hamburguesas al carbón y antoja a todos de la mejor comida de la Sierra.
            </p>
          </div>

          {/* Follow Button */}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-black text-sm flex items-center gap-2.5 shadow-xl shadow-pink-600/20 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span>Seguir en Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Profile Card Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#14100e] border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-[#14100e] flex items-center justify-center text-xl">
                🍔
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-sm">mahelos_burger</span>
                <CheckCircle className="w-4 h-4 text-blue-400 fill-blue-400" />
              </div>
              <p className="text-gray-400">
                Mahelo's Burguer al Carbón • Minca, Santa Marta
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-300 font-semibold">
            <div className="text-center">
              <span className="block font-black text-white text-sm">100%</span>
              <span className="text-[10px] text-gray-400 uppercase">Al Carbón</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-amber-400 text-sm">Papitas</span>
              <span className="text-[10px] text-gray-400 uppercase">Criollas</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-emerald-400 text-sm">Minca</span>
              <span className="text-[10px] text-gray-400 uppercase">Sierra Nevada</span>
            </div>
          </div>
        </div>

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#14110f] rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay with Likes and Comments on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-black text-sm">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] text-amber-300 font-extrabold">
                  {post.tag}
                </div>
              </div>

              {/* Caption snippet */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1 border-t border-white/5">
                  <span className="text-pink-400 font-medium">Ver post en Instagram</span>
                  <span>↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
