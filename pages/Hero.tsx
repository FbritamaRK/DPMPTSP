import { Clock, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── FOTO LATAR PENUH */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?q=80&w=1172&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />

        {/* Overlay — Ditingkatkan ke bg-black/60 agar teks putih di atasnya lebih kontras (WCAG 1.4.3) */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto pt-24 pb-40 animate-[fadeInUp_0.8s_ease-out_both]">
       <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp2 {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(1); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* Logo dengan Border lebih tegas */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full bg-white/20 border-2 border-white/50 backdrop-blur-sm flex items-center justify-center shadow-xl">
           <img src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png"
                alt="Lambang Kabupaten Gunungkidul"
                className="w-16 h-16 object-contain" />
        </div>

        <p className="text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-3 drop-shadow-md">
          Pemerintah Kabupaten Gunungkidul
        </p>

        <h1 id="hero-heading" className="text-white font-black leading-[1.1] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}>
          Selamat Datang di<br />
          <span className="text-[#FFCA28]">DPMPTSP</span>
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-snug mb-10 max-w-2xl drop-shadow-md">
          Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
          <span className="block text-gray-200 text-sm sm:text-base mt-1 font-normal">
            Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
          </span>
        </p>

        {/* Badge: Menggunakan font-bold dan shadow agar putih di atas foto tetap terbaca */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mix-blend-plus-lighter">
          {["Pelayanan Gratis", "Terverifikasi OSS-RBA", "Handal • Profesional • Akuntabel"].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 text-white text-sm font-bold drop-shadow-md">
              <CheckCircle className="w-4 h-4 text-[#FFCA28] flex-shrink-0" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-[72px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 72 L1440 72 L1440 24 L0 60 Z" fill="#FFCA28" fillOpacity="0.7" />
          <path d="M0 72 L1440 72 L1440 36 L0 72 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;