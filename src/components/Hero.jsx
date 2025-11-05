import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to blend with brand colors - does not block interactions */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-sky-50/60 via-white/40 to-white"></div>

      {/* Content */}
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sky-500/90 ring-4 ring-white/60 shadow-lg shadow-sky-200" />
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-sky-800 md:text-2xl">Baby Angel</h1>
              <p className="text-xs font-medium uppercase tracking-wider text-sky-600">Daycare & Preschool</p>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sky-800/80 hover:text-sky-800 transition">About</a>
            <a href="#pricing" className="text-sky-800/80 hover:text-sky-800 transition">Pricing</a>
            <a href="#blog" className="text-sky-800/80 hover:text-sky-800 transition">Blog</a>
            <a href="#contact" className="rounded-full bg-sky-600 px-4 py-2 text-white shadow-sm shadow-sky-200 transition hover:bg-sky-700">Contact</a>
          </nav>
        </header>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-6 pb-20 pt-6 md:grid-cols-2 md:gap-8 md:pb-28 md:pt-10">
          <div className="order-2 mt-8 md:order-1 md:mt-0">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-sky-900 md:text-5xl">
              Modern care where little angels bloom
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-sky-800/80 md:text-xl">
              A serene, nurturing space designed for curious minds. Safe, playful, and thoughtfully guided by certified educators.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700">
                View Pricing
              </a>
              <a href="#about" className="rounded-full border border-sky-300/80 bg-white/70 px-6 py-3 font-semibold text-sky-800 backdrop-blur-sm transition hover:bg-white">
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-sky-800/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>State-licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                <span>CPR & First Aid Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>Healthy meals included</span>
              </div>
            </div>
          </div>

          {/* Spacer for Spline visual on the right side */}
          <div className="order-1 h-[40vh] md:order-2 md:h-[60vh]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
