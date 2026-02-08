import React from 'react';

export const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Köszönjük a megkeresését!</h1>
        <p className="text-slate-600 mb-6">Hamarosan felvesszük Önnel a kapcsolatot.</p>
        <a 
          href="/" 
          className="bg-gold-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gold-600 transition duration-300"
        >
          Vissza a főoldalra
        </a>
      </div>
    </div>
  );
};
