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
      {/* Background Image with darker overlay for tavern feel */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        {/* Wood texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(92, 64, 51, 0.3) 0px, transparent 2px, transparent 4px, rgba(92, 64, 51, 0.3) 6px)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Decorative top border */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          <span className="mx-4 text-yellow-600 text-2xl">❖</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-2xl" style={{fontFamily: "'Playfair Display', serif"}}>
          {t(
            'Автентична пица и българска кухня в сърцето на Драгалевци',
            'Authentic Pizza and Bulgarian Cuisine in the Heart of Dragalevtsi'
          )}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto drop-shadow-lg" style={{fontFamily: "'Lora', serif"}}>
          {t(
            'Добра храна, топла атмосфера и незабравими вечери',
            'Good food, warm atmosphere and unforgettable evenings'
          )}
        </p>

        {/* Decorative middle border */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-amber-600/30"
            onClick={() => scrollToSection('menu')}
          >
            {t('Виж менюто', 'View Menu')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent backdrop-blur-sm border-2 border-amber-100/80 text-white hover:bg-amber-100/10 hover:border-amber-100 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            onClick={() => scrollToSection('contact')}
          >
            {t('Направи резервация', 'Make a Reservation')}
          </Button>
        </div>

        {/* Info Bar with tavern styling */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-amber-900/40 backdrop-blur-md p-6 rounded-lg border border-amber-700/30 hover:bg-amber-900/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">⭐ 4.3</div>
            <div className="text-sm text-amber-100">
              {t('3,400+ отзива', '3,400+ reviews')}
            </div>
          </div>
          <div className="bg-amber-900/40 backdrop-blur-md p-6 rounded-lg border border-amber-700/30 hover:bg-amber-900/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">€15–20</div>
            <div className="text-sm text-amber-100">
              {t('на човек', 'per person')}
            </div>
          </div>
          <div className="bg-amber-900/40 backdrop-blur-md p-6 rounded-lg border border-amber-700/30 hover:bg-amber-900/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">00:00</div>
            <div className="text-sm text-amber-100">
              {t('Отворено до', 'Open until')}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-100/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-100/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
