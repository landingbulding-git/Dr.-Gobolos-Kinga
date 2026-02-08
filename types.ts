import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  rating: number;
  source: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}