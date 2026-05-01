
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
      <footer className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 px-8 py-12 lg:px-16 lg:py-16 mx-auto max-w-7xl" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer Pemerintahan</h2>
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Logo */}
          <div className="flex items-center space-x-3">
             <img 
              src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png" 
              className="w-10 h-12 object-contain" 
              alt="Logo Kabupaten Gunungkidul"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[#00337A] text-xl tracking-tight leading-none mb-1">DPMPTSP</span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-none">Gunungkidul</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-slate-600 font-medium text-sm md:text-base max-w-sm md:text-right">
            Transformasi pelayanan publik yang profesional, responsif, dan inovatif.
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 mb-12"></div>

        {/* Links & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Tautan Cepat */}
          <div className="flex flex-col">
            <h3 className="text-slate-900 font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="/#profil" className="hover:text-blue-600 transition-colors">Profil Dinas</a></li>
              <li><a href="/produk-hukum" className="hover:text-blue-600 transition-colors">Produk Hukum</a></li>
              <li><a href="/prospektus" className="hover:text-blue-600 transition-colors">Prospektus</a></li>
              <li><a href="/pengaduan" className="hover:text-blue-600 transition-colors">Pengaduan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Peta Situs</a></li>
            </ul>
          </div>

          {/* Navigasi / Tautan Terkait */}
          <div className="flex flex-col">
            <h3 className="text-slate-900 font-bold mb-6">Tautan Terkait</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="https://gunungkidulkab.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Pemkab Gunungkidul</a></li>
              <li><a href="https://oss.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">OSS RBA</a></li>
              <li><a href="https://sicantikui.layanan.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">SiCantik Cloud</a></li>
              <li><a href="https://lapor.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">SP4N LAPOR!</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="flex flex-col w-full lg:min-w-max">
            <h3 className="text-slate-900 font-bold mb-6">Kontak</h3>
            <ul className="space-y-5 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={16} />
                </div>
                <span>dpmptsp@gunungkidul.go.id</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={16} />
                </div>
                <span>(0274) 391191</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={16} />
                </div>
                <span>Wonosari, Gunungkidul</span>
              </li>
            </ul>
          </div>

          {/* Social & Language */}
          <div className="flex flex-col lg:items-end justify-start gap-8">
            {/* Lang Dropdown */}
            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2 hover:border-slate-300 transition-colors cursor-pointer text-sm font-medium text-slate-700">
              <Globe size={16} className="text-slate-500" />
              Indonesia
              <svg className="w-4 h-4 text-slate-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:border-slate-400 hover:text-black transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:border-slate-400 hover:text-black transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:border-slate-400 hover:text-black transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Youtube" className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:border-slate-400 hover:text-black transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} DPMPTSP Kab. Gunungkidul. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
