import React, { useState, useId, useRef } from 'react';
import {
  FileText,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  Briefcase,
  LineChart,
  ClipboardCheck,
  X
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
        <div className="flex flex-col items-center mb-16 text-center">
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
            <p className="text-[#374151] text-lg leading-relaxed max-w-xl font-medium">
              Platform digital yang memudahkan pelaku usaha dalam mengelola perizinan dan memantau status aplikasi secara real-time.
            </p>
          </div>

          <div className="max-w-3xl w-full">
            {/* Berkas tracking */}
            <form
              onSubmit={handleTrack}
              aria-label="Lacak status berkas perizinan"
              className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200 w-full h-13"
            >
              <div className="flex items-center pl-4 bg-slate-50 rounded-xl flex-1 border border-[#EBF2F9] focus-within:border-[#023e70] focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
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

            {/* Tracking Result — Modal Popup */}
            {trackingResult && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-label="Hasil pencarian status berkas"
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setTrackingResult(null)}
                  aria-hidden="true"
                />

                {/* Modal Panel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 30 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" aria-hidden="true" />

                  {/* Close button */}
                  <button
                    onClick={() => setTrackingResult(null)}
                    aria-label="Tutup hasil pencarian"
                    className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <X size={18} />
                  </button>

                  <div className="p-6 sm:p-8">
                    <div className="flex border-b border-slate-100 pb-4 mb-5 items-start justify-between relative z-10 pr-8">
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
                                <div className={`absolute left-[11px] top-6 bottom-0 w-[2px] -ml-[1px] ${step.complete ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                              )}
                              <div className={`w-6 h-6 rounded-full flex shrink-0 items-center justify-center relative z-10 ${step.complete ? 'bg-emerald-500 text-white' : 'bg-slate-100 border border-slate-300 text-slate-400'}`}>
                                <Icon size={12} />
                              </div>
                              <div className="pb-6">
                                <p className={`font-semibold ${step.complete ? 'text-slate-900' : 'text-slate-500'}`}>{step.status}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{step.date}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Close button at bottom */}
                    <div className="mt-2 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => setTrackingResult(null)}
                        className="w-full py-2.5 rounded-xl bg-[#6B7280] text-[#f8fafc] hover:bg-[#991B1B] hover:text-[#f8fafc] font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {/* ── Card Pengaduan (full 3 col) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-3 flex"
          >
            <Link
              to="/pengaduan"
              aria-label="Buka halaman Layanan Pengaduan Terpadu"
              className="w-full h-full group relative rounded-2xl p-6 lg:p-8 bg-white border border-blue-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row justify-between overflow-hidden min-h-[220px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2"
            >
              {/* Highlight: subtle blue tint */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.04) 0%, rgba(14,165,233,0.06) 10 0%)' }}
              />
              {/* Orb dekoratif */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(30,64,175,0.06) 0%, transparent 65%)' }}
              />

              <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-12">
                {/* Kiri: ikon + teks */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
                  <div className="mb-5 hidden lg:block" />

                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <img src="../img/lp.png" alt="" className="w-12 h-12 object-contain rounded-full" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#1E40AF] transition-colors duration-200">
                    Layanan Pengaduan Terpadu
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 max-w-xl text-sm md:text-base">
                    Sampaikan aspirasi atau keluhan layanan Anda secara langsung. Tim kami siap merespon dan memberikan solusi terbaik.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {["Respon 24 Jam", "Bebas Biaya", "Terpadu & Transparan"].map((badge) => (
                      <span
                        key={badge}
                        className="px-4 py-1.5 rounded-full text-xs font-bold text-[#1E40AF]"
                        style={{ background: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.20)' }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kanan: ilustrasi dokumen + arrow */}
                <div className="hidden lg:flex items-center gap-6 shrink-0">
                  <div
                    aria-hidden="true"
                    className="w-36 h-48 rounded-2xl p-5 flex flex-col justify-start gap-3 group-hover:rotate-6 group-hover:-translate-y-3 transition-all duration-500 ease-out"
                    style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 48px rgba(0,0,0,0.35)' }}
                  >
                    <div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center mb-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <div className="w-full h-2.5 bg-slate-700 rounded-full" />
                    <div className="w-5/6 h-2.5 bg-slate-700 rounded-full" />
                    <div className="w-full h-2.5 bg-slate-700 rounded-full" />
                    <div className="w-3/4 h-2.5 bg-slate-700 rounded-full mt-auto" />
                  </div>
                  <ArrowRight size={26} className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── Card OSS (2 col) ── */}
          <motion.a
            href="https://oss.go.id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka Sistem Perizinan OSS (tautan eksternal)"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-2 group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2"
          >

            {/* Dekoratif BG */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,202,40,0.07) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, #00337A 1px, transparent 1px)', backgroundSize: '18px 18px' }}
            />

            <div className="relative z-10">
              {/* Ikon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                style={{ background: '#FEF3C7', border: '1px solid #FDE68A' }}>
                <img src="../img/oss.jpg" alt="" className="w-11 h-11 object-contain" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#00337A] transition-colors duration-200">
                Sistem Perizinan OSS
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                Integrasi satu pintu untuk semua jenis izin usaha di wilayah Kabupaten Gunungkidul berbasis Online Single Submission Risk-Based Approach.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['Terintegrasi OSS-RBA', 'Izin Online 24 Jam', 'Real-time Tracking'].map((chip) => (
                  <span key={chip} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">{chip}</span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[#00337A] font-bold text-sm group-hover:gap-3 transition-all duration-200">
              Akses Layanan OSS
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </div>
          </motion.a>

          {/* ── Card Peta Potensi (1 col) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/prospektus"
              aria-label="Buka halaman Peta Potensi Investasi"
              className="w-full h-full group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2"
            >

              <div aria-hidden="true" className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', transform: 'translate(30%,30%)' }} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#D1FAE5', border: '1px solid #A7F3D0' }}>
                  <img src="../img/pi.png" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">Peta Potensi</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Visualisasi data spasial untuk membantu investor memilih lokasi strategis di Gunungkidul.
                </p>
              </div>

              <div className="w-full text-white font-bold text-sm text-center py-2.5 rounded-xl transition-all duration-200 group-hover:opacity-90 relative z-10"
                style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }}>
                Buka Peta
              </div>
            </Link>
          </motion.div>

          {/* ── Card Regulasi & Panduan (1 col) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/legal"
              aria-label="Buka halaman Regulasi dan Panduan"
              className="w-full h-full group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2"
            >

              <div aria-hidden="true" className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.07) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#E0F2FE', border: '1px solid #BAE6FD' }}>
                  <img src="../img/ph.png" alt="" className="w-12 h-12 object-contain rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#0284C7] transition-colors duration-200">Regulasi &amp; Panduan</h3>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  Unduh dokumen hukum dan panduan teknis penanaman modal.
                </p>
                <ul className="space-y-2.5 mt-auto" aria-label="Dokumen tersedia">
                  {['Perda No. 5 Tahun 2023', 'Panduan OSS RBA'].map((doc) => (
                    <li key={doc} className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                      <CheckCircle2 size={14} className="text-[#0EA5E9] shrink-0" aria-hidden="true" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>

          {/* ── Card Profil Investasi (1 col) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/prospektus"
              aria-label="Buka halaman Profil Investasi"
              className="w-full h-full group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2"
            >

              <div aria-hidden="true" className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.07) 0%, transparent 70%)', transform: 'translate(30%,30%)' }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#FEF3C7', border: '1px solid #FDE68A' }}>
                  <img src="../img/PINV.png" alt="" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#B45309] transition-colors duration-200">Profil Investasi</h3>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  Pelajari peluang dan potensi investasi unggulan di berbagai sektor Kabupaten Gunungkidul.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#B45309] font-bold text-sm group-hover:gap-3 transition-all duration-200">
                  Lihat Profil
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── Card Laporan IKM (1 col) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
            }}
            className="md:col-span-1 flex"
          >
            <Link
              to="/ikm"
              aria-label="Buka halaman Laporan IKM"
              className="w-full h-full group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2"
            >

              <div aria-hidden="true" className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.07) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}>
                  <img src="../img/LI.png" alt="" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-orange-600 transition-colors duration-200">Laporan IKM</h3>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  Indeks Kepuasan Masyarakat terhadap layanan perizinan dan penanaman modal.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#B45309] font-bold text-sm group-hover:gap-3 transition-all duration-200">
                  Lihat Laporan
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services