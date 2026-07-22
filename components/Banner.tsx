import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    src: '../img/perizinan.png',
    alt: 'Banner Perizinan DPMPTSP Gunungkidul',
  },
  {
    id: 2,
    src: '../img/banner zona integritas.png',
    alt: 'Banner Zona Integritas DPMPTSP Gunungkidul – Wilayah Bebas Korupsi',
  },
];

const Banner = () => {
  // Tanpa Autoplay plugin — navigasi manual saja
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  /* ── Sinkronisasi state indeks & tombol ── */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section
      aria-label="Banner informasi DPMPTSP Gunungkidul"
      className="w-full pt-10 pb-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #e8eef6 0%, #f1f5fb 40%, #f8fafc 100%)',
      }}
    >
      {/* Subtle grid texture untuk kedalaman */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 0.6px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Label section ── */}
        {/* <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 rounded-full bg-[#0EA5E9]" aria-hidden="true" />
          <span className="text-[#00337A] text-xs font-bold tracking-widest uppercase">
            Informasi &amp; Pengumuman
          </span>
        </div>> */}

        {/* ── Wrapper carousel ── */}
        <div className="relative">
          {/* Frame dengan border premium */}
          <div
            className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              boxShadow: '0 8px 40px rgba(0,51,122,0.20), 0 2px 8px rgba(0,0,0,0.10), 0 0 0 1px rgba(14,165,233,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
              border: '1.5px solid rgba(14,165,233,0.22)',
            }}
          >
            {/* Garis aksen atas kartu */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[3px] z-10"
              style={{ background: 'linear-gradient(90deg, #00337A, #0EA5E9, #FFCA28)' }}
            />

            {/* Embla viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex touch-pan-y">
                {banners.map((banner, idx) => (
                  <div
                    key={banner.id}
                    className="flex-[0_0_100%] min-w-0 relative"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${idx + 1} dari ${banners.length}`}
                  >
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-auto object-fit aspect-[4/2] md:aspect-[4/1] bg-slate-100"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {/* Overlay subtle bawah */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(0,51,122,0.18), transparent)' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tombol Prev — selalu visible, bukan hanya hover ── */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Slide sebelumnya"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.16)',
                border: '1.5px solid rgba(14,165,233,0.25)',
              }}
              disabled={!canScrollPrev}
            >
              <ChevronLeft size={20} className="text-[#00337A]" aria-hidden="true" />
            </button>

            {/* ── Tombol Next ── */}
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Slide berikutnya"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.16)',
                border: '1.5px solid rgba(14,165,233,0.25)',
              }}
              disabled={!canScrollNext}
            >
              <ChevronRight size={20} className="text-[#00337A]" aria-hidden="true" />
            </button>

            {/* ── Dot indicator dalam kartu ── */}
            <div
              role="tablist"
              aria-label="Pilih slide"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
            >
              {banners.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Pergi ke slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className="transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                  style={{
                    width: i === selectedIndex ? '28px' : '8px',
                    height: '8px',
                    background: i === selectedIndex
                      ? '#FFCA28'
                      : 'rgba(255,255,255,0.6)',
                    boxShadow: i === selectedIndex ? '0 0 8px rgba(255,202,40,0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Counter slide di luar kartu ── */}
          <div className="flex items-center justify-between mt-3 px-1">
            <p className="text-xs text-slate-500 font-medium">
              {banners[selectedIndex]?.alt}
            </p>
            <span
              className="text-xs font-bold tabular-nums px-3 py-1 rounded-full"
              style={{ background: '#EBF2F9', color: '#00337A' }}
              aria-live="polite"
              aria-atomic="true"
            >
              {selectedIndex + 1} / {banners.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
