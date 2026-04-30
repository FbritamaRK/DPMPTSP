import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const banners = [
    {
      id: 1,
      src: "../img/perizinan.png",
      alt: "Banner Zona Integritas DPMPTSP Gunungkidul - Wilayah Bebas Korupsi"
    },
    {
      id: 2,
      src: "../img/banner zona integritas.png",
      alt: "Banner DPMPTSP Gunungkidul"
    }
  ];

  return (
    <section className="w-full bg-slate-50 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {banners.map((banner) => (
                <div 
                  key={banner.id} 
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <img 
                    src={banner.src} 
                    alt={banner.alt} 
                    className="w-full h-auto object-fit aspect-[4/2] md:aspect-[4/1] bg-slate-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
