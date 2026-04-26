import React, { useState, useId } from 'react';
import {
  Briefcase,
  FileText,
  Map,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JAM_LAYANAN = [
  { hari: "Senin – Kamis", jam: "07.30 - 15.30", bg: "bg-slate-800" },
  { hari: "Jumat",         jam: "07.30 - 14.00", bg: "bg-slate-800" },
  { hari: "Sabtu – Minggu", jam: "Tutup", bg: "bg-emerald-900/40 text-emerald-400 border border-emerald-900/50" },
];

const Services = () => {
  const [trackId, setTrackId] = useState('');
  const inputId = useId();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    alert(`Mencari status berkas dengan ID: ${trackId}`);
  };

  return (
    <section
      id="layanan"
      className="py-24 bg-slate-50"
      aria-labelledby="layanan-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Header, Tracking, and Office Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Left Column: Heading & Tracking */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-3">
                Layanan Kami
              </span>
              <h2
                id="layanan-heading"
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight"
              >
                Akses Layanan<br className="hidden md:block"/>Publik Terpadu
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-medium">
                Platform digital yang memudahkan pelaku usaha dalam mengelola perizinan dan memantau status aplikasi secara real-time.
              </p>
            </div>

            {/* Berkas tracking */}
            <form
              onSubmit={handleTrack}
              aria-label="Lacak status berkas perizinan"
              className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 w-full max-w-2xl"
            >
               <div className="flex items-center pl-4 bg-slate-50 rounded-xl flex-1 border border-slate-100 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                  <FileText size={20} className="text-slate-400 shrink-0" aria-hidden="true" />
                  <input
                    id={inputId}
                    type="text"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    placeholder="Lacak ID Berkas (e.g. GK-24-123)"
                    className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none py-3.5 px-4 font-bold uppercase tracking-wide"
                  />
               </div>
               <button
                  type="submit"
                  disabled={!trackId.trim()}
                  className="shrink-0 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  aria-label="Lacak berkas"
                >
                  <Search size={18} aria-hidden="true" />
                  Lacak
                </button>
            </form>
          </div>

          {/* Right Column: Office Hours Widget */}
          <div className="lg:col-span-5 xl:col-span-4">
             <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border border-slate-800">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">Jam Buka Layanan</h3>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Kantor DPMPTSP</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {JAM_LAYANAN.map((item, idx) => {
                      const isTutup = item.jam === "Tutup";
                      return (
                        <div key={idx} className={`flex items-center justify-between px-4 py-3.5 rounded-xl ${item.bg || 'bg-slate-800'}`}>
                          <span className="text-slate-300 font-medium text-sm">{item.hari}</span>
                          <span className={`font-black text-sm tabular-nums tracking-wide ${isTutup ? "text-emerald-400" : "text-white"}`}>
                            {item.jam} {isTutup ? '' : 'WIB'}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0 text-slate-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-0.5">Konsultasi via Telepon</p>
                      <a href="tel:+62274391942" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                        (0274) 391942
                      </a>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Card 1: OSS (Top Left, 2 cols) */}
          <a
            href="https://oss.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 group bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            <div>
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                 <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">Sistem Perizinan OSS</h3>
              <p className="text-slate-600 max-w-sm leading-relaxed mb-8">
                Integrasi satu pintu untuk semua jenis izin usaha di wilayah Kabupaten Gunungkidul.
              </p>
            </div>
            <div className="flex items-center text-emerald-600 font-bold text-sm">
              Pelajari Selengkapnya
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Peta (Top Right, 1 col) */}
          <Link
            to="/prospektus"
            className="md:col-span-1 group bg-[#1e293b] rounded-3xl p-8 border border-slate-700 hover:border-slate-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-[#93c5fd] group-hover:scale-110 transition-transform duration-300">
                 <Map size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#bae6fd] transition-colors">Peta Potensi</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                Visualisasi data spasial untuk membantu investor memilih lokasi strategis.
              </p>
            </div>
            <div className="w-full bg-[#86efac] text-emerald-950 font-bold text-center py-3.5 rounded-xl group-hover:bg-[#4ade80] transition-colors">
              Buka Peta
            </div>
          </Link>

          {/* Card 3: Regulasi (Bottom Left, 1 col) */}
          <Link
            to="/legal"
            className="md:col-span-1 group bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
             <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                 <FileText size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">Regulasi & Panduan</h3>
             <p className="text-slate-500 leading-relaxed mb-6 text-sm">
               Unduh dokumen hukum dan panduan teknis penanaman modal.
             </p>
             <ul className="space-y-3 mt-auto">
               <li className="flex items-center text-sm font-medium text-slate-700 gap-2">
                 <CheckCircle2 size={16} className="text-emerald-500 mt-0.5" />
                 Perda No. 5 Tahun 2023
               </li>
               <li className="flex items-center text-sm font-medium text-slate-700 gap-2">
                 <CheckCircle2 size={16} className="text-emerald-500 mt-0.5" />
                 Panduan OSS RBA
               </li>
             </ul>
          </Link>

          {/* Card 4: Pengaduan (Bottom Right, 2 cols) */}
          <Link
            to="/pengaduan"
            className="md:col-span-2 group relative bg-slate-900 rounded-3xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-end overflow-hidden min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">Layanan Pengaduan</h3>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm">
                Sampaikan aspirasi atau keluhan layanan Anda secara langsung.
              </p>
              <div className="flex gap-3">
                <span className="bg-emerald-900/50 text-emerald-400 border border-emerald-800/50 px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                  Respon 24 Jam
                </span>
                <span className="bg-slate-800/50 text-slate-300 border border-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                  Bebas Biaya
                </span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Services;