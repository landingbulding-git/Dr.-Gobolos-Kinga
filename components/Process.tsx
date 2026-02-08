import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { id: 1, title: "Bejelentkezés", description: "Küldjön üzenetet vagy hívjon minket!" },
  { id: 2, title: "Konzultáció", description: "Felmérjük az állapotot és írásos árajánlatot adunk." },
  { id: 3, title: "Kezelés", description: "Nyugodt, családias légkörben végezzük el a beavatkozást." },
  { id: 4, title: "Gondozás", description: "Megtanítjuk a tökéletes szájápolást az Infinity Smile csomaggal." },
];

export const Process: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            4 egyszerű lépés az új mosolyáig
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {step.id}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
              
              {/* Connector Line (Desktop Only) */}
              {step.id !== 4 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200 -z-10 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};