import React, { useState } from 'react';
import { Search, ArrowRight, FileText } from 'lucide-react';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => {
  const [trackId, setTrackId] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mencari status berkas dengan ID: ${trackId}`);
  };

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 animate-fade-in-down">
          <span className="text-sm font-medium tracking-wider uppercase text-gk-yellow">Handal • Profesional • Akuntabel</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Selamat Datang di <br />
          <span className="text-gk-yellow">DPMPTSP Gunungkidul</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light-bold">
          <ReactTyped strings={["Wujudkan kemudahan berinvestasi dan pelayanan perizinan yang cepat, transparan, dan terintegrasi di Kabupaten Gunungkidul."]} typeSpeed={150} loop/>
        </p>

        {/* Tracking Search Box */}
        <div className="bg-white p-2 rounded-lg shadow-2xl max-w-xl mx-auto flex flex-col md:flex-row gap-2 transform translate-y-4">
          <div className="flex-1 relative">
            <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Masukkan Nomor Pendaftaran." 
              className="w-full pl-10 pr-4 py-3 rounded-md text-gray-800 outline-none focus:ring-2 focus:ring-gk-green bg-gray-50"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
            />
          </div>
          <button 
            onClick={handleTrack}
            className="bg-gk-green hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Lacak Berkas
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-4 text-sm font-medium text-gray-300">
           <span>#InvestasiGunungkidul</span>
           <span>#MalPelayananPublik</span>
           <span>#Gampil</span>
        </div>
      </div>
      
      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;