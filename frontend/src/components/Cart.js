import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import OrderForm from './OrderForm';

const Cart = () => {
  const { language, t } = useLanguage();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  return (
    <>
      {/* Hidden trigger for programmatic opening */}
      <button 
        data-cart-trigger 
        onClick={() => setIsCartOpen(true)} 
        className="hidden"
        aria-hidden="true"
      />

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6" />
              {t('Количка', 'Shopping Cart')}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">
                  {t('Количката е празна', 'Your cart is empty')}
                </p>
                <Button 
                  className="mt-4 bg-red-600 hover:bg-red-700"
                  onClick={() => setIsCartOpen(false)}
                >
                  {t('Започни да поръчваш', 'Start Ordering')}
                </Button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={language === 'bg' ? item.name_bg : item.name_en}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {language === 'bg' ? item.name_bg : item.name_en}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          €{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          €{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold mb-4">
                    <span>{t('Общо:', 'Total:')}</span>
                    <span className="text-red-600">€{getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                      size="lg"
                    >
                      {t('Завърши поръчката', 'Complete Order')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        {t('Завърши поръчката', 'Complete Order')}
                      </DialogTitle>
                    </DialogHeader>
                    <OrderForm />
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
