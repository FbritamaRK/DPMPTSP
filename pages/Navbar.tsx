import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, ExternalLink } from 'lucide-react';
import { href, Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil', href: '/profil'},
  {
    label: 'Layanan',
    children: [
      { label: 'Produk Hukum', href: '/produk-hukum' },
      { label: 'Prospek Investasi', href: '/prospektus' },
      { label: 'OSS RBA', href: 'https://oss.go.id', external: true },
    ],
  },
  { label: 'Berita', href: '/#berita' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (location.pathname === '/') {
        e.preventDefault();
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navBg = isScrolled || !isHome
    ? 'bg-[#1a1a1a] backdrop-blur-md shadow-sm border-b border-slate-100'
    : 'bg-transparent';

  const textColor = isScrolled || !isHome ? 'text-white ' : 'text-white';
  const hoverColor = 'hover:text-[#ffca28]';

  return (
    <>
      {/* Skip to main content — WCAG 2.4.1 */}
      <a
        href="#pengaduan"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-emerald-500 focus:text-white focus:px-5 focus:py-3 focus:rounded-lg focus:font-semibold focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Lewati ke konten utama
      </a>

      <header className="fixed w-full z-50" role="banner">
        <nav
          className={`transition-all duration-300 ${navBg}`}
          aria-label="Navigasi utama"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-18">

              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg p-1"
                aria-label="DPMPTSP Kabupaten Gunungkidul — Beranda"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <img
                    src="https://dpmpt.gunungkidulkab.go.id/themes/smartadmin/landing/images/logo.png"
                    alt=""
                    aria-hidden="true"
                    className="w-9 h-11 relative z-10"
                  />
                </div>
                <div className={`flex flex-col transition-colors ${textColor}`}>
                  <span className="font-bold text-base leading-tight tracking-tight group-hover:text-[#ffca28] transition-colors">
                    DPMPTSP
                  </span>
                  <span className="text-[10px] font-medium tracking-widest uppercase">
                    Gunungkidul
                  </span>
                </div>
              </Link>

              {/* Desktop nav */}
              <div ref={dropdownRef} className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <button
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${textColor} ${hoverColor} hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href!}
                        onClick={(e) => handleNavClick(e, item.href!)}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all block ${textColor} ${hoverColor} hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${location.pathname === item.href ? 'text-[#ffca28] font-semibold' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}

                   {/* Dropdown Menu Desktop */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-56 pt-4">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-gk-black/10 hover:text-[#ffca28] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

                <button
                  onClick={() => navigate('/pengaduan')}
                  className="ml-3 flex items-center gap-2 bg-[#1e40af] hover:bg-[#1e40af]/90 active:bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  <Phone size={14} aria-hidden="true" />
                  Pengaduan
                </button>
              </div>

              {/* Mobile toggle */}
              <button
                className={`md:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              >
                {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
       

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`md:hidden bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            aria-hidden={!isOpen}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        aria-expanded={activeDropdown === item.label}
                        className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-emerald-100 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={(e) => handleNavClick(e, child.href)}
                              className="flex items-center justify-between py-2.5 px-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                            >
                              {child.label}
                              {(child as any).external && <ExternalLink size={11} aria-label="(eksternal)" className="text-slate-400" />}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={(e) => handleNavClick(e, item.href!)}
                      aria-current={location.pathname === item.href ? 'page' : undefined}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => navigate('/pengaduan')}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 min-h-[48px]"
                >
                  <Phone size={16} aria-hidden="true" />
                  Layanan Pengaduan
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;