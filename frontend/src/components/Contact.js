import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Clock, Facebook, Mail, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - will be replaced with actual API call
    setTimeout(() => {
      toast.success(
        language === 'bg'
          ? 'Вашата резервация е изпратена! Ще се свържем с вас скоро.'
          : 'Your reservation has been sent! We will contact you soon.'
      );
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('Резервация и контакти', 'Reservation & Contact')}
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Резервирайте маса или се свържете с нас',
              'Reserve a table or get in touch with us'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
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

          {/* Reservation Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                {t('Резервирайте маса', 'Reserve a Table')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="res-name">
                      {t('Име', 'Name')} <span className="text-amber-800">*</span>
                    </Label>
                    <Input
                      id="res-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('Вашето име', 'Your name')}
                    />
                  </div>
                  <div>
                    <Label htmlFor="res-phone">
                      {t('Телефон', 'Phone')} <span className="text-amber-800">*</span>
                    </Label>
                    <Input
                      id="res-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+359..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="res-email">
                    {t('Имейл', 'Email')}
                  </Label>
                  <Input
                    id="res-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="res-date">
                      {t('Дата', 'Date')} <span className="text-amber-800">*</span>
                    </Label>
                    <Input
                      id="res-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="res-time">
                      {t('Час', 'Time')} <span className="text-amber-800">*</span>
                    </Label>
                    <Input
                      id="res-time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="res-guests">
                      {t('Гости', 'Guests')} <span className="text-amber-800">*</span>
                    </Label>
                    <Input
                      id="res-guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="res-message">
                    {t('Забележки', 'Notes')}
                  </Label>
                  <Textarea
                    id="res-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('Специални изисквания...', 'Special requirements...')}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t('Изпращане...', 'Submitting...')}
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      {t('Изпрати резервация', 'Send Reservation')}
                    </>
                  )}
                </Button>
              </form>
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
