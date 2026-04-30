import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Card, CardContent } from '../components/Card';
import { Shield, Map, Landmark } from 'lucide-react';

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
    <section className="py-16 bg-[#EBF2F9]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Link Terkait" 
          alignment="center" 
          underlineColor="blue"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {links.map((item, idx) => {
            return (
              <a href={item.link} key={idx} className="block group">
                <Card hoverable className="h-full text-center py-8 px-6 transition-all duration-300 border-slate-200 group-hover:border-blue-200 group-hover:shadow-lg group-hover:-translate-y-2">
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className={`w-24 h-24 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                        <img 
                        src={item.image} 
                        alt="" // Kosong karena nama sistem ada di <h3> di bawahnya (WCAG 1.1.1)
                        className="w-full h-full object-contain p-2 rounded-xl bg-slate-50 shadow-sm" 
                        />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-blue-700 transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
