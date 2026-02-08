import React from 'react';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <main>
        <Hero />
        <Testimonials />
        <Comparison />
        <Services />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;