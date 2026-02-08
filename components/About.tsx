import React from 'react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden" id="bemutatkozas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-400/20 rounded-full blur-2xl"></div>
              <img 
                src="https://drkinga.hu/wp-content/uploads/2023/05/Smile_186-scaled-e1685185408698-768x1152.jpg" 
                alt="Dr. Gőbölös Kinga" 
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span className="text-gold-600 font-bold uppercase tracking-wider text-sm">Dr. Gőbölös Kinga</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Fogorvoslás, ami generációk óta a szenvedélyünk.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dr. Gőbölös Kinga vagyok. Már kiskorom óta bepillantást nyerhettem a fogorvosi mindennapokba Édesanyám révén, aki szintén fogorvos. A példa adott volt: nemcsak a szakmát, hanem az emberek iránti tiszteletet és a gyógyítás örömét is tőle tanultam.
              </p>
              <p>
                Diplomámat 2019-ben a Pécsi Tudományegyetemen szereztem. Célom, hogy a hozzám érkező páciensek ne egy "orvost" lássanak bennem, hanem egy partnert, aki segít visszanyerni az önbizalmukat.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" onClick={() => window.location.href = '#idopont'}>
                Kérem az időpontot
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};