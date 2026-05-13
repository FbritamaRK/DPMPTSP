
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  // Left 1
  {
    id: 1,
    title: "Sosialisasi OSS RBA bagi Pelaku UMKM di Kapanewon Wonosari semakin gencar",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Kegiatan",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  },
  // Left 2
  {
    id: 2,
    title: "Pelatihan Perizinan Berusaha Berbasis Risiko untuk Sektor Pariwisata",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Edukasi",
    imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800",
  },
  // Center (Hero)
  {
    id: 3,
    title: "Peluang Investasi Sektor Pariwisata Pantai Selatan Terbuka Lebar di Gunungkidul",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Investasi",
    excerpt: "Pemerintah daerah menawarkan berbagai skema kemudahan dan fasilitasi menarik bagi investor yang berminat mengembangkan sport tourism kawasan pantai terpadu dengan standar internasional.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200",
    author: "Tim Redaksi",
    authorImg: "https://ui-avatars.com/api/?name=Tim+Redaksi&background=f1f5f9&color=0f172a"
  },
  // Right 1
  {
    id: 4,
    title: "Jadwal Pelayanan Keliling MPP Bulan November 2023 siap menjangkau Anda",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Pelayanan",
    imageUrl: "https://images.unsplash.com/photo-1520697830682-8e100e008ba9?auto=format&fit=crop&q=80&w=800",
  },
  // Right 2
  {
    id: 5,
    title: "Realisasi Investasi Triwulan III Tumbuh Signifikan dan cetak rekor baru",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Laporan",
  },
  // Right 3
  {
    id: 6,
    title: "Bupati Dorong Implementasi Smart City Melalui Pelayanan Digital",
    date: "Tue, Oct 27 2023 • 7:00AM WIB",
    category: "Pemerintah",
  }
];

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case 'Kegiatan': return 'text-[#991B1B]';    // Red
    case 'Investasi': return 'text-[#1B3D5F]';   // Blue
    case 'Pelayanan': return 'text-[#166534]';   // Green
    case 'Edukasi': return 'text-[#166534]';     // Green
    case 'Laporan': return 'text-[#B45309]';     // Yellow 
    case 'Pemerintah': return 'text-[#1B3D5F]';  // Blue
    default: return 'text-slate-600';
  }
};

const ArticleCard = ({ item, isHero = false, noImage = false }: { item: NewsItem, isHero?: boolean, noImage?: boolean }) => {
  return (
    <article className="flex flex-col group cursor-pointer">
      {!noImage && item.imageUrl && (
        <div className={`w-full overflow-hidden mb-3 ${isHero ? 'h-[300px] sm:h-[400px]' : 'h-40 sm:h-48'} rounded`}>
          <img 
            src={item.imageUrl} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex items-center gap-1.5 mb-2 mt-1">
        <span className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(item.category).replace('text-', 'bg-')}`}></span>
        <span className={`text-sm font-semibold tracking-wide ${getCategoryColor(item.category)}`}>
          {item.category}
        </span>
      </div>

      <h3 className={`${isHero ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-xl'} font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-800 transition-colors`}>
        {item.title}
      </h3>

      {isHero && item.excerpt && (
        <p className="text-slate-500 text-base leading-relaxed mb-4">
          {item.excerpt}
        </p>
      )}

      <div className="flex items-center text-slate-500 text-xs mt-auto">
        {isHero && item.author && item.authorImg && (
          <div className="flex items-center mr-3 border-r border-slate-300 pr-3">
             <img src={item.authorImg} alt={item.author} className="w-6 h-6 rounded-full mr-2 object-cover" />
             <span className="font-semibold text-slate-700">{item.author}</span>
          </div>
        )}
        <time dateTime={item.date}>{item.date}</time>
      </div>
    </article>
  );
}

const News = () => {
  const leftItems = newsItems.slice(0, 2);
  const heroItem = newsItems[2];
  const rightItems = newsItems.slice(3, 6);

  return (
    <section id="berita" className="py-20 bg-white" aria-labelledby="berita-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 id="berita-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Berita & Informasi Terkini
            </h2>
          </div>
          
          <a 
            href="#" 
            className="flex items-center gap-1.5 text-sm font-bold text-[#023e70] hover:text-blue-800 transition-colors"
          >
            Lihat Semua Berita 
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        {/* CSS grid for news layout matching the photo */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column (2 items) */}
          <div className="flex flex-col gap-8 lg:border-r lg:border-slate-200 lg:pr-8">
             <ArticleCard item={leftItems[0]} />
             <div className="hidden lg:block w-full h-px bg-slate-200"></div>
             <ArticleCard item={leftItems[1]} />
          </div>

          {/* Middle Column (Hero) */}
          <div className="lg:col-span-2 flex flex-col lg:border-r lg:border-slate-200 lg:pr-8">
            <ArticleCard item={heroItem} isHero />
          </div>

          {/* Right Column (3 items) */}
          <div className="flex flex-col gap-8">
            <ArticleCard item={rightItems[0]} />
            <div className="hidden lg:block w-full h-px bg-slate-200"></div>
            <ArticleCard item={rightItems[1]} noImage />
            <div className="hidden lg:block w-full h-px bg-slate-200"></div>
            <ArticleCard item={rightItems[2]} noImage />
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default News;
