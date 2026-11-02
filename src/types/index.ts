export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'burgers' | 'infantil' | 'bebidas';
  price: number;
  description: string;
  image: string;
  badge?: string;
  weight?: string; // e.g. "180g al carbón", "220g"
  includesCriollas?: boolean; // "Acompañada de papitas criollas"
  ingredients: string[];
  popular?: boolean;
  availableExtras?: ExtraOption[];
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  quantity: number;
  selectedExtras: ExtraOption[];
  specialNotes?: string;
}

export type DeliveryType = 'hostal' | 'mesa' | 'pickup';
export type PaymentMethod = 'Nequi' | 'Daviplata' | 'Efectivo' | 'Bancolombia' | 'Tarjeta / Link';

export interface OrderDetails {
  customerName: string;
  deliveryType: DeliveryType;
  locationDetail: string;
  phone: string;
  paymentMethod: PaymentMethod;
  notes?: string;
}

export interface CategoryInfo {
  id: 'all' | 'burgers' | 'infantil' | 'bebidas';
  name: string;
  icon: string;
  tagline: string;
}
