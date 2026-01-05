import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Lambang_Kabupaten_Gunungkidul.png" alt="Logo" className="w-10 h-12" />
              <div>
                <h3 className="text-white font-bold text-lg">DPMPTSP</h3>
                <p className="text-xs text-gray-500">KABUPATEN GUNUNGKIDUL</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Gunungkidul. Melayani dengan Sepenuh Hati, Cepat, dan Transparan.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-gk-yellow transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gk-yellow transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gk-yellow transition"><Youtube size={20} /></a>
              <a href="#" className="hover:text-gk-yellow transition"><Globe size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gk-green shrink-0" />
                <span>Jl. Kyai Morang, Wonosari, Gunungkidul, Daerah Istimewa Yogyakarta 55812</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gk-green shrink-0" />
                <span>(0274) 391234</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gk-green shrink-0" />
                <span>dpmptsp@gunungkidulkab.go.id</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tautan Terkait</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gk-yellow transition">Pemerintah Kab. Gunungkidul</a></li>
              <li><a href="#" className="hover:text-gk-yellow transition">OSS RBA Nasional</a></li>
              <li><a href="#" className="hover:text-gk-yellow transition">Lapor Bantul</a></li>
              <li><a href="#" className="hover:text-gk-yellow transition">Sistem Informasi Tata Ruang</a></li>
              <li><a href="#" className="hover:text-gk-yellow transition">JDIH Gunungkidul</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Jam Pelayanan</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span>Senin - Kamis</span>
                <span className="font-semibold text-white">08:00 - 15:30</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span>Jumat</span>
                <span className="font-semibold text-white">08:00 - 14:30</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span>Sabtu - Minggu</span>
                <span className="text-gk-red font-semibold">Tutup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DPMPTSP Kabupaten Gunungkidul. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;