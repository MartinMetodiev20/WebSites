import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Phone, Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label_bg: 'Начало', label_en: 'Home' },
    { id: 'about', label_bg: 'За нас', label_en: 'About' },
    { id: 'menu', label_bg: 'Меню', label_en: 'Menu' },
    { id: 'gallery', label_bg: 'Галерия', label_en: 'Gallery' },
    { id: 'reviews', label_bg: 'Отзиви', label_en: 'Reviews' },
    { id: 'contact', label_bg: 'Контакт', label_en: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-amber-50/98 via-stone-50/98 to-amber-50/98 backdrop-blur-md shadow-lg border-b-2 border-amber-900/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with traditional styling */}
          <div className="flex items-center">
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-amber-900' : 'text-white drop-shadow-lg'
            }`} style={{fontFamily: "'Playfair Display', serif"}}>
              {t('Чичовци', 'Chichovtsi')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium hover:text-amber-700 ${
                  isScrolled ? 'text-amber-900' : 'text-white drop-shadow'
                }`}
                style={{fontFamily: "'Lora', serif"}}
              >
                {t(item.label_bg, item.label_en)}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a href="tel:+35929673967" className="hidden md:block">
              <Button 
                variant="ghost" 
                size="icon"
                className={`${isScrolled ? 'text-amber-900 hover:bg-amber-100' : 'text-white hover:bg-white/10'}`}
              >
                <Phone className="h-5 w-5" />
              </Button>
            </a>

            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className={`px-2 ${isScrolled ? 'text-amber-900 hover:bg-amber-100' : 'text-white hover:bg-white/10'}`}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-sm font-semibold">
                <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
                <span className="opacity-50">/</span>
                <span className={language === 'bg' ? 'opacity-100' : 'opacity-50'}>BG</span>
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? 'text-amber-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-b from-amber-50 to-stone-50 border-t border-amber-900/10 shadow-xl">
            <nav className="flex flex-col py-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-amber-900 hover:bg-amber-100 transition-colors font-medium"
                  style={{fontFamily: "'Lora', serif"}}
                >
                  {t(item.label_bg, item.label_en)}
                </button>
              ))}
              <a 
                href="tel:+35929673967" 
                className="px-4 py-3 text-left text-amber-900 hover:bg-amber-100 transition-colors flex items-center font-medium"
              >
                <Phone className="h-4 w-4 mr-2" />
                {t('Обади се', 'Call Us')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
