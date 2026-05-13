import React from 'react';
import { ArrowRight } from 'lucide-react';

const links = [
  {
    title: 'SIMPEL',
    description: 'Sistem Informasi Perizinan Online',
    // Gunakan path gambar atau URL
    image: '../img/simpel.jpg', 
    link: 'https://simpel.gunungkidulkab.go.id/web'
  },
  {
    title: 'SIMBG',
    description: 'Sistem Informasi Manajemen Bangunan Gedung',
    image: '../img/simbg.jpg',
    link: 'https://simbg.pu.go.id/'
  },
  {
    title: 'MPP Digital',
    description: 'Mal Pelayanan Publik Digital',
    image: '../img/mpp.png', 
    link: 'https://play.google.com/store/apps/details?id=com.mppdigital.app'
  }
];

const RelatedLinks = () => {
  return (
    <section className="relative w-full pb-20 mt-10 bg-slate-50/50">
      {/* Background Top Half (Blue) Content */}
      <div className="relative bg-[#1752a9] pt-16 pb-28 overflow-hidden">
         {/* Subtle wave on the left */}
         <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-20 pointer-events-none">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
               <path fill="#ffffff" fillOpacity="0.4" d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,208C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
         </div>

         {/* Angle shapes on the right */}
         <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.08] pointer-events-none">
           <div className="absolute w-64 h-64 bg-white rotate-[40deg] rounded-3xl -top-10 -right-20"></div>
           <div className="absolute w-48 h-48 bg-white rotate-[40deg] rounded-3xl top-16 right-32"></div>
           <div className="absolute w-32 h-32 bg-white rotate-[40deg] rounded-3xl top-44 right-72"></div>
         </div>

         {/* Header Text */}
         <div className="relative z-10 text-center max-w-2xl mx-auto mb-4 px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl md:text-[28px] font-bold text-white mb-3 tracking-tight">
             Akses Cepat
           </h2>
           <p className="text-white/90 text-sm md:text-base leading-relaxed px-4 font-medium">
             Dapatkan kemudahan akses ke beberapa layanan Pemerintah Kabupaten Gunungkidul untuk kebutuhan Anda.
           </p>
         </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((item, idx) => {
            return (
              <a href={item.link} key={idx} className="block group">
                <div className="bg-white rounded-[1.25rem] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-lg hover:shadow-blue-900/10 border border-slate-100 flex flex-col sm:flex-row gap-5 h-full transition-all duration-300 transform group-hover:-translate-y-1">
                  
                  {/* Icon/Image Box */}
                  <div className="w-[84px] h-[84px] shrink-0 rounded-[1rem] flex items-center justify-center overflow-hidden bg-slate-50 border border-slate-100">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                      />
                  </div>
                  
                  {/* Content Box */}
                  <div className="flex flex-col flex-1 text-left justify-between py-0.5">
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-800 mb-1 leading-snug group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-[1.6] mb-3 line-clamp-3">
                         {item.description}
                      </p>
                    </div>
                    <div className="flex items-center text-blue-600 font-bold text-xs group-hover:text-blue-700 transition-colors">
                      Selengkapnya
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RelatedLinks;
