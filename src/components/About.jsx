import React from 'react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-inset ring-sky-200">
    {children}
  </span>
);

const Feature = ({ title, description }) => (
  <div className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-sky-100 backdrop-blur">
    <h4 className="text-lg font-semibold text-sky-900">{title}</h4>
    <p className="mt-2 text-sky-800/80">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white to-sky-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Pill>About Baby Angel</Pill>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-sky-900 md:text-4xl">
            A calm, caring place for discovery and growth
          </h3>
          <p className="mt-3 text-lg text-sky-800/80">
            We blend compassionate care with modern early-learning practices. Our days are filled with play, creativity, and gentle guidance to help every child feel safe and inspired.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Feature title="Experienced caregivers" description="Our educators are certified, background-checked, and committed to compassionate attention." />
          <Feature title="Play-based curriculum" description="Hands-on exploration in art, music, movement, nature, and early literacy & math." />
          <Feature title="Bright, safe spaces" description="Sunlit rooms, secure entry, air-purified classrooms, and kid-friendly furnishings." />
        </div>
      </div>
    </section>
  );
};

export default About;
