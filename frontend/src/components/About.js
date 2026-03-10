import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('За нас', 'About Us')}
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t(
                  'Пицария Ресторант "Чичовци" е любимо място в Драгалевци, където традиционната българска кухня се среща с ароматна италианска пица.',
                  'Pizzeria Restaurant "Chichovtsi" is a favorite place in Dragalevtsi, where traditional Bulgarian cuisine meets aromatic Italian pizza.'
                )}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t(
                  'Нашият ресторант предлага уютна атмосфера, качествени продукти и приятелско обслужване. Всяка вечер при нас е специална.',
                  'Our restaurant offers a cozy atmosphere, quality products and friendly service. Every evening with us is special.'
                )}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-gray-600">
                    {t('Години опит', 'Years of Experience')}
                  </div>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">
                    {t('Вкусни ястия', 'Delicious Dishes')}
                  </div>
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1771554753130-9e63a3f63e4d" 
                    alt="Restaurant interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg h-48 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1677903784547-963c38f74bfc" 
                    alt="Grilled food"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-lg shadow-lg h-48 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e" 
                    alt="Pizza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1755632540801-8eaf8eb22e1d" 
                    alt="Outdoor dining"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
