import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { menuData } from '../mock';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

const Menu = () => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('pizza');

  const categories = [
    { id: 'pizza', label_bg: 'Пици', label_en: 'Pizza' },
    { id: 'bulgarian', label_bg: 'Българска кухня', label_en: 'Bulgarian Cuisine' },
    { id: 'mains', label_bg: 'Основни ястия', label_en: 'Main Courses' },
    { id: 'drinks', label_bg: 'Напитки', label_en: 'Drinks' }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(
      language === 'bg' 
        ? `${item.name_bg} е добавен в количката` 
        : `${item.name_en} added to cart`
    );
  };

  const MenuItem = ({ item }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={language === 'bg' ? item.name_bg : item.name_en}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {language === 'bg' ? item.name_bg : item.name_en}
          </h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 min-h-[48px]">
          {language === 'bg' ? item.description_bg : item.description_en}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-800">
            €{item.price.toFixed(2)}
          </div>
          <Button 
            onClick={() => handleAddToCart(item)}
            className="bg-amber-700 hover:bg-amber-800 text-white transition-all duration-300 hover:scale-105"
          >
            <Plus className="h-4 w-4 mr-2" />
            {t('Добави', 'Add')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('Нашето меню', 'Our Menu')}
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Разгледайте нашите специалитети - от автентична италианска пица до традиционни български ястия',
              'Explore our specialties - from authentic Italian pizza to traditional Bulgarian dishes'
            )}
          </p>
        </div>

        <Tabs defaultValue="pizza" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-1 bg-gray-100">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="text-sm md:text-base py-3 data-[state=active]:bg-amber-700 data-[state=active]:text-white transition-all"
              >
                {language === 'bg' ? cat.label_bg : cat.label_en}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData[cat.id].map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Order Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              const cart = document.querySelector('[data-cart-trigger]');
              if (cart) cart.click();
            }}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {t('Виж количката', 'View Cart')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
