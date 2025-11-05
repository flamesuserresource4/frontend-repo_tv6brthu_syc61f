import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-inter text-sky-900 bg-white">
      <Hero />
      <About />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
