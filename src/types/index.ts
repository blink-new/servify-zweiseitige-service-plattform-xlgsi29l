export interface User {
  id: string
  email: string
  displayName?: string
  role: 'customer' | 'provider' | 'admin'
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  providerId: string
  title: string
  description: string
  category: string
  priceType: 'hourly' | 'fixed'
  price: number
  location: string
  images: string[]
  rating: number
  reviewCount: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Provider {
  id: string
  userId: string
  businessName: string
  description: string
  location: string
  avatar: string
  rating: number
  reviewCount: number
  subscriptionTier: 'free' | 'basic' | 'pro'
  isVerified: boolean
  isOnline: boolean
  lastSeen: string
  createdAt: string
  updatedAt: string
}

export interface Booking {
  id: string
  customerId: string
  providerId: string
  serviceId: string
  date: string
  time: string
  duration: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  bookingId: string
  customerId: string
  providerId: string
  serviceId: string
  rating: number
  comment: string
  createdAt: string
}

export interface ChatMessage {
  id: string
  senderId: string
  receiverId: string
  message: string
  timestamp: string
  isRead: boolean
}

export const SERVICE_CATEGORIES = [
  'Haushalt',
  'Nachhilfe',
  'Design',
  'Garten',
  'Handwerk',
  'IT & Tech',
  'Beauty & Wellness',
  'Transport',
  'Beratung',
  'Sonstiges'
] as const

export type ServiceCategory = typeof SERVICE_CATEGORIES[number]