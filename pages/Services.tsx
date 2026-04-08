
import React, { useState } from 'react';
import { Building2, Laptop, Stethoscope, Briefcase, Ruler, Factory, ArrowRight, ShieldCheck, FileText, Search } from 'lucide-react';
import { ServiceItem } from '../types';
import { SectionHeader, Card, CardContent } from '../components';

const services: ServiceItem[] = [
 {
    title: "Produk Hukum",
    description: "Sistem Informasi Manajemen Bangunan Gedung (PBG & SLF).",
    icon: Building2,
    link: "/#/produk-hukum"
  },
  {
    title: "Investment Prospect",
    description: "SIP Dokter, Bidan, Perawat, dan Izin Apotek/Klinik.",
    icon: Stethoscope,
    link: "/#/prospektus"
  },
  {
    title: "Layanan Pengaduan",
    description: "Kesesuaian Kegiatan Pemanfaatan Ruang.",
    icon: Ruler,
    link: "/#/pengaduan"
  },
  {
    title: "OSS RBA",
    description: "Perizinan Berusaha Berbasis Risiko terintegrasi secara elektronik.",
    icon: Laptop,
    link: "https://oss.go.id"
  }
];

const Services: React.FC = () => {
const [trackId, setTrackId] = useState('');

// Search Berkas
const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mencari status berkas dengan ID: ${trackId}`);
};

  return (
    <section id="layanan" className="py-20 bg-slate-50 pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-7">
          <h2 className="text-3xl mt-10 font-bold text-gray-900 sm:text-4xl">Layanan DPMPTSP</h2>
          <p className="mt-4 text-lg text-gray-600">Akses berbagai layanan DPMPTSP secara online dan transparan</p>
          <div className="w-24 h-1 bg-gk-green mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tracking Search Box */}
         <div className="bg-white p-2 rounded-lg mb-20 shadow-2xl max-w-xl mx-auto flex flex-col md:flex-row gap-2 transform translate-y-4">
           <div className="flex-1 relative">
             <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
             <input 
              type="text" 
              placeholder="Masukkan Nomor Pendaftaran." 
              className="w-full pl-10 pr-4 py-3 rounded-md text-gray-800 outline-none focus:ring-2 focus:ring-gk-green bg-gray-50"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
            />
          </div>
          <button 
            onClick={handleTrack}
            className="bg-gk-green hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Lacak Berkas
          </button>
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl p-8 border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-gk-blue focus-visible:outline-none"
            >
              <div className="w-14 h-14 bg-blue-50 text-gk-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gk-blue group-hover:text-white transition-colors">
                <service.icon size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gk-blue">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-sm font-semibold text-gk-green group-hover:translate-x-2 transition-transform">
                Akses Layanan <ArrowRight size={16} className="ml-1" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
