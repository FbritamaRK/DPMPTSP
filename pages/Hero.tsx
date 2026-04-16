import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden pt-20 pb-12" aria-label="Hero">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] via-[#205284] to-[#00a8e8] z-0"></div>
      
      {/* Faint Background Image (Optional texture) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10 mix-blend-overlay"
        style={{ 
          
          backgroundImage: 'url("https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=1920")',
        }}
        aria-hidden="true"
      />
      
      {/* Floating Line Art Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-sideways {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(15px) translateY(-15px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(45deg); }
            to { transform: rotate(405deg); }
          }
        `}</style>

        {/* Circle - Gerakan Naik Turun Lembut */}
        <svg 
          className="absolute top-1/4 left-[20%] w-12 h-12 text-white/20 animate-[float-slow_6s_ease-in-out_infinite]" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>

        {/* Square - Gerakan Diagonal */}
        <svg 
          className="absolute top-1/3 left-[50%] w-10 h-10 text-white/20 animate-[float-sideways_8s_ease-in-out_infinite]" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>

        {/* Diamond - Berputar Pelan */}
        <svg 
          className="absolute bottom-1/4 left-[15%] w-16 h-16 text-white/20 animate-[spin-slow_12s_linear_infinite]" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="lg:w-1/2 text-left">
            <p className="text-white text-m md:text-xl mb-2 font-light tracking-wide">Selamat datang di situs web</p>
            <h1 className="text-5x1 md:text-5xl lg:text-6x2 font-bold mb-8 leading-tight drop-shadow-lg">
              Dinas Penanaman Modal<br />
              dan Pelayanan Terpadu<br />
              Satu Pintu <span className="text-[#ffca28]">Kabupaten Gunungkidul</span>
            </h1>
            
        <div className="mb-10 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 animate-[pulse-glow_3s_infinite]">
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 0px rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.3); }
              50% { box-shadow: 0 0 15px rgba(255,255,255,0.5); border-color: rgba(255,255,255,0.6); }
            }
          `}</style>

         <span className="text-sm font-semibold tracking-wider uppercase text-gk-yellow drop-shadow-md">
            Handal • Profesional • Akuntabel
          </span>
        </div>
      </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg aspect-[10/5] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-[float_4s_ease-in-out_infinite]">
                <img 
                  src="https://bakpiakukustugu.co.id/uploads/11/2023-09/4_wisata_gunung_kidul.jpg" 
                  alt="Gedung Pemerintahan" 
                  className="w-full h-full object-cover"

                  style={{
                    animation: `
                      float 4s ease-in-out infinite,
                    `
                  }}
                />
            </div>
          </div>
        </div>

       </div>
      
      {/* ── Angled divider ── */}
      <div className="absolute bottom-12 left-0 right-0 pointer-events-none z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0 60L1440 60L1440 20Z" fill="#f8fafc" />
          <path d="M0 60L1440 20L1440 12L0 52Z" fill="#FFCA28" fillOpacity="0.6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

