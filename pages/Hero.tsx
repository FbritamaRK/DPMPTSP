import { Clock, CheckCircle, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Variants } from 'framer-motion';
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 60, 
        damping: 15 
      } 
    }
  };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── FOTO LATAR PENUH */}
      <motion.div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="../img/antonius-jonathan-IwBsixTzfys-unsplash.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />

        {/* Overlay — Ditingkatkan ke bg-black/60 agar teks putih di atasnya lebih kontras (WCAG 1.4.3) */}
        <div className="absolute inset-0" />

        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto pt-24 pb-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo dengan Border lebih tegas */}
        <motion.div variants={itemVariants} className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full bg-white/20 border-2 border-white/50 backdrop-blur-sm flex items-center justify-center shadow-xl">
           <img src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png"
                alt="Lambang Kabupaten Gunungkidul"
                className="w-16 h-16 object-contain" />
        </motion.div>

        <motion.p variants={itemVariants} className="text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-3 drop-shadow-md" style={{ filter }}>
          Pemerintah Kabupaten Gunungkidul
        </motion.p>

        <motion.h1 variants={itemVariants} id="hero-heading" className="text-white font-black leading-[1.1] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em", filter }}>
          Selamat Datang di<br />
          <span className="text-[#FFCA28]">DPMPTSP</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-white text-base sm:text-lg md:text-xl font-medium leading-snug mb-10 max-w-2xl drop-shadow-md" style={{ filter }}>
          Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
          <span className="block text-gray-200 text-sm sm:text-base mt-1 font-normal">
            Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
          </span>
        </motion.p>

        {/* Badge: Menggunakan font-bold dan shadow agar putih di atas foto tetap terbaca */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-8 mix-blend-plus-lighter">
          {["Pelayanan Gratis", "Terverifikasi OSS-RBA", "Handal • Profesional • Akuntabel"].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 text-white text-sm font-bold drop-shadow-md">
              <CheckCircle className="w-4 h-4 text-[#FFCA28] flex-shrink-0" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-[72px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 72 L1440 72 L1440 24 L0 60 Z" fill="#0EA5E9" fillOpacity="0.7" />
          <path d="M0 72 L1440 72 L1440 36 L0 72 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;