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
import { motion } from 'motion/react';

const JAM_LAYANAN = [
  { hari: "Senin – Kamis", jam: "07.30 - 15.30", bg: "bg-white" },
  { hari: "Jumat",         jam: "07.30 - 14.00", bg: "bg-white" },
  { hari: "Sabtu – Minggu", jam: "Tutup", bg: "bg-white border border-red-500" },
];

const Services = () => {
  const [trackId, setTrackId] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const inputId = useId();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    
    // Simulate finding a result
    setTrackingResult({
      ticketNo: trackId.toUpperCase(),
      name: 'PT. Maju Bersama',
      type: 'Izin Usaha Industri (IUI)',
      submissionDate: '15 April 2026',
      status: 'Verifikasi Teknis',
      history: [
        { status: 'Permohonan Diterima', date: '15 April 2026, 09:00', icon: FileText, complete: true },
        { status: 'Verifikasi Administrasi', date: '16 April 2026, 14:30', icon: CheckCircle2, complete: true },
        { status: 'Verifikasi Teknis', date: 'Dalam Proses', icon: Briefcase, complete: false },
        { status: 'Penerbitan Izin', date: '-', icon: FileText, complete: false },
      ]
    });
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
              <span className="inline-block text-[#023e70] text-sm font-bold tracking-widest uppercase mb-3">
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
               <div className="flex items-center pl-4 bg-slate-50 rounded-xl flex-1 border border-slate-100 focus-within:border-[#023e70] focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                  <FileText size={20} className="text-slate-400 shrink-0" aria-hidden="true" />
                  <input
                    id={inputId}
                    type="text"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    placeholder="Lacak ID Berkas (e.g. GK-24-123)"
                    className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none py-3.5 px-4 font-bold uppercase tracking-wide"
                    aria-label="Lacak berkas"
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

            {/* Tracking Result */}
            {trackingResult && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl w-full max-w-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex border-b border-slate-100 pb-4 mb-5 items-start justify-between relative z-10">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-1">Hasil Pencarian</p>
                    <h3 className="text-xl font-bold text-slate-900">{trackingResult.ticketNo}</h3>
                  </div>
                  <span className="bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs font-semibold rounded-full mt-1">
                    {trackingResult.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Nama Pemohon/Perusahaan</p>
                    <p className="font-semibold text-slate-800 text-sm">{trackingResult.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Tanggal Pengajuan</p>
                    <p className="font-semibold text-slate-800 text-sm">{trackingResult.submissionDate}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-500 mb-1">Jenis Perizinan</p>
                    <p className="font-semibold text-slate-800 text-sm">{trackingResult.type}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-sm font-bold text-slate-900 mb-4">Riwayat Proses</p>
                  <div className="space-y-0 text-sm">
                    {trackingResult.history.map((step: any, idx: number) => {
                      const Icon = step.icon;
                      const isLast = idx === trackingResult.history.length - 1;
                      return (
                        <div key={idx} className="flex gap-4 relative">
                          {!isLast && (
                            <div className={`absolute left-[11px] top-6 bottom-0 w-[2px] -ml-[1px] ${step.complete ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                          )}
                          <div className={`w-6 h-6 rounded-full flex shrink-0 items-center justify-center relative z-10 ${step.complete ? 'bg-emerald-500 text-white' : 'bg-slate-100 border border-slate-300 text-slate-400'}`}>
                            <Icon size={12} />
                          </div>
                          <div className="pb-6">
                            <p className={`font-semibold ${step.complete ? 'text-slate-900' : 'text-slate-500'}`}>{step.status}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{step.date}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
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
                      <p className="text-white text-xs font-medium uppercase tracking-wider">Kantor DPMPTSP</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {JAM_LAYANAN.map((item, idx) => {
                      const isTutup = item.jam === "Tutup";
                      return (
                        <div key={idx} className={`flex items-center justify-between px-4 py-3.5 rounded-xl ${item.bg || 'bg-slate-800'}`}>
                          <span className="text-black font-medium text-sm">{item.hari}</span>
                          <span className={`font-black text-sm tabular-nums tracking-wide ${isTutup ? "text-[#991B1B]" : "text-black"}`}>
                            {item.jam} {isTutup ? '' : 'WIB'}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="bg-[#EBF2F9] backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0 text-slate-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-Black text-xs font-medium mb-0.5">Konsultasi via Telepon</p>
                      <a href="tel:+62274391942" className="text-[#166534] font-bold hover:text-emerald-300 transition-colors">
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
            className="md:col-span-2 group bg-[#fffbeb] rounded-3xl p-8 border border-slate-200 hover:border-[#f59e0b] hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            <div>
              <div className="w-12 h-12 bg-[#fef3c7] rounded-2xl flex items-center justify-center mb-6 text-[#b45309] group-hover:scale-110 transition-transform duration-300">
                 <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight group-hover:text-[#f59e0b] transition-colors">Sistem Perizinan OSS</h3>
              <p className="text-slate-600 max-w-sm leading-relaxed mb-8">
                Integrasi satu pintu untuk semua jenis izin usaha di wilayah Kabupaten Gunungkidul.
              </p>
            </div>
            <div className="flex items-center text-black font-bold text-sm">
              Pelajari Selengkapnya
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Peta (Top Right, 1 col) */}
          <Link
            to="/prospektus"
            className="md:col-span-1 group bg-[#ecfdf5] rounded-3xl p-8 border border-slate-200 hover:border-[#10b981] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            <div>
              <div className="w-12 h-12 bg-[#d1fae5] rounded-2xl flex items-center justify-center mb-6 text-[#047857] group-hover:scale-110 transition-transform duration-300">
                 <Map size={24} />
              </div>
              <h3 className="text-2xl font-bold text- mb-3 blacktracking-tight group-hover:text-[#10b981] transition-colors">Peta Potensi</h3>
              <p className="text-black  leading-relaxed mb-8 text-sm">
                Visualisasi data spasial untuk membantu investor memilih lokasi strategis.
              </p>
            </div>
            <div className="w-full bg-[#86efac] text-black font-bold text-center py-3.5 rounded-xl group-hover:bg-[#4ade80] transition-colors">
              Buka Peta
            </div>
          </Link>

          {/* Card 3: Regulasi (Bottom Left, 1 col) */}
          <Link
            to="/legal"
            className="md:col-span-1 group bg-[#f0f9ff] rounded-3xl p-8 border border-slate-200 hover:border-[#1E40AF] hover:shadow-xl transition-all duration-300 flex flex-col"
          >
             <div className="w-12 h-12 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6 text-[#0369a1] group-hover:scale-110 transition-transform duration-300">
                 <FileText size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#0ea5e9] transition-colors">Regulasi & Panduan</h3>
             <p className="text-black leading-relaxed mb-6 text-sm">
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
            className="md:col-span-2 group relative bg-slate-900 rounded-3xl p-8 border border-slate-200 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-end overflow-hidden min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#10B981] transition-colors">Layanan Pengaduan</h3>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm">
                Sampaikan aspirasi atau keluhan layanan Anda secara langsung.
              </p>
              <div className="flex gap-3">
                <span className="bg-[#374151] text-white border border-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                  Respon 24 Jam
                </span>
                <span className="bg-[#374151] text-white border border-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md">
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