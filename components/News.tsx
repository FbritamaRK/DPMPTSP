import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Sosialisasi OSS RBA bagi Pelaku UMKM di Kapanewon Wonosari",
    date: "12 Oktober 2023",
    category: "Kegiatan",
    excerpt: "DPMPTSP Gunungkidul mengadakan pendampingan langsung pembuatan NIB bagi 100 pelaku usaha mikro...",
    imageUrl: "https://picsum.photos/id/119/800/600"
  },
  {
    id: 2,
    title: "Peluang Investasi Sektor Pariwisata Pantai Selatan Terbuka Lebar",
    date: "10 Oktober 2023",
    category: "Investasi",
    excerpt: "Pemerintah daerah menawarkan insentif menarik bagi investor yang ingin mengembangkan kawasan pantai...",
    imageUrl: "https://picsum.photos/id/164/800/600"
  },
  {
    id: 3,
    title: "Jadwal Pelayanan Keliling MPP Bulan November 2023",
    date: "08 Oktober 2023",
    category: "Pelayanan",
    excerpt: "Cek jadwal mobil pelayanan keliling kami di kecamatan anda. Urus izin jadi lebih dekat dan mudah...",
    imageUrl: "https://picsum.photos/id/160/800/600"
  }
];

const News: React.FC = () => {
  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
           <div>
             <h2 className="text-3xl font-bold text-gray-900">Berita Terkini</h2>
             <div className="h-1 w-20 bg-gk-yellow mt-2"></div>
           </div>
           <a href="#" className="hidden sm:flex items-center text-gk-blue font-semibold hover:underline">
             Lihat Arsip Berita <ArrowRight size={16} className="ml-2" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-gk-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  {news.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-2" />
                  {news.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-gk-green cursor-pointer">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <a href="#" className="text-gk-green text-sm font-semibold hover:text-green-700">
                  Baca Selengkapnya
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
            <a href="#" className="text-gk-blue font-semibold hover:underline">
             Lihat Arsip Berita
           </a>
        </div>
      </div>
    </section>
  );
};

export default News;