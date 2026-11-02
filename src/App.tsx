import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingCartBar } from './components/FloatingCartBar';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import type { Product, CartItem, ExtraOption } from './types';
import { RESTAURANT_INFO } from './data/menuData';
import { MessageCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const App: React.FC = () => {
  // Load initial cart from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mahelos_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mahelos_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to storage', e);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    const cartItemId = `${product.id}-default`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          quantity: 1,
          selectedExtras: [],
        },
      ];
    });
    showToast(`¡${product.name} añadida al pedido!`);
  };

  const handleAddToCart = (
    product: Product,
    quantity: number,
    extras: ExtraOption[],
    notes: string
  ) => {
    const extrasKey = extras.map((e) => e.id).sort().join('_');
    const notesKey = notes.trim().toLowerCase();
    const cartItemId = `${product.id}-${extrasKey}-${notesKey || 'plain'}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          quantity,
          selectedExtras: extras,
          specialNotes: notes,
        },
      ];
    });
    showToast(`¡${product.name} personalizada y añadida!`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-gray-100 flex flex-col font-sans selection:bg-orange-500 selection:text-black">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs sm:text-sm shadow-2xl flex items-center gap-2 border border-amber-300 pointer-events-none"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onExploreMenu={scrollToMenu} />
        <MenuSection
          onSelectProduct={handleSelectProduct}
          onQuickAdd={handleQuickAdd}
        />
        <InstagramFeed />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Customization Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart & WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Bar (visible when items are in cart) */}
      <FloatingCartBar
        items={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Direct Floating WhatsApp Icon (Bottom Left) */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('¡Hola Mahelo\'s Burguer! Deseo pedir una hamburguesa al carbón.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-13 h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 group border-2 border-emerald-400"
        title="Chatear por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black" />
        <span className="absolute left-16 bg-[#161210] text-white text-xs font-black py-1.5 px-3 rounded-xl border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          ¿Deseas pedir? Escríbenos
        </span>
      </a>
    </div>
  );
};

export default App;
