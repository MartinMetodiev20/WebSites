import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../mock';
import { Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label_bg: 'Начало', label_en: 'Home' },
    { id: 'about', label_bg: 'За нас', label_en: 'About' },
    { id: 'menu', label_bg: 'Меню', label_en: 'Menu' },
    { id: 'gallery', label_bg: 'Галерия', label_en: 'Gallery' },
    { id: 'reviews', label_bg: 'Отзиви', label_en: 'Reviews' },
    { id: 'contact', label_bg: 'Контакт', label_en: 'Contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {t(
                'Автентична българска кухня и ароматна италианска пица в сърцето на Драгалевци',
                'Authentic Bulgarian cuisine and aromatic Italian pizza in the heart of Dragalevtsi'
              )}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">⭐ {restaurantInfo.rating}</span>
              <span className="text-gray-400 text-sm">
                ({restaurantInfo.reviewCount.toLocaleString()}+ {t('отзива', 'reviews')})
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Бързи връзки', 'Quick Links')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'bg' ? link.label_bg : link.label_en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Контакти', 'Contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {language === 'bg' ? restaurantInfo.address_bg : restaurantInfo.address_en}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a 
                  href="mailto:info@chichovtsi.bg"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@chichovtsi.bg
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Работно време', 'Opening Hours')}
            </h4>
            <p className="text-gray-400 mb-6">
              {language === 'bg' ? restaurantInfo.hours_bg : restaurantInfo.hours_en}
            </p>
            <h4 className="text-lg font-semibold mb-4">
              {t('Последвайте ни', 'Follow Us')}
            </h4>
            <a 
              href={restaurantInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {restaurantInfo.name}. {t('Всички права запазени.', 'All rights reserved.')}
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                {t('Политика за поверителност', 'Privacy Policy')}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                {t('Условия за ползване', 'Terms of Service')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
