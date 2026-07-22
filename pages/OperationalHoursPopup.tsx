import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, MapPin, Phone } from 'lucide-react';

const OperationalHoursPopup = () => {
  const [visible, setVisible] = useState(false);

  /* Muncul 900ms setelah halaman dimuat — setiap kali komponen mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ops-popup"
          initial={{ x: '110%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '110%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-6 right-4 sm:right-6 z-[9999] w-[310px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby="popup-desc"
          style={{ boxShadow: '0 24px 64px rgba(0,30,80,0.45)' }}
        >
          {/* ── Navy header ── */}
          <div
            className="relative px-5 pt-5 pb-4"
            style={{
              backgroundImage: 'url(../img/orang.jpg)',
              backgroundSize: 'fit',
              backgroundPosition: 'center top',
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#0F172A]/70" aria-hidden="true" />
            
            {/* Dot pattern decoration */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,202,40,0.6) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Tutup informasi jam operasional"
              className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-150 hover:bg-red-800q focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <X size={15} color="rgba(255,255,255,0.8)" />
            </button>

            {/* Clock icon */}
        

            {/* Title */}
            <div className="text-center relative z-10">
              <h2
                id="popup-title"
                className="text-white font-black leading-tight tracking-tight"
                style={{ fontSize: '1.65rem' }}
              >
                JAM OPERASIONAL
              </h2>
              <p id="popup-desc" className="text-white text-xs font-semibold mt-1.5 leading-snug">
                Mal Pelayanan Publik (MPP)<br />Gunungkidul
              </p>
            </div>
          </div>

          {/* ── White body ── */}
          <div className="bg-white px-5 py-4">
            {/* Schedule rows */}
            <div className="space-y-2.5 mb-4">
              {/* Senin – Kamis */}
              <div className="flex items-center justify-between py-2.5 px-3 rounded-xl" style={{ background: '#EFF6FF' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E40AF] shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">Senin – Kamis</span>
                </div>
                <span className="text-[#1E40AF] font-black text-sm tabular-nums">07.30 – 15.30</span>
              </div>

              {/* Jumat */}
              <div className="flex items-center justify-between py-2.5 px-3 rounded-xl" style={{ background: '#EFF6FF' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E40AF] shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">Jumat</span>
                </div>
                <span className="text-[#1E40AF] font-black text-sm tabular-nums">07.30 – 11.00</span>
              </div>

              {/* Tutup */}
              <div className="flex items-center justify-between py-2 px-3 rounded-xl" style={{ background: '#F8FAFC' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-800 shrink-0" />
                  <span className="text-red-800 font-semibold text-sm">Sabtu, Minggu &amp; Libur</span>
                </div>
                <span className="text-red-800 font-black text-sm">Tutup</span>
              </div>
            </div>

            {/* Note */}
            <div
              className="text-center text-[11px] text-slate-600 leading-relaxed py-2.5 px-3 rounded-xl mb-1"
              style={{ background: '#F1F5F9' }}
            >
              Pelayanan tutup saat jam istirahat.<br />
              <span className="font-semibold text-slate-800">Disarankan datang lebih awal untuk antrean.</span>
            </div>
          </div>

          {/* ── Gold contact strip ── */}
          <div
            className="px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2"
            style={{ background: 'linear-gradient(90deg, #FFCA28 0%, #F59E0B 100%)' }}
          >
            <div className="flex items-center gap-2 shrink-0">
              <Phone size={13} color="#1A1A1A" strokeWidth={2.5} />
              <span className="text-slate-900 font-black text-sm">(0274) 391942</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-black/20 mx-1" aria-hidden="true" />
            <div className="flex items-start gap-1.5 min-w-0">
              <MapPin size={12} color="#1A1A1A" strokeWidth={2.5} className="shrink-0 mt-0.5" />
              <span className="text-slate-900 text-[10px] font-semibold leading-tight">
                Jl. Kasatrian No.38, Purbosari, Wonosari,<br />
                Kab. Gunungkidul, DIY 55851
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OperationalHoursPopup;
