// src/types/index.ts

export interface Service {
  id: string;
  title: string;
  duration: string;
  price: string;
  theme: string;
  description: string;
  benefits: string[];
  idealFor: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  clientName: string;
  quote: string;
  service: string;
  image?: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
}

export type ModalType = 
  | 'booking' 
  | 'service' 
  | 'about' 
  | 'contact' 
  | null;

export interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data?: any;
}
