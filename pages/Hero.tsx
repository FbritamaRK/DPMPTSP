import { Clock, CheckCircle, Phone } from "lucide-react";


const JAM_LAYANAN = [
  { hari: "Senin – Kamis", jam: "07.30 – 15.30 WIB" },
  { hari: "Jumat",         jam: "07.30 – 14.00 WIB" },
  { hari: "Sabtu – Minggu", jam: "Tutup" },
];

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── FOTO LATAR PENUH */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
        src="https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=1920"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center brightness-50 "
        />

        {/* Overlay — WCAG 1.4.3: teks putih kontras ≥4.5:1 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Vignet bawah agar konten tidak bersaing dengan divider */}
        <div className="absolute bottom-0 inset-x-0 h-64
                       bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* ── KONTEN UTAMA — TERPUSAT ── */}
      <div className="relative z-10 flex flex-col items-center text-center
                     px-4 sm:px-6 w-full max-w-4xl mx-auto pt-24 pb-40
                     animate-[fadeInUp_0.8s_ease-out_both]">
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
            from { opacity: 0; transform: scale(0.92); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* Logo / lambang (ganti dengan <img> lambang Gunungkidul) */}
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full
                     bg-white/15 border-2 border-white/30 backdrop-blur-sm
                     flex items-center justify-center
                     shadow-[0_0_40px_rgba(255,255,255,0.15)]
                     animate-[scaleIn_0.6s_ease-out_0.1s_both]"
          aria-hidden="true"
        >
          {
            <img src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png"
                 alt="Lambang Kabupaten Gunungkidul"
                 className="w-25 h-25 object-contain" />
          }
        </div>

        {/* Sub-judul kecil */}
        <p
          className="text-white text-xs sm:text-sm font-semibold
                     tracking-[0.18em] uppercase mb-3
                     animate-[fadeInUp_0.7s_ease-out_0.2s_both]"
        >
          Pemerintah Kabupaten Gunungkidul
        </p>

        {/* JUDUL UTAMA */}
        <h1
          id="hero-heading"
          className="text-white font-black leading-[1.1] mb-4
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]
                     animate-[fadeInUp_0.7s_ease-out_0.3s_both]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-0.01em" }}
        >
          Selamat Datang di<br />
          <span className="text-[#FFCA28]">DPMPTSP</span>
        </h1>

        {/* Sub-judul panjang */}
        <p
          className="text-white font-semibold text-base sm:text-lg md:text-xl
                     font-light leading-snug mb-10 max-w-2xl
                     animate-[fadeInUp_0.7s_ease-out_0.4s_both]"
        >
          Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
          <span className="block text-gray 900 text-sm sm:text-base mt-1 font-normal">
            Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
          </span>
        </p>

        {/* ── JAM BUKA LAYANAN KANTOR */}
        <div
          className="w-full max-w-lg animate-[fadeInUp_0.7s_ease-out_0.55s_both]"
          role="region"
          aria-label="Jam buka layanan kantor"
        >
          {/* Header kotak */}
          <div
            className="flex items-center justify-center gap-2 mb-0
                       bg-[#023e70] text-white   px-6 py-3 rounded-t-2xl"
          >
            <Clock className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-black tracking-wide uppercase">
              Jam Buka Layanan Kantor
            </span>
          </div>

          {/* Baris jam */}
          <div className="bg-white/70 backdrop-blur-md border border-white/20
                         rounded-b-2xl overflow-hidden">
            {JAM_LAYANAN.map((item, idx) => {
              const isTutup = item.jam === "Tutup";
              return (
                <div
                  key={item.hari}
                  className={`flex items-center justify-between
                             px-6 py-3.5 gap-4
                             ${idx < JAM_LAYANAN.length - 1 ? "border-b border-white/10" : ""}
                             ${isTutup ? "opacity-90" : ""}`}
                >
                  <span className="text-black text-sm font-medium text-left">
                    {item.hari}
                  </span>
                  <span
                    className={`text-sm font-bold tabular-nums
                               ${isTutup ? "text-[#FF0000]" : "text-black"}`}
                  >
                    {item.jam}
                  </span>
                </div>
              );
            })}

            {/* Footer kotak — kontak WA */}
            <div className="flex items-center justify-center gap-2 px-6 py-3
                           bg-white 30 border-t border-white/10">
              <Phone className="w-3.5 h-3.5 text-white/50 flex-shrink-0" aria-hidden="true" />
              <p className="text-black text-xs text-center">
                Konsultasi:{" "}
                <a
                  href="https://wa.me/628112953451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#FFCA28] transition-colors
                             underline underline-offset-2
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-white focus-visible:rounded"
                >
                  0811-2953-451
                  <span className="sr-only">(WhatsApp, membuka tab baru)</span>
                </a>
                {" "}·{" "}
                <a
                  href="tel:+62274391942"
                  className="text-black hover:text-[#FFCA28] transition-colors
                             underline underline-offset-2
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-white focus-visible:rounded"
                >
                  (0274) 391942
                </a>
              </p>
            </div>
          </div>

          {/* Badge di bawah kotak */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            {[
              "Pelayanan Gratis",
              "Terverifikasi OSS-RBA",
              "Handal • Profesional • Akuntabel",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5
                           text-white text-xs font-semibold"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#FFCA28] flex-shrink-0" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ANGLED DIVIDER*/}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-[72px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer kuning  */}
          <path d="M0 72 L1440 72 L1440 24 L0 60 Z" fill="#FFCA28" fillOpacity="0.55" />
          {/* Layer putih/abu — lapisan utama */}
          <path d="M0 72 L1440 72 L1440 36 L0 72 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;