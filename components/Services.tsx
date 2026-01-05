import React from 'react';
import { Building2, Laptop, Stethoscope, Briefcase, Ruler, Factory, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

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
  // {
  //   title: "Sektor Pariwisata",
  //   description: "TDUP dan perizinan usaha sektor pariwisata.",
  //   icon: Briefcase,
  //   link: "#"
  // },
  // {
  //   title: "Sektor Industri",
  //   description: "Perizinan untuk kegiatan industri kecil hingga besar.",
  //   icon: Factory,
  //   link: "#"
  // },
  // {
  //   title: "Reklame",
  //   description: "Izin pemasangan reklame dan media luar ruang.",
  //   icon: FileText,
  //   link: "#"
  // },
  // {
  //   title: "Pengaduan",
  //   description: "Layanan pengaduan masyarakat terkait perizinan.",
  //   icon: ShieldCheck,
  //   link: "/#/pengaduan"
  // }
];

const Services: React.FC = () => {
  return (
    <section id="layanan" className="py-20 bg-slate-50 pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Layanan DPMPTSP</h2>
          <p className="mt-4 text-lg text-gray-600">Akses berbagai layanan DPMPTSP secara online dan transparan</p>
          <div className="w-24 h-1 bg-gk-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl p-8 border border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 text-gk-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gk-blue group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gk-blue">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-sm font-semibold text-gk-green group-hover:translate-x-2 transition-transform">
                Akses Layanan <ArrowRight size={16} className="ml-1" />
              </div>
            </a>
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gk-blue bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition">
            Lihat Semua Layanan
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Services;