import React from 'react';
import { InvestmentSector } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sectors: InvestmentSector[] = [
  {
    title: "Pariwisata & Ekonomi Kreatif",
    description: "Pengembangan resort pantai, glamping, dan desa wisata yang sedang berkembang pesat.",
    image: "https://picsum.photos/id/10/800/600", 
    stats: "45% dari Total Investasi"
  },
  {
    title: "Pertanian & Agrobisnis",
    description: "Potensi lahan luas untuk pertanian modern, peternakan terpadu, dan pengolahan hasil bumi.",
    image: "https://picsum.photos/id/292/800/600",
    stats: "20% dari Total Investasi"
  },
  {
    title: "Industri Kecil & Menengah",
    description: "Sentra kerajinan kayu, batu alam, dan kuliner khas daerah yang bernilai ekspor.",
    image: "https://picsum.photos/id/204/800/600",
    stats: "15% dari Total Investasi"
  }
];

const Investment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="investasi" className="py-20 bg-gk-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">Potensi Investasi Unggulan</h2>
            <p className="mt-4 text-gray-400">Jelajahi peluang emas di Bumi Handayani. Kami menyediakan data dan fasilitasi bagi calon investor.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => navigate('/prospektus')}
              className="bg-gk-yellow text-gk-dark px-6 py-2 rounded-full font-bold hover:scale-105 transition flex items-center gap-2"
            >
              Lihat Prospektus Finansial <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${sector.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="text-gk-yellow text-xs font-bold uppercase tracking-wider mb-2">{sector.stats}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gk-yellow transition-colors">{sector.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {sector.description}
                </p>
                <div className="mt-4 h-0 group-hover:h-auto overflow-hidden transition-all">
                  <button 
                    onClick={() => navigate('/prospektus')}
                    className="text-sm font-semibold underline decoration-gk-yellow underline-offset-4"
                  >
                    Pelajari Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-gray-500 text-sm italic mb-4">Ingin berdiskusi lebih lanjut mengenai peluang investasi?</p>
           <button className="inline-block text-gk-yellow border border-gk-yellow px-8 py-3 rounded-full hover:bg-gk-yellow hover:text-gk-dark transition">
            Jadwalkan Konsultasi Investor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Investment;