import { LucideIcon } from 'lucide-react';
import { Component } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface StatData {
  year: string;
  target: number;
  realization: number;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
}

export interface InvestmentSector {
  title: string;
  description: string;
  image: string;
  stats: string;
}

export interface InvestmentProject {
  id: number;
  name: string;
  location: string;
  description: string;
  landCost: string;
  civilWorkCost: string;
  totalInvestment: string;
  npv: string;
  irr: string;
  eirr: string;
  paybackPeriod: string;
  dscr: string;
  status: 'Ready to Offer' | 'Strategic' | 'Under Review';
  images: string[];
}

export interface LegalDocument {
  id: number;
  title: string;
  category: 'Perda' | 'Perbup' | 'UU' | 'SOP' | 'Lainnya';
  year: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
}

export interface ComplaintTicket {
  id: string;
  nik: string;
  name: string;
  phone: string;
  address: string;
  category: string;
  subject: string;
  message: string;
  status: 'Terkirim' | 'Diproses' | 'Selesai';
  reply?: string;
  date: string;
}