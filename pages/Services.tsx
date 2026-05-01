import React, { useState, useId, useRef } from 'react';
import {
  FileText,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';

const Services = () => {
  const [trackId, setTrackId] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const inputId = useId();

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );

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
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="layanan-heading"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Header & Tracking */}
        <div className="flex flex-col mb-16">
          <div className="mb-8 max-w-3xl">
            <span className="inline-block text-[#023e70] text-sm font-bold tracking-widest uppercase mb-3">
              Layanan Kami
            </span>
            <h2
              id="layanan-heading"
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight"
            >
              Akses Layanan Publik Terpadu
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-medium">
              Platform digital yang memudahkan pelaku usaha dalam mengelola perizinan dan memantau status aplikasi secara real-time.
            </p>
          </div>

          <div className="max-w-2xl w-full">
            {/* Berkas tracking */}
            <form
              onSubmit={handleTrack}
              aria-label="Lacak status berkas perizinan"
              className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 w-full"
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
                className="mt-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl w-full relative overflow-hidden"
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
        </div>

        {/* Fasilitas Layanan Banner (MPP) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#00337A] rounded-3xl overflow-hidden shadow-xl mb-16 flex flex-col lg:flex-row"
        >
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12 lg:pr-16 flex flex-col justify-center">
            <span className="text-white/80 font-bold text-xs tracking-widest uppercase mb-4 block">
              Fasilitas Layanan Fisik
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Mal Pelayanan Publik (MPP) Gunungkidul
            </h3>
            <p className="text-slate-200 leading-relaxed mb-10 max-w-lg text-sm sm:text-base">
              Terwujudnya Pelayanan Prima Dibidang Penanaman Modal dan Perizinan Didukung Sumber Daya Manusia yang Profesional.
            </p>

            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Clock className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-3">Jam Layanan</h4>
                <p className="text-white text-lg">
                  Senin - Kamis (07:30 - 15:30) <br/>
                  Jumat (07:30 - 11:00)
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-[50%] min-h-[250px] sm:min-h-[300px] lg:min-h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"></div>
            {/* Soft overlay on the image for blending and readability if needed */}
            <div className="absolute inset-0 bg-[#00337A]/20"></div>
            {/* Gradient overlay to smoothly blend with the blue side on desktop */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#00337A] to-transparent lg:block hidden"></div>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#00337A] to-transparent lg:hidden block"></div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          ref={sectionRef}
          style={{ filter }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15 } 
            }
          }}
        >
          
          {/* Card 1: OSS (Top Left, 2 cols) */}
          <motion.a
            href="https://oss.go.id"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-2 group bg-[#EBF2F9]/50 rounded-xl p-8 border border-[#374151]/10 hover:bg-slate-[#374151] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Card Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#fcd34d_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#fef3c7] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-amber-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/path-ke-logo-oss.png" 
                  alt="" 
                  className="w-12 h-12 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#d97706] transition-colors">Sistem Perizinan OSS</h3>
              <p className="text-slate-600 max-w-sm leading-relaxed mb-8">
                Integrasi satu pintu untuk semua jenis izin usaha di wilayah Kabupaten Gunungkidul.
              </p>
            </div>
            <div className="flex items-center text-slate-900 font-bold text-sm relative z-10 group-hover:text-[#d97706]">
              Pelajari Selengkapnya
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 text-[#d97706] transition-transform" />
            </div>
          </motion.a>

          {/* Card 2: Peta (Top Right, 1 col) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/prospektus"
              className="w-full h-full group bg-[#EBF2F9]/50 rounded-xl p-8 border border-[#374151]/10 hover:bg-slate-[#374151] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#6ee7b7_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#d1fae5] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/path-ke-gambar-peta.png" 
                    alt="" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#059669] transition-colors">Peta Potensi</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  Visualisasi data spasial untuk membantu investor memilih lokasi strategis.
                </p>
              </div>
              <div className="w-full bg-[#059669] text-white font-bold text-center py-3.5 rounded-xl border border-[#059669] group-hover:bg-[#10b981] transition-colors flex-shrink-0 relative z-10 shadow-sm">
                Buka Peta
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Regulasi (Bottom Left, 1 col) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/legal"
              className="w-full h-full group bg-[#EBF2F9]/50 rounded-xl p-8 border border-[#374151]/10 hover:bg-slate-[#374151] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
            >
               {/* Card Background Pattern */}
               <div className="absolute inset-0 bg-[radial-gradient(#7dd3fc_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
               <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-sky-100/50 to-transparent rounded-full translate-y-1/4 -translate-x-1/4 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

               <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-[#e0f2fe]/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sky-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/path-ke-ikon-dokumen.png" 
                    alt="" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#0284c7] transition-colors">Regulasi & Panduan</h3>
                 <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                   Unduh dokumen hukum dan panduan teknis penanaman modal.
                 </p>
                 <ul className="space-y-3 mt-auto">
                   <li className="flex items-center text-sm font-medium text-slate-700 gap-2">
                     <CheckCircle2 size={16} className="text-[#0ea5e9] mt-0.5" />
                     Perda No. 5 Tahun 2023
                   </li>
                   <li className="flex items-center text-sm font-medium text-slate-700 gap-2">
                     <CheckCircle2 size={16} className="text-[#0ea5e9] mt-0.5" />
                     Panduan OSS RBA
                   </li>
                 </ul>
               </div>
            </Link>
          </motion.div>

          {/* Card 4: Pengaduan (Bottom Right, 2 cols) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-2 flex"
          >
            <Link
              to="/pengaduan"
              className="w-full h-full group relative bg-slate-900 rounded-xl p-8 border border-[#374151]/10 hover:bg-slate-[#374151] hover:shadow-xl transition-all duration-300 flex flex-col justify-end overflow-hidden min-h-[300px]"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 blur-sm " ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sky-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/path-ke-ikon-dokumen.png" 
                    alt="" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#0EA5E9] transition-colors">Layanan Pengaduan</h3>
                <p className="text-white leading-relaxed mb-6 max-w-md text-sm">
                  Sampaikan aspirasi atau keluhan layanan Anda secara langsung.
                </p>
                <div className="flex gap-3">
                  <span className="bg-[#374151] text-white border border-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md group-hover:bg-white group-hover:text-black">
                    Respon 24 Jam
                  </span>
                  <span className="bg-[#374151] text-white border border-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md group-hover:bg-white group-hover:text-black">
                    Bebas Biaya
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;