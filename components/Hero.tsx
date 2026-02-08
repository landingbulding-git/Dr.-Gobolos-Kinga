import React from 'react';
import { Star, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-slate-50 overflow-hidden" id="idopont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Form (Mobile First Order) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Social Proof Bar */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-gold-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">"Profi és kedves ellátás" – Google Vélemények</span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Ragyogóan egészséges mosoly szakértő törődéssel, hogy Ön újra magabiztosan nevethessen.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Fél a fogorvostól? Székesfehérvári rendelőnkben családias hangulattal és modern technológiával várjuk, hogy a kezelés ne teher, hanem megkönnyebbülés legyen.
            </p>

            {/* Lead Capture Form (ATF) */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mt-4 max-w-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kérjen időpontot most!</h3>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="ef92aaa0-4aba-4d60-9f04-a789bcea685b"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="/success"
                />
                <div>
                  <label htmlFor="name" className="sr-only">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Az Ön Neve"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Telefonszám (pl. +36 30 ...)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <Button fullWidth type="submit">
                  Kérem az időpontot
                </Button>
                
                {/* FUD Reducer */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><Clock size={14} /> Nincs várakozási idő</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="flex items-center gap-1"><ShieldCheck size={14} /> Teljes körű árgarancia</span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              {/* Placeholder for Dr. Kinga */}
              <img 
                src="https://drkinga.hu/wp-content/uploads/2023/05/Smile_331-768x1152.jpg" 
                alt="Dr. Gőbölös Kinga" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded">
                    PTE ÁOK
                  </div>
                  <p className="text-sm font-medium">Diplomáját a Pécsi Tudományegyetemen szerezte</p>
                </div>
                <p className="text-xs mt-1 opacity-90">Akadémiai szintű precizitás 2019 óta</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};