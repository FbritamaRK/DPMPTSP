import React, { useState, useId } from 'react';
import {
  Building2, Laptop, Stethoscope, Ruler,
  Search, FileText, ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    title: 'Produk Hukum & Regulasi',
    description:
      'Akses peraturan daerah, Perbup, SOP, dan dokumen hukum terkait perizinan yang berlaku di Kabupaten Gunungkidul.',
    icon: Building2,
    link: '#produk-hukum',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    hoverBorder: 'hover:border-emerald-300',
    badge: 'Regulasi',
    badgeStyle: 'bg-emerald-100 text-emerald-800',
  },
  {
    title: 'Prospek Investasi',
    description:
      'Data kelayakan finansial, NPV, IRR, dan peluang investasi strategis di berbagai sektor unggulan Gunungkidul.',
    icon: Stethoscope,
    link: '#prospektus',
    color: 'bg-sky-50 text-sky-700 border-sky-100',
    hoverBorder: 'hover:border-sky-300',
    badge: 'Investasi',
    badgeStyle: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'Layanan Pengaduan',
    description:
      'Sampaikan keluhan, saran, dan aspirasi Anda. Tiket tercatat dan dapat dilacak secara real-time.',
    icon: Ruler,
    link: '#pengaduan',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    hoverBorder: 'hover:border-amber-300',
    badge: 'Pengaduan',
    badgeStyle: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'OSS RBA',
    description:
      'Perizinan Berusaha Berbasis Risiko terintegrasi nasional. Urus NIB dan izin usaha Anda secara elektronik.',
    icon: Laptop,
    link: 'https://oss.go.id',
    external: true,
    color: 'bg-violet-50 text-violet-700 border-violet-100',
    hoverBorder: 'hover:border-violet-300',
    badge: 'Eksternal',
    badgeStyle: 'bg-violet-100 text-violet-800',
  },
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
      className="py-20 bg-slate-50"
      aria-labelledby="layanan-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2
            id="layanan-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Layanan DPMPTSP
          </h2>
          <p className="mt-4 text-lg text-[#374151] max-w-xl mx-auto">
            Akses berbagai layanan DPMPTSP secara online, transparan, dan mudah.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="h-px w-12 bg-slate-200" />
          </div>
        </div>

        {/* Berkas tracking */}
        <div className="mb-14 max-w-xl mx-auto">
          <form
            onSubmit={handleTrack}
            aria-label="Lacak status berkas perizinan"
          >
            <label
              htmlFor={inputId}
              className="block text-sm font-semibold text-[#374151] mb-2 text-center"
            >
              Lacak Status Berkas Anda
            </label>
            <div className="flex gap-2 bg-white rounded-xl border border-slate-200 shadow-md p-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-400 transition-all">
              <div className="flex items-center pl-2">
                <FileText size={18} className="text-slate-400" aria-hidden="true" />
              </div>
              <input
                id={inputId}
                type="text"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                placeholder="Masukkan Nomor Pendaftaran..."
                className="flex-1 bg-transparent text-sm text-[#374151] placeholder:text-[#374151] outline-none py-2 px-2"
                aria-describedby="track-hint"
              />
              <button
                type="submit"
                disabled={!trackId.trim()}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                aria-label="Lacak berkas"
              >
                <Search size={16} aria-hidden="true" />
                <span>Lacak</span>
              </button>
            </div>
            <p id="track-hint" className="text-center text-xs text-[#374151] mt-2">
              Contoh: 001/IMB/2024
            </p>
          </form>
        </div>

        {/* Service cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Daftar layanan"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title} role="listitem">
                <a
                  href={service.link}
                  {...(service.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`group relative flex gap-5 items-start bg-white rounded-2xl border border-slate-200 ${service.hoverBorder} hover:shadow-lg p-6 md:p-7 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`}
                  aria-label={`${service.title}${service.external ? ' (tautan eksternal, terbuka di tab baru)' : ''}`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center ${service.color} transition-transform group-hover:scale-110 duration-300`}
                    aria-hidden="true"
                  >
                    <Icon size={26} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span
                        className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${service.badgeStyle}`}
                        aria-hidden="true"
                      >
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#374151] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005C35] group-hover:text-emerald-700 transition-colors">
                      Akses Layanan
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

    <div className="relative mt-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-y border-gray-100 bg-white py-4 text-sm font-medium text-gray-900 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="marquee-container">
        {/* Grup Teks 1 */}
        <div className="flex shrink-0 items-center">
          <span className="px-10 text-gray-900 font-bold">🕛JAM BUKA: SENIN - KAMIS 08:00 - 15:30 | JUMAT 08:00 - 14:30 </span>
          <span className="px-10 text-blue-500 font-bold">🏢WILAYAH BEBAS KORUPSI DAN MENUJU WILAYAH BIROKRASI BERSIH MELAYANI </span>
          <span className="px-10 text-gray-900 font-bold">🕛JAM BUKA: SENIN - KAMIS 08:00 - 15:30 | JUMAT 08:00 - 14:30 </span>
          <span className="px-10 text-red-500 font-bold">⚠️NO KORUPSI, GRATIFIKASI, dan PUNGLI </span>
        </div>

        {/* Grup Teks 2 (Duplikat Persis untuk Loop Mulus) */}
        <div className="flex shrink-0 items-center">
          <span className="px-10 text-gray-900 font-bold">🕛JAM BUKA: SENIN - KAMIS 08:00 - 15:30 | JUMAT 08:00 - 14:30 </span>
          <span className="px-10 text-blue-500 font-bold">🏢WILAYAH BEBAS KORUPSI DAN MENUJU WILAYAH BIROKRASI BERSIH MELAYANI </span>
          <span className="px-10 text-gray-900 font-bold">🕛JAM BUKA: SENIN - KAMIS 08:00 - 15:30 | JUMAT 08:00 - 14:30 </span>
          <span className="px-10 text-red-500 font-bold">⚠️NO KORUPSI, GRATIFIKASI, dan PUNGLI </span>
        </div>
      </div>
    </div>
        
      </div>
    </section>
  );
};

export default Services;