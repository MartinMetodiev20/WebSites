import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('Контакти', 'Contact')}
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('Свържете се с нас', 'Get in touch with us')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('Адрес', 'Address')}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'bg' ? restaurantInfo.address_bg : restaurantInfo.address_en}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('Телефон', 'Phone')}
                  </h3>
                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="text-amber-800 hover:text-amber-900 font-medium"
                  >
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('Работно време', 'Opening Hours')}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'bg' ? restaurantInfo.hours_bg : restaurantInfo.hours_en}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Facebook className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('Социални мрежи', 'Social Media')}
                  </h3>
                  <a
                    href={restaurantInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-amber-900 font-medium"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={restaurantInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
