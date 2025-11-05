import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-white/80 backdrop-blur border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-sky-500/90 ring-2 ring-white/60 shadow-md shadow-sky-200" />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-sky-800">Baby Angel</p>
              <p className="text-xs font-medium uppercase tracking-wider text-sky-600">Daycare & Preschool</p>
            </div>
          </div>
          <p className="mt-4 text-sky-800/80 max-w-sm">Caring for curious minds in a bright, secure and loving environment. Tours available by appointment.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-sky-900">Explore</h5>
          <ul className="mt-3 space-y-2 text-sky-800/80">
            <li><a href="#about" className="hover:text-sky-900">About</a></li>
            <li><a href="#pricing" className="hover:text-sky-900">Pricing</a></li>
            <li><a href="#blog" className="hover:text-sky-900">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-sky-900">Contact</h5>
          <ul className="mt-3 space-y-2 text-sky-800/80">
            <li>123 Angel Lane, Bluebay</li>
            <li>(555) 123-4567</li>
            <li>hello@babyangel.daycare</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-sky-900">Hours</h5>
          <ul className="mt-3 space-y-2 text-sky-800/80">
            <li>Mon–Fri: 8:00am – 5:30pm</li>
            <li>Tours by appointment</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-sky-800/70">© {new Date().getFullYear()} Baby Angel Daycare & Preschool. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
