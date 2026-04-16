import React from 'react';
import { Calendar, ArrowRight, ArrowUpRight, Tag } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Sosialisasi OSS RBA bagi Pelaku UMKM di Kapanewon Wonosari',
    date: '12 Oktober 2023',
    category: 'Kegiatan',
    excerpt:
      'DPMPTSP Gunungkidul mengadakan pendampingan langsung pembuatan NIB bagi 100 pelaku usaha mikro dan kecil di wilayah Wonosari.',
    imageUrl: 'https://picsum.photos/id/119/800/600',
    categoryStyle: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 2,
    title: 'Peluang Investasi Sektor Pariwisata Pantai Selatan Terbuka Lebar',
    date: '10 Oktober 2023',
    category: 'Investasi',
    excerpt:
      'Pemerintah daerah menawarkan insentif menarik bagi investor yang ingin mengembangkan kawasan pantai selatan Gunungkidul.',
    imageUrl: 'https://picsum.photos/id/164/800/600',
    categoryStyle: 'bg-sky-100 text-sky-800',
  },
  {
    id: 3,
    title: 'Jadwal Pelayanan Keliling MPP Bulan November 2023',
    date: '08 Oktober 2023',
    category: 'Pelayanan',
    excerpt:
      'Cek jadwal mobil pelayanan keliling kami di kecamatan Anda. Urus izin jadi lebih dekat dan mudah tanpa perlu datang ke kantor.',
    imageUrl: 'https://picsum.photos/id/160/800/600',
    categoryStyle: 'bg-amber-100 text-amber-800',
  },
];

const News = () => {
  return (
    <section
      id="berita"
      className="py-20 bg-slate-50"
      aria-labelledby="berita-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Terbaru
            </span>
            <h2
              id="berita-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Berita &amp; Informasi
            </h2>
          </div>
          <a
            href="#"
            className="group hidden sm:flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 border border-emerald-200 hover:border-emerald-400 bg-white hover:bg-emerald-50 px-5 py-2.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Lihat Semua Berita
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          role="list"
          aria-label="Daftar berita terkini"
        >
          {newsItems.map((news) => (
            <li key={news.id} role="listitem">
              <article
                className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                aria-labelledby={`news-title-${news.id}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={`Ilustrasi berita: ${news.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-full ${news.categoryStyle} shadow-sm`}
                    >
                      <Tag size={9} aria-hidden="true" />
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="flex items-center gap-1.5 text-[#374151] text-xs mb-3">
                    <Calendar size={12} aria-hidden="true" />
                    <time dateTime="2023-10-12">{news.date}</time>
                  </div>
                  <h3
                    id={`news-title-${news.id}`}
                    className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2"
                  >
                    {news.title}
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed mb-5 flex-1 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005C35] hover:text-emerald-700 transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    aria-label={`Baca selengkapnya: ${news.title}`}
                  >
                    Baca Selengkapnya
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 border border-emerald-200 bg-white px-6 py-3 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Lihat Semua Berita
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;