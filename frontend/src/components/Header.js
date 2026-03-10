import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Phone, Globe, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { getTotalItems, setIsCartOpen } = useCart();
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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {t('Чичовци', 'Chichovtsi')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-red-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
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
                className={isScrolled ? 'text-gray-700' : 'text-white'}
              >
                <Phone className="h-5 w-5" />
              </Button>
            </a>

            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleLanguage}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-sm">{language.toUpperCase()}</span>
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className={`relative ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col py-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {t(item.label_bg, item.label_en)}
                </button>
              ))}
              <a 
                href="tel:+35929673967" 
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors flex items-center"
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
