import { Clock, CheckCircle, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Variants } from 'framer-motion';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
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
      className="relative w-full min-h-screen flex flex-col items-start justify-center overflow-hidden"
    >
      {/* ── FOTO LATAR PENUH */}
      <motion.div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="../img/1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center brightnes-80"
        />

        {/* Overlay — Ditingkatkan ke bg-black/60 agar teks putih di atasnya lebih kontras (WCAG 1.4.3) */}
        {/* Overlay gelap merata — rasio kontras putih/#FFCA28 di atas overlay ini ≥7:1 (WCAG AAA) */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-start text-left px-8 sm:px-12 lg:px-20 w-full max-w-3xl pt-24 pb-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Identitas — logo di atas teks Kabupaten */}
        {/* <motion.div variants={itemVariants} className="flex flex-col items-start gap-3 mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 border-2 border-white/50 backdrop-blur-sm flex items-center justify-center shadow-xl">
            <img src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png"
                 alt="Logo DPMPTSP Kabupaten Gunungkidul"
                 className="w-16 h-16 object-contain" />
          </div>
          <p className="text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase drop-shadow-md">
            Pemerintah Kabupaten Gunungkidul
          </p>
        </motion.div> */}

        <motion.h1 role="heading" aria-level={1} variants={itemVariants} id="hero-heading" className="text-white font-black leading-[1.1] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em", filter }}>
          Selamat Datang di<br />
          <span className="text-[#FFCA28]">DPMPTSP</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-white text-base sm:text-lg md:text-xl font-medium leading-snug mb-10 max-w-2xl drop-shadow-md" style={{ filter }}>
          Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
          <span className="block text-white/90 text-sm sm:text-base mt-1 font-normal drop-shadow-md">
            Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-start gap-4 mt-8">
          <button
            onClick={() => navigate('/layanan')}
            className="inline-flex items-center gap-2 bg-[#FFCA28] hover:bg-yellow-400 text-gray-900 font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCA28] focus-visible:ring-offset-2"
          >
            Mulai Pengajuan
          </button>
          <button
            onClick={() => navigate('/layanan')}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/60 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Pelajari Layanan
          </button>
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;