import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NavItem } from '../types.ts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/index.ts';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { 
    label: 'Profil', 
    children: [
      { label: 'Visi & Misi', href: '/#visi-misi' },
      { label: 'Struktur Organisasi', href: '/#struktur' },
      { label: 'Tugas & Fungsi', href: '/#tugas' },
    ]
  },
  { label: 'Layanan', 
    children: [
      { label: 'Produk Hukum', href: '/produk-hukum' },
      { label: 'Prospek Investasi', href: '/prospektus' },
      { label: 'OSS RBA', href: 'https://oss.go.id' },
    ]

  },
  { label: 'Berita', href: '/#berita' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: any, href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed w-full z-50">
      <nav className={`transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-gk-dark/60 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Lambang_Kabupaten_Gunungkidul.png" className="w-10 h-12" alt="Logo" />
              <div className={`flex flex-col ${isScrolled || location.pathname !== '/' ? 'text-gk-dark' : 'text-white'}`}>
                <span className="font-bold text-lg leading-tight group-hover:text-gk-green transition-colors">DPMPTSP</span>
                <span className="text-xs font-medium tracking-wide uppercase">Gunungkidul</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gk-yellow ${
                      isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-gray-100'
                    }`}>
                      {item.label} <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={(e) => handleNavClick(e, item.href!)}
                      className={`text-sm font-medium transition-colors hover:text-gk-yellow ${
                        isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-gray-100'
                      } ${location.pathname === item.href ? 'text-gk-green font-bold' : ''}`}
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
                            className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-gk-black/10 hover:text-gk-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button onClick={() => navigate('/pengaduan')} variant="primary" size="sm" className="bg-gk-green hover:bg-green-700 rounded-full flex items-center gap-2">
                <Phone size={16} /> Pengaduan
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white shadow-xl absolute w-full left-0 border-t transition-all duration-300 ${isOpen ? 'top-full opacity-100' : 'top-[-1000px] opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.label} <ChevronDown size={18} className={activeDropdown === item.label ? 'rotate-180' : ''} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="bg-gray-50 rounded-lg ml-4">
                        {item.children.map((child) => (
                          <Link key={child.label} to={child.href} onClick={(e) => handleNavClick(e, child.href)} className="block px-4 py-3 text-sm text-gray-600 hover:text-gk-green">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href!} onClick={(e) => handleNavClick(e, item.href!)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gk-green hover:bg-gray-50 rounded-md">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;