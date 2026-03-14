import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryImages } from '../mock';

const Gallery = () => {
  const { language, t } = useLanguage();

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('Галерия', 'Gallery')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Разгледайте нашата уютна атмосфера и вкусни ястия',
              'Explore our cozy atmosphere and delicious dishes'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative h-full min-h-[200px]">
                <img 
                  src={image.url}
                  alt={language === 'bg' ? image.alt_bg : image.alt_en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {language === 'bg' ? image.alt_bg : image.alt_en}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
