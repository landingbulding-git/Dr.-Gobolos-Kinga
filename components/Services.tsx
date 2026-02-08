import React from 'react';
import { MessageSquare, Sparkles, Smile, Sun } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Ingyenes Konzultáció",
    description: "Hogy pontosan lássa a megoldást és a költségeket.",
    icon: <MessageSquare size={32} />
  },
  {
    title: "Fájdalommentes Implantáció",
    description: "Modern Alpha-Bio technológia az élethosszig tartó mosolyért.",
    icon: <Sparkles size={32} />
  },
  {
    title: "Láthatatlan Fogszabályozás",
    description: "Esztétikus megoldás felnőtteknek is.",
    icon: <Smile size={32} />
  },
  {
    title: "Professzionális Fehérítés",
    description: "Akár több árnyalattal világosabb fogak egy óra alatt.",
    icon: <Sun size={32} />
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" id="szolgaltatasok">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};