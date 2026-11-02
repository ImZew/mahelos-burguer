import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  CreditCard, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import type { CartItem, OrderDetails, DeliveryType, PaymentMethod } from '../types';
import { 
  calculateCartTotal, 
  calculateItemTotal, 
  formatCurrency, 
  getWhatsAppLink,
  generateWhatsAppMessage 
} from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  
  // Checkout form state
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('hostal');
  const [locationDetail, setLocationDetail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Nequi');
  const [generalNotes, setGeneralNotes] = useState('');
  const [formError, setFormError] = useState('');

  const cartTotal = calculateCartTotal(items);

  const handleProceedToCheckout = () => {
    if (items.length === 0) return;
    setStep('checkout');
  };

  const handleSendWhatsApp = () => {
    if (!customerName.trim()) {
      setFormError('Por favor ingresa tu nombre');
      return;
    }

    if (deliveryType === 'hostal' && !locationDetail.trim()) {
      setFormError('Por favor indica el nombre de tu hostal, hotel o cabaña en Minca');
      return;
    }

    setFormError('');

    const orderDetails: OrderDetails = {
      customerName,
      phone,
      deliveryType,
      locationDetail,
      paymentMethod,
      notes: generalNotes,
    };

    const link = getWhatsAppLink(items, orderDetails);
    window.open(link, '_blank');
  };

  const handleCopyPreview = () => {
    const orderDetails: OrderDetails = {
      customerName: customerName || 'Cliente',
      phone: phone || 'No indicado',
      deliveryType,
      locationDetail: locationDetail || 'Minca',
      paymentMethod,
      notes: generalNotes,
    };
    const text = generateWhatsAppMessage(items, orderDetails);
    navigator.clipboard.writeText(text);
    alert('¡Mensaje copiado al portapapeles!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-[#12161f] border-l border-white/10 shadow-2xl flex flex-col justify-between text-gray-100"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/30">
                <div className="flex items-center gap-3">
                  {step === 'checkout' && (
                    <button
                      onClick={() => setStep('cart')}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      <span>{step === 'cart' ? 'Tu Pedido' : 'Datos para WhatsApp'}</span>
                      {step === 'cart' && items.length > 0 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          {items.reduce((s, i) => s + i.quantity, 0)} ítems
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {step === 'cart' ? "Mahelo's Burguer al Carbón • Minca" : 'El pedido se enviará al WhatsApp oficial'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-5 overflow-y-auto flex-1 space-y-4">
                {step === 'cart' ? (
                  /* Step 1: Cart Items List */
                  items.length === 0 ? (
                    <div className="text-center py-20 space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 flex items-center justify-center text-4xl">
                        🛒
                      </div>
                      <h4 className="text-lg font-bold text-white">Tu carrito está vacío</h4>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">
                        Explora las hamburguesas al carbón con papitas criollas y añade tus favoritas.
                      </p>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-all cursor-pointer"
                      >
                        Ir al Menú
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {items.map((item) => {
                        const itemSubtotal = calculateItemTotal(item);
                        return (
                          <div
                            key={item.cartItemId}
                            className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex gap-3">
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                                />
                                <div>
                                  <h4 className="text-sm font-bold text-white leading-tight">
                                    {item.product.name}
                                  </h4>
                                  {item.product.includesCriollas && (
                                    <span className="text-[10px] text-amber-300 font-semibold block">
                                      🥔 Con papitas criollas
                                    </span>
                                  )}
                                  <span className="text-xs text-amber-400 font-extrabold">
                                    {formatCurrency(itemSubtotal)}
                                  </span>
                                </div>
                              </div>

                              <button
                                onClick={() => onRemoveItem(item.cartItemId)}
                                className="text-gray-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                                title="Eliminar ítem"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Extras details */}
                            {item.selectedExtras.length > 0 && (
                              <div className="pl-3 border-l-2 border-amber-500/40 text-[11px] text-gray-400 space-y-0.5">
                                {item.selectedExtras.map((extra) => (
                                  <div key={extra.id} className="flex justify-between">
                                    <span>+ {extra.name}</span>
                                    <span className="text-amber-400/80">+{formatCurrency(extra.price)}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Special notes */}
                            {item.specialNotes && (
                              <p className="text-[11px] bg-white/5 p-1.5 rounded-lg text-gray-300 italic">
                                &ldquo;{item.specialNotes}&rdquo;
                              </p>
                            )}

                            {/* Quantity Control */}
                            <div className="flex items-center justify-between pt-1">
                              <span className="text-xs text-gray-500 font-medium">Cantidad:</span>
                              <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-xl border border-white/10">
                                <button
                                  onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                                  className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-5 text-center text-xs font-bold text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                                  className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Clear cart option */}
                      <div className="text-right pt-2">
                        <button
                          onClick={onClearCart}
                          className="text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                        >
                          Vaciar pedido completo
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  /* Step 2: Checkout Form */
                  <div className="space-y-4">
                    {formError && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Customer Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Número de Teléfono / WhatsApp (Opcional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 316 241 3051"
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Delivery Type in Minca */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        ¿Dónde disfrutarás tu pedido?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('hostal')}
                          className={`p-2 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                            deliveryType === 'hostal'
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="block text-base mb-1">🛵</span>
                          <span>Hostal / Cabaña</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeliveryType('mesa')}
                          className={`p-2 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                            deliveryType === 'mesa'
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="block text-base mb-1">🍽️</span>
                          <span>En Mesa</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeliveryType('pickup')}
                          className={`p-2 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                            deliveryType === 'pickup'
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="block text-base mb-1">🛍️</span>
                          <span>Para Llevar</span>
                        </button>
                      </div>
                    </div>

                    {/* Location detail depending on deliveryType */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {deliveryType === 'hostal' 
                          ? 'Nombre del Hostal, Hotel o Cabaña en Minca *' 
                          : deliveryType === 'mesa'
                          ? 'Número de Mesa en Mahelos'
                          : 'Hora estimada para recoger'}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          value={locationDetail}
                          onChange={(e) => setLocationDetail(e.target.value)}
                          placeholder={
                            deliveryType === 'hostal' 
                              ? 'Ej. Casa Loma, Habitación 3 o Cabaña Río Minca' 
                              : deliveryType === 'mesa'
                              ? 'Ej. Mesa #4 (Terraza)'
                              : 'Ej. En 20 minutos paso por el local'
                          }
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                        <span>Método de Pago</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {(['Nequi', 'Daviplata', 'Efectivo', 'Bancolombia'] as PaymentMethod[]).map((method) => (
                          <label
                            key={method}
                            className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                              paymentMethod === method
                                ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-bold'
                                : 'bg-white/5 border-white/10 text-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={method}
                              checked={paymentMethod === method}
                              onChange={() => setPaymentMethod(method)}
                              className="accent-amber-500"
                            />
                            <span>{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* General observations */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Comentarios adicionales para el restaurante:
                      </label>
                      <textarea
                        rows={2}
                        value={generalNotes}
                        onChange={(e) => setGeneralNotes(e.target.value)}
                        placeholder="Ej. Llevar cambio de $50.000, servilletas extra..."
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-amber-500 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer with Totals & Actions */}
              {items.length > 0 && (
                <div className="p-5 border-t border-white/10 bg-black/40 space-y-4">
                  {/* Subtotal calculation */}
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal de ítems:</span>
                      <span className="font-semibold text-white">{formatCurrency(cartTotal)}</span>
                    </div>
                    {deliveryType === 'hostal' && step === 'checkout' && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Envío en Minca:</span>
                        <span>Se confirma por WhatsApp</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/10">
                      <span>Total Estimado:</span>
                      <span className="text-amber-400 text-lg font-black">{formatCurrency(cartTotal)} COP</span>
                    </div>
                  </div>

                  {step === 'cart' ? (
                    <button
                      onClick={handleProceedToCheckout}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Continuar al Pedido</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={handleSendWhatsApp}
                        className="w-full py-4 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5 fill-black" />
                        <span>Enviar Pedido a WhatsApp Ahora</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyPreview}
                        className="w-full py-2 text-center text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        📋 Copiar mensaje de WhatsApp al portapapeles
                      </button>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Respuesta promedio en WhatsApp: menos de 5 minutos</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
