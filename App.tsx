import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

const MainPage: React.FC = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-slate-900 bg-white">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/success" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;