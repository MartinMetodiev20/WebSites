import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { reviews, restaurantInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('Отзиви', 'Reviews')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => (
                <Star 
                  key={star} 
                  className={`h-8 w-8 ${
                    star <= Math.floor(restaurantInfo.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : star - 0.5 <= restaurantInfo.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">
              {restaurantInfo.rating}
            </span>
          </div>
          <p className="text-gray-600">
            {t(
              `${restaurantInfo.reviewCount.toLocaleString()}+ отзива в Google`,
              `${restaurantInfo.reviewCount.toLocaleString()}+ reviews on Google`
            )}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map(review => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{language === 'bg' ? review.text_bg : review.text_en}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {language === 'bg' ? review.name : review.name_en}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString(language === 'bg' ? 'bg-BG' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=Chichovtsi+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            {t('Виж всички отзиви в Google', 'See all reviews on Google')}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
