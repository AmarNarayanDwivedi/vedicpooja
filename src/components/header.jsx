import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext.jsx';
import logo from '../assets/logo.webp';

const FlamingSunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative group font-semibold py-2 ${
        isActive ? 'text-[#E67E22]' : 'text-gray-700'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E67E22] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
    </Link>
  );
};

export default function Header() {
  const { t, language, setLanguage } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'gj', name: 'ગુજરાતી' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-sticky fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled
        ? 'header-scrolled shadow-lg'
        : 'bg-white/70 backdrop-blur-md shadow-md'
    }`}>
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 -ml-2" onClick={closeMenu}>
          <img src={logo} alt="Vedic Pooja Logo" className="h-8 w-8" />
          <div
            className="text-2xl font-bold text-[#800000]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Vedic Pooja
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/">{t.navHome}</NavLink>
          <NavLink to="/about">{t.navAbout}</NavLink>
          <NavLink to="/pooja">{t.navServices}</NavLink>
          <NavLink to="/astrology">{t.navAstrology}</NavLink>
          <a href="/#testimonials" onClick={(e)=>{
            if(window.location.pathname!=='/'){
              e.preventDefault();
              window.location.assign('/#testimonials');
            }
          }} className="relative group font-semibold py-2 text-gray-700 hover:text-[#E67E22] transition-colors">
            <span className="relative z-10">{t.navTestimonials}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E67E22] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a>
          <NavLink to="/blog">{t.navBlog}</NavLink>
          <a href="/#contact" onClick={(e)=>{
            if(window.location.pathname!=='/'){
              e.preventDefault();
              window.location.assign('/#contact');
            }
          }} className="relative group font-semibold py-2 text-gray-700 hover:text-[#E67E22] transition-colors">
            <span className="relative z-10">{t.navContact}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E67E22] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const order = languages.map(l => l.code);
              const idx = order.indexOf(language);
              const next = order[(idx + 1) % order.length];
              setLanguage(next);
            }}
            className="relative group bg-transparent border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#E67E22]"
            aria-label="Change language"
          >
            {languages.find(l => l.code === language)?.name}
            <span className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"/>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#E67E22] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#E67E22] hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6 px-6 py-4 bg-white">
            <Link to="/" onClick={closeMenu} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navHome}
            </Link>
            <Link to="/about" onClick={closeMenu} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navAbout}
            </Link>
            <Link to="/pooja" onClick={closeMenu} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navServices}
            </Link>
            <Link to="/astrology" onClick={closeMenu} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navAstrology}
            </Link>
            <a href="/#testimonials" onClick={(e)=>{
              closeMenu();
              if(window.location.pathname!=='/'){
                e.preventDefault();
                window.location.assign('/#testimonials');
              }
            }} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navTestimonials}
            </a>
            <Link to="/blog" onClick={closeMenu} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navBlog}
            </Link>
            <a href="/#contact" onClick={(e)=>{
              closeMenu();
              if(window.location.pathname!=='/'){
                e.preventDefault();
                window.location.assign('/#contact');
              }
            }} className="text-lg font-semibold text-gray-700 hover:text-[#E67E22] transition-colors py-2 border-b border-gray-300 w-full">
              {t.navContact}
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        >
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <img src={logo} alt="Vedic Pooja Logo" className="h-8 w-8" />
            <div
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vedic Pooja
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
