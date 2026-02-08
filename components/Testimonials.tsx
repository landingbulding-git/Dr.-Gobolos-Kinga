import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "Végre nem félek a fogorvostól! Korábban rettegtem minden kezeléstől, de Kinga doktornő kedvessége azonnal megnyugtatott.",
    author: "K. Andrea",
    rating: 5,
    source: "Google Vélemények"
  },
  {
    quote: "Hihetetlenül precíz és fájdalommentes volt az implantáció. A családomnak sem tűnt fel, hogy nem az igazi a fogam.",
    author: "N. Péter",
    rating: 5,
    source: "Google Vélemények"
  },
  {
    quote: "A láthatatlan fogszabályzóval végre merek mosolyogni a munkahelyemen. Köszönöm a profizmust!",
    author: "Sz. Éva",
    rating: 5,
    source: "Facebook Értékelés"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Több mint 500 boldog páciens Székesfehérváron.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col h-full">
              <div className="flex text-gold-500 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic flex-grow mb-6">"{t.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-xs text-slate-500">{t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};