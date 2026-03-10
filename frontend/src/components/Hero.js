import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          {t(
            'Автентична пица и българска кухня в сърцето на Драгалевци',
            'Authentic Pizza and Bulgarian Cuisine in the Heart of Dragalevtsi'
          )}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {t(
            'Добра храна, топла атмосфера и незабравими вечери',
            'Good food, warm atmosphere and unforgettable evenings'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('menu')}
          >
            {t('Виж менюто', 'View Menu')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            {t('Направи резервация', 'Make a Reservation')}
          </Button>
        </div>

        {/* Info Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">⭐ 4.3</div>
            <div className="text-sm">
              {t('3,400+ отзива', '3,400+ reviews')}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">€15–20</div>
            <div className="text-sm">
              {t('на човек', 'per person')}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">00:00</div>
            <div className="text-sm">
              {t('Отворено до', 'Open until')}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
