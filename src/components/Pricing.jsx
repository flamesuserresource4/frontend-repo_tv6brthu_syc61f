import React from 'react';

const Plan = ({ name, price, period, features, highlighted = false }) => (
  <div className={`flex flex-col rounded-2xl p-6 ring-1 backdrop-blur shadow-sm ${highlighted ? 'bg-white/90 ring-sky-200 shadow-sky-100' : 'bg-white/70 ring-sky-100'}`}>
    <h4 className="text-xl font-semibold text-sky-900">{name}</h4>
    <div className="mt-2 flex items-end gap-1">
      <span className="text-4xl font-black text-sky-900">{price}</span>
      <span className="mb-1 text-sky-800/70">/{period}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sky-800/80">
      {features.map((f, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a href="#contact" className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition ${highlighted ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-200' : 'bg-sky-100 text-sky-900 hover:bg-sky-200'}`}>
      Enroll Now
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-inset ring-sky-200">Pricing</span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-sky-900 md:text-4xl">
            Flexible plans for every family
          </h3>
          <p className="mt-3 text-lg text-sky-800/80">
            Choose the schedule that fits your needs. Healthy meals, daily updates, and smiles included.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Plan
            name="Half Day"
            price="$450"
            period="month"
            features={[
              '8am – 12pm, Mon–Fri',
              'Nutritious snack',
              'Daily activity reports',
              'Parent portal access',
            ]}
          />
          <Plan
            highlighted
            name="Full Day"
            price="$850"
            period="month"
            features={[
              '8am – 5pm, Mon–Fri',
              'Healthy lunch & snacks',
              'Nap time & outdoor play',
              'Weekly photo highlights',
            ]}
          />
          <Plan
            name="Preschool Prep"
            price="$980"
            period="month"
            features={[
              'Structured learning blocks',
              'Enrichment: music & art',
              'Early literacy & numeracy',
              'Progress assessments',
            ]}
          />
        </div>
        <p className="mt-6 text-center text-sm text-sky-800/70">Sibling discounts available. Drop-in care upon availability.</p>
      </div>
    </section>
  );
};

export default Pricing;
