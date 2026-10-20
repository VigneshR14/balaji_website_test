export interface PlotItem {
  id: string;
  title: string;
  location: string;
  areaSqFt: number;
  facing: string;
  status: 'Available' | 'Booking Open' | 'Reserved';
  approval: string;
  roadWidth: string;
  groundwaterOrAccess: string;
  loanEligibility: string;
  priceNote: string;
  estimatedPrice?: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Civil Construction' | 'Plot Demarcation' | 'Painting & Finish' | 'Electrical Works';
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  image: string;
  ctaText: string;
  icon: string;
  features: string[];
}

export interface EnquiryData {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  plotId?: string;
  timestamp?: string;
}
