import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Miért választanak minket a páciensek a rideg klinikák helyett?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
              <span className="text-red-500">Más Klinikák</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                <span>Rideg, kórházi hangulat és szorongás</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                <span>Futószalag-szerű ellátás, nincs idő kérdezni</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                <span>Rejtett költségek a kezelés végén</span>
              </li>
            </ul>
          </div>

          {/* Kinga Way */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gold-500 shadow-lg relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Dr. Gőbölös Kinga
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-gold-600">A mi rendelőnk</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-800 font-medium">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Családias légkör, ahol a kezelés megkönnyebbülés</span>
              </li>
              <li className="flex items-start gap-3 text-slate-800 font-medium">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Részletes tájékoztatás és türelmes válaszok</span>
              </li>
              <li className="flex items-start gap-3 text-slate-800 font-medium">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Írásos árajánlat és teljes árgarancia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};