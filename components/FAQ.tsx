import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" id="arak">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Gyakori Kérdések</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Mennyibe fog ez kerülni?</h3>
            <p className="text-slate-600">
              Minden esetben írásos árajánlatot adunk a konzultáció végén, így nincs meglepetés. Pontosan látni fogja a kezelési terv lépéseit és költségeit előre.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Mi van, ha le kell mondanom?</h3>
            <p className="text-slate-600">
              48 órával előtte díjmentes a lemondás, így segítjük a várólistás betegek gyorsabb ellátását. Kérjük, időben jelezze, ha közbejön valami!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};