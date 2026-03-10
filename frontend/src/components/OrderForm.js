import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const OrderForm = () => {
  const { language, t } = useLanguage();
  const { cartItems, getTotalPrice, clearCart, setIsCartOpen } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    deliveryType: 'delivery'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order submission - will be replaced with actual API call
    setTimeout(() => {
      toast.success(
        language === 'bg'
          ? 'Поръчката е изпратена успешно! Ще се свържем с вас скоро.'
          : 'Order submitted successfully! We will contact you soon.'
      );
      clearCart();
      setIsCartOpen(false);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
        deliveryType: 'delivery'
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">
          {t('Вашата поръчка:', 'Your Order:')}
        </h3>
        <div className="space-y-2 text-sm">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>
                {language === 'bg' ? item.name_bg : item.name_en} x{item.quantity}
              </span>
              <span className="font-medium">
                €{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between font-bold text-base">
            <span>{t('Общо:', 'Total:')}</span>
            <span className="text-red-600">€{getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Delivery Type */}
      <div>
        <Label className="mb-3 block">
          {t('Тип на поръчката', 'Order Type')}
        </Label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'delivery' }))}
            className={`p-4 border-2 rounded-lg transition-all ${
              formData.deliveryType === 'delivery'
                ? 'border-red-600 bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold">
              {t('Доставка', 'Delivery')}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'pickup' }))}
            className={`p-4 border-2 rounded-lg transition-all ${
              formData.deliveryType === 'pickup'
                ? 'border-red-600 bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold">
              {t('Вземане от място', 'Pickup')}
            </div>
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">
            {t('Име', 'Name')} <span className="text-red-600">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('Вашето име', 'Your name')}
          />
        </div>
        <div>
          <Label htmlFor="phone">
            {t('Телефон', 'Phone')} <span className="text-red-600">*</span>
          </Label>
          <Input
            id="phone"
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
        <Label htmlFor="email">
          {t('Имейл', 'Email')}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      {formData.deliveryType === 'delivery' && (
        <div>
          <Label htmlFor="address">
            {t('Адрес за доставка', 'Delivery Address')} <span className="text-red-600">*</span>
          </Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required={formData.deliveryType === 'delivery'}
            placeholder={t('Улица, номер, етаж...', 'Street, number, floor...')}
            rows={3}
          />
        </div>
      )}

      <div>
        <Label htmlFor="notes">
          {t('Забележки', 'Notes')}
        </Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder={t('Допълнителни инструкции...', 'Additional instructions...')}
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t('Изпращане...', 'Submitting...')}
          </>
        ) : (
          t('Изпрати поръчката', 'Submit Order')
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        {t(
          'Ще се свържем с вас за потвърждение на поръчката',
          'We will contact you to confirm your order'
        )}
      </p>
    </form>
  );
};

export default OrderForm;
