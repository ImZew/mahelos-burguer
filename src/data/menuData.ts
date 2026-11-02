import type { Product, CategoryInfo, ExtraOption } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  { 
    id: 'all', 
    name: 'Todo el Menú', 
    icon: 'Sparkles', 
    tagline: 'El auténtico sabor al carbón en Minca' 
  },
  { 
    id: 'burgers', 
    name: 'Hamburguesas al Carbón', 
    icon: 'Flame', 
    tagline: '100% al carbón • Con pan de mantequilla y papitas criollas' 
  },
  { 
    id: 'infantil', 
    name: 'Para los Más Chicos', 
    icon: 'Baby', 
    tagline: 'Sándwiches y mini perros calientes con papas en bastón' 
  },
  { 
    id: 'bebidas', 
    name: 'Bebidas de la Casa', 
    icon: 'GlassWater', 
    tagline: 'Limonadas naturales de 16 oz, agua de panela y cervezas frías' 
  },
];

export const COMMON_EXTRAS: ExtraOption[] = [
  { id: 'extra-colby-jack', name: 'Extra Queso Colby Jack', price: 4000 },
  { id: 'extra-mozzarella', name: 'Extra Queso Mozzarella', price: 3500 },
  { id: 'extra-tocineta', name: 'Extra Tocineta Crocante', price: 4500 },
  { id: 'extra-salsa-champinones', name: 'Porción Salsa de Champiñones', price: 3000 },
  { id: 'extra-papitas-criollas', name: 'Porción Extra de Papitas Criollas', price: 6000 },
  { id: 'extra-salsa-casa', name: 'Salsa Especial de la Casa Extra', price: 2000 },
];

export const PRODUCTS: Product[] = [
  // 1. Clásica de Res
  {
    id: 'clasica-de-res',
    name: '1. Clásica de Res',
    category: 'burgers',
    price: 32000,
    weight: '180 g al carbón',
    includesCriollas: true,
    description: '180 g de carne de res jugosa asada al carbón, pan de mantequilla suave, queso Colby Jack fundido, tocineta crocante, vegetales frescos y salsa especial de la casa. Acompañada de papitas criollas doradas.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: '★ Favorita de Res',
    popular: true,
    ingredients: [
      '180 g Carne de Res al Carbón',
      'Pan de Mantequilla',
      'Queso Colby Jack',
      'Tocineta Crocante',
      'Vegetales Frescos',
      'Salsa Especial de la Casa',
      'Acompañada de Papitas Criollas'
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 2. Clásica de Pollo
  {
    id: 'clasica-de-pollo',
    name: '2. Clásica de Pollo',
    category: 'burgers',
    price: 32000,
    weight: '180 g al carbón',
    includesCriollas: true,
    description: '180 g de pollo marinado y asado al carbón con brasas ardientes, pan de mantequilla, queso mozzarella fundido, vegetales frescos, cebollín fresco, salsa de champiñones y salsa especial de la casa. Acompañada de papitas criollas doradas.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    badge: 'Salsa Champiñones',
    popular: true,
    ingredients: [
      '180 g de Pollo al Carbón',
      'Pan de Mantequilla',
      'Queso Mozzarella',
      'Vegetales Frescos',
      'Cebollín Fresco',
      'Salsa de Champiñones',
      'Salsa Especial de la Casa',
      'Acompañada de Papitas Criollas'
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 3. Doble Carne de Res
  {
    id: 'doble-carne-de-res',
    name: '3. Doble Carne de Res',
    category: 'burgers',
    price: 38000,
    weight: '220 g al carbón',
    includesCriollas: true,
    description: '220 g de carne de res al carbón en su punto, pan de mantequilla, mezcla de queso Colby Jack y mozzarella derretidos, tocineta crocante, vegetales frescos y salsa especial de la casa. Acompañada de papitas criollas doradas.',
    image: 'https://images.unsplash.com/photo-1583032015879-c5c84dfecbb6?auto=format&fit=crop&w=800&q=80',
    badge: 'Doble Sabor 220g',
    popular: true,
    ingredients: [
      '220 g Carne de Res al Carbón',
      'Pan de Mantequilla',
      'Queso Colby Jack y Mozzarella',
      'Tocineta Crocante',
      'Vegetales Frescos',
      'Salsa Especial de la Casa',
      'Acompañada de Papitas Criollas'
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 4. Doble Carne de Pollo
  {
    id: 'doble-carne-de-pollo',
    name: '4. Doble Carne de Pollo',
    category: 'burgers',
    price: 38000,
    weight: '220 g al carbón',
    includesCriollas: true,
    description: '220 g de pollo jugoso al carbón, pan de mantequilla dorado, queso mozzarella elástico, vegetales frescos, salsa cremosa de champiñones y salsa especial de la casa. Acompañada de papitas criollas doradas.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'Doble Pollo 220g',
    ingredients: [
      '220 g de Pollo al Carbón',
      'Pan de Mantequilla',
      'Queso Mozzarella',
      'Vegetales Frescos',
      'Salsa de Champiñones',
      'Salsa Especial de la Casa',
      'Acompañada de Papitas Criollas'
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 5. Súper Mixta
  {
    id: 'super-mixta',
    name: '5. Súper Mixta (Res + Pollo)',
    category: 'burgers',
    price: 40000,
    weight: '240 g (120g Res + 120g Pollo)',
    includesCriollas: true,
    description: 'La máxima experiencia al carbón: 120 g de carne de res al carbón + 120 g de pollo al carbón, pan de mantequilla, quesos Colby Jack y mozzarella fundidos, tocineta crocante, vegetales frescos, cebollín fresco, salsa de champiñones y salsa especial de la casa. Acompañada de papitas criollas.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 La Más Grande (240g)',
    popular: true,
    ingredients: [
      '120 g Carne de Res al Carbón',
      '120 g de Pollo al Carbón',
      'Pan de Mantequilla',
      'Queso Colby Jack y Mozzarella',
      'Tocineta Crocante',
      'Vegetales Frescos',
      'Cebollín Fresco',
      'Salsa de Champiñones',
      'Salsa Especial de la Casa',
      'Acompañada de Papitas Criollas'
    ],
    availableExtras: COMMON_EXTRAS
  },

  // PARA LOS MÁS CHICOS
  {
    id: 'sandwich-tradicional',
    name: 'Sándwich Tradicional',
    category: 'infantil',
    price: 15000,
    description: 'Clásico sándwich en pan suave dorado con mantequilla, queso fundido, jamón seleccionado y las deliciosas salsas de la casa. Ideal para los más chicos.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    badge: 'Para los Chicos',
    ingredients: ['Pan Suave Dorado', 'Queso Fundido', 'Jamón Seleccionado', 'Salsas de la Casa']
  },
  {
    id: 'sandwich-de-pollo',
    name: 'Sándwich de Pollo',
    category: 'infantil',
    price: 18000,
    description: 'Relleno de tierno pollo desmechado al carbón, queso derretido, vegetales frescos y un toque de salsa especial en pan de mantequilla.',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80',
    badge: 'Pollo al Carbón Kids',
    ingredients: ['Pollo al Carbón', 'Queso Fundido', 'Pan de Mantequilla', 'Salsa Especial']
  },
  {
    id: 'mini-perros-tradicionales',
    name: '2 Mini Perros Calientes Tradicionales',
    category: 'infantil',
    price: 10000,
    description: 'Combo de dos mini perros calientes: salchicha suave, pan fresco, queso derretido, lluvia de papas en bastón ultra crocantes y las salsas de la casa.',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80',
    badge: 'Combo 2x $10.000',
    popular: true,
    ingredients: ['2 Salchichas', 'Pan Suave', 'Queso Fundido', 'Papas en Bastón Crocantes', 'Salsas de la Casa']
  },

  // BEBIDAS
  {
    id: 'limonada-natural',
    name: 'Limonada Natural 16 oz',
    category: 'bebidas',
    price: 14000,
    badge: 'Vaso 16 oz',
    description: 'Refrescante limonada de 16 oz con limones recién exprimidos, toque de azúcar de caña y abundante hielo picado.',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Zumo de Limón Natural', 'Agua Pura', 'Hielo', 'Presentación 16 oz']
  },
  {
    id: 'limonada-cerezada',
    name: 'Limonada Cerezada 16 oz',
    category: 'bebidas',
    price: 15000,
    badge: 'Favorita 16 oz',
    popular: true,
    description: 'La preferida de la casa: limonada frappé de 16 oz combinada con cerezas dulces y jarabe natural.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Limonada Frappé', 'Cerezas Dulces', 'Jarabe Frutal', 'Presentación 16 oz']
  },
  {
    id: 'aguapanela-con-limon',
    name: 'Agua de Panela con Limón 16 oz',
    category: 'bebidas',
    price: 14000,
    badge: 'Tradicional 16 oz',
    description: 'Auténtica bebida típica colombiana de 16 oz: infusión fría de panela orgánica con zumo natural de limón mandarino.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Panela Orgánica', 'Zumo de Limón Fresco', 'Hielo Picado', 'Presentación 16 oz']
  },
  {
    id: 'coca-cola-400ml',
    name: 'Coca-Cola 400 ml',
    category: 'bebidas',
    price: 5000,
    description: 'Botella personal de Coca-Cola original de 400 ml servida bien helada.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Coca-Cola 400 ml', 'Servida Fría']
  },
  {
    id: 'cerveza-330ml',
    name: 'Cerveza 330 ml',
    category: 'bebidas',
    price: 6000,
    badge: 'Bien Helada',
    description: 'Cerveza fría de 330 ml perfecta para disfrutar con tus hamburguesas al carbón en Minca.',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cerveza 330 ml']
  },
  {
    id: 'agua-personal',
    name: 'Agua Personal',
    category: 'bebidas',
    price: 4000,
    description: 'Agua mineral pura y cristalina bien fría.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Agua Mineral Personal']
  }
];

export const RESTAURANT_INFO = {
  name: "Mahelo's Burguer al Carbón",
  shortName: "Mahelo's Burguer",
  slogan: 'El Auténtico Sabor al Carbón',
  secondarySlogan: 'Hecho con amor, al carbón ❤️💨',
  whatsappNumber: '573001234567',
  displayPhone: '+57 300 123 4567',
  instagramUser: '@mahelos_burger',
  instagramUrl: 'https://www.instagram.com/mahelos_burger/',
  location: 'Minca, Santa Marta, Magdalena, Colombia',
  addressDescription: 'Calle Principal de Minca, a 150m del puente central (frente a la naturaleza)',
  schedule: 'Lunes a Domingo: 12:00 PM - 10:30 PM',
  deliveryZones: [
    'Casco Urbano de Minca',
    'Hostales y Cabañas de Minca',
    'Servicio a Mesa en Terraza',
    'Para Llevar / Pick-up'
  ]
};
