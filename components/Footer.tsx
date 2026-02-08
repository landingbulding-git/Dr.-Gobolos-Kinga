import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Closer Section (Mini-Hero) */}
      <div className="relative bg-gold-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ne halogassa tovább a mosolyát!</h2>
          <p className="text-lg mb-8 text-white/90">
            Kérjen időpontot még ma, és tegye meg az első lépést a magabiztos megjelenés felé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="border-2 border-white bg-transparent hover:bg-white hover:text-slate-900">
              Online Időpontkérés
            </Button>
            <a 
              href="tel:+36305223087"
              className="flex items-center justify-center gap-2 bg-white text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
            >
              <Phone size={20} />
              +36-30/522-3087
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Dr. Gőbölös Kinga</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Székesfehérvári fogorvosi rendelőnkben a szakértelem és a családias hangulat találkozik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kapcsolat</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-gold-500" />
                <span>8000 Székesfehérvár, Vörösmarty u. 8.</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-gold-500" />
                <span>dr.gobolos.kinga@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-gold-500" />
                <span>+36-30/522-3087</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nyitvatartás</h3>
            <p className="text-slate-300">
              Kizárólag előzetes bejelentkezés alapján!
            </p>
            <p className="text-slate-500 text-sm mt-4">
              © {new Date().getFullYear()} Dr. Gőbölös Kinga. Minden jog fenntartva.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};