import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Árak', href: '#arak' },
  { label: 'Bemutatkozás', href: '#bemutatkozas' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-slate-900">
              Dr. Gőbölös Kinga
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-gold-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#idopont"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Időpontkérés
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-gold-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-gold-600 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
             <a
                href="#idopont"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 mt-4 rounded-md text-base font-bold text-white bg-gold-500 text-center"
              >
                Időpontkérés
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};