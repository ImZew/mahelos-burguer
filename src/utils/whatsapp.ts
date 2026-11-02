import type { CartItem, OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateItemTotal = (item: CartItem): number => {
  const extrasCost = item.selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  return (item.product.price + extrasCost) * item.quantity;
};

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + calculateItemTotal(item), 0);
};

export const generateWhatsAppMessage = (
  items: CartItem[],
  orderDetails: OrderDetails
): string => {
  const total = calculateCartTotal(items);

  const deliveryTypeLabels: Record<string, string> = {
    hostal: '🛵 Domicilio a Hostal / Cabaña en Minca',
    mesa: '🍽️ Pedido en Mesa (En el Restaurante)',
    pickup: '🛍️ Para Llevar / Recoger en Local'
  };

  let message = `🔥 *¡NUEVO PEDIDO - MAHELO'S BURGUER AL CARBÓN!* 🍔\n`;
  message += `_★ El Auténtico Sabor al Carbón • Minca, Santa Marta ★_\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  // Customer info
  message += `👤 *Cliente:* ${orderDetails.customerName || 'No indicado'}\n`;
  message += `📱 *Teléfono de Contacto:* ${orderDetails.phone || 'No indicado'}\n`;
  message += `📍 *Modalidad:* ${deliveryTypeLabels[orderDetails.deliveryType] || orderDetails.deliveryType}\n`;
  message += `📌 *Ubicación / Detalle:* ${orderDetails.locationDetail || 'Minca'}\n`;
  message += `💳 *Método de Pago:* ${orderDetails.paymentMethod}\n\n`;

  // Items detail
  message += `📋 *DETALLE DE TU ORDEN:*\n`;
  items.forEach((item, index) => {
    const itemSubtotal = calculateItemTotal(item);
    message += `\n*${index + 1}. ${item.quantity}x ${item.product.name}* [${formatCurrency(itemSubtotal)}]\n`;
    
    if (item.product.includesCriollas) {
      message += `   └ 🥔 _Incluye papitas criollas doradas_\n`;
    }

    if (item.selectedExtras.length > 0) {
      item.selectedExtras.forEach(extra => {
        message += `   └ ➕ ${extra.name} (+${formatCurrency(extra.price)})\n`;
      });
    }

    if (item.specialNotes && item.specialNotes.trim() !== '') {
      message += `   └ 📝 _Instrucción:_ ${item.specialNotes.trim()}\n`;
    }
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:* *${formatCurrency(total)} COP*\n`;

  if (orderDetails.notes && orderDetails.notes.trim() !== '') {
    message += `\n💬 *Observaciones generales:*\n${orderDetails.notes.trim()}\n`;
  }

  message += `\n❤️ *HECHO CON AMOR, AL CARBÓN* 💨\n`;
  message += `📸 _Síguenos en Instagram:_ ${RESTAURANT_INFO.instagramUrl}`;

  return message;
};

export const getWhatsAppLink = (
  items: CartItem[],
  orderDetails: OrderDetails,
  customPhone?: string
): string => {
  const phone = customPhone || RESTAURANT_INFO.whatsappNumber;
  const message = generateWhatsAppMessage(items, orderDetails);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
