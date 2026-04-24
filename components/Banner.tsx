import React from 'react';

const Banner = () => {
  return (
    <section className="w-full bg-slate-50 pt-10 pb-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
          <img 
            src="../img/banner zona integritas.png" 
            alt="Banner Zona Integritas DPMPTSP Gunungkidul - Wilayah Bebas Korupsi" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
