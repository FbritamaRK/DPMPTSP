
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types.ts';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/#profil' },
  { label: 'Layanan', href: '/#layanan' },
  // { label: 'Produk Hukum', href: '/produk-hukum' },
  // { label: 'Prospektus', href: '/prospektus' },
  { label: 'Berita', href: '/#berita' },
  { label: 'MPP', href: '/#mpp' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
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

  const handleComplaintClick = () => {
    setIsOpen(false);
    navigate('/pengaduan');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-12 bg-contain bg-no-repeat bg-center" 
                 style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/2/29/Lambang_Kabupaten_Gunungkidul.png)' }} 
                 aria-label="Logo Gunungkidul">
            </div>
            <div className={`flex flex-col ${isScrolled || location.pathname !== '/' ? 'text-gk-dark' : 'text-white'}`}>
              <span className="font-bold text-lg leading-tight group-hover:text-gk-green transition-colors">DPMPTSP</span>
              <span className="text-m font-medium tracking-wide">KABUPATEN GUNUNGKIDUL</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-l font-bold transition-colors hover:text-gk-blue ${
                  isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-gray-100'
                } ${location.pathname === item.href ? 'text-gk-green font-bold' : ''}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Button Pengaduan */}
            {/* <button 
              onClick={handleComplaintClick}
              className="bg-gk-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition shadow-lg flex items-center gap-2"
            >
              <Phone size={16} />
              Pengaduan
            </button> */}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gk-green hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            {/* Button Pengaduan Minimize */}
            {/* <div className="pt-4 border-t border-gray-100">
               <button 
                onClick={handleComplaintClick}
                className="w-full bg-gk-green text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
               >
                  <Phone size={16} />
                  Layanan Pengaduan
               </button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
