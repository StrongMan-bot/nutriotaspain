import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

import { Star, ExternalLink } from 'lucide-react'; // Import Star and ExternalLink icons

const Products = () => {
  const { t, i18n } = useTranslation('products');
  const router = useRouter();
  const { search, category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState(t('allProducts'));
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // List of best seller product names
  const bestSellerProducts = [
    "Nutriota Chromium Picolinate | 250 mcg (365 Tablets)",
    "Nutriota Propolis | 1000 mg (180 Capsules)",
    "Nutriota Alpha Lipoic Acid | 500 mg (180 Capsules)",
    "Nutriota Echinacea | 500 mg (240 Tablets)"
  ];

  // Product data from JSON with ratings added
  const products = [
    {
      "id": 1,
      "category": t('minerals'),
      "name": "Nutriota Chromium Picolinate | 250 mcg (365 Tablets)",
      "price": "€23.79",
      "image": "https://m.media-amazon.com/images/I/61OkL2nfd2L._AC_SX679_.jpg",
      "link": "https://www.amazon.it/dp/B0C8G7Y1D6",
      "rating": 4.5,
      "reviews": "300+ " + t('ratings')
    },
    {
      "id": 2,
      "category": t('vitamins'),
      "name": "Nutriota Vitamin B6 |10 mg (180 Capsules)",
      "price": "€15.95",
      "image": "https://m.media-amazon.com/images/I/61y0r7qxl7L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B0CNKNC88Z",
      "rating": 4.5,
      "reviews": "100+ " + t('ratings')
    },
    {
      "id": 3,
      "category": t('vitamins'),
      "name": "Nutriota Vitamin B3 (Nicotinamide) | 54 mg (180 Capsules)",
      "price": "€13.90",
      "image": "https://m.media-amazon.com/images/I/61zrLu+FSbL._AC_SY300_SX300_.jpg",
      "link": "https://www.amazon.it/dp/B0CK4XFPP9",
      "rating": 4.4,
      "reviews": "100+ " + t('ratings')
    },
    {
      "id": 4,
      "category": t('supplements'),
      "name": "Nutriota Propolis | 1000 mg (180 Capsules)",
      "price": "€17.79",
      "image": "https://m.media-amazon.com/images/I/617gq7K4abL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B08TB387M9",
      "rating": 4.3,
      "reviews": "200+ " + t('ratings')
    },
    {
      "id": 5,
      "category": t('supplements'),
      "name": "Nutriota Alpha Lipoic Acid | 500 mg (180 Capsules)",
      "price": "€29.90",
      "image": "https://m.media-amazon.com/images/I/61GtNp-NvGL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B081D2SPVF",
      "rating": 4.5,
      "reviews": "650+ " + t('ratings')
    },
    {
      "id": 6,
      "category": t('vitamins'),
      "name": "Nutriota Vitamin B1 | 25 mg (180 Capsules)",
      "price": "€11.99",
      "image": "https://m.media-amazon.com/images/I/61VsBeBnpML.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B0CNKKJF5M",
      "rating": 4.5,
      "reviews": "100+ " + t('ratings')
    },
    {
      "id": 7,
      "category": t('herbalSupplements'),
      "name": "Nutriota Echinacea | 500 mg (240 Tablets)",
      "price": "€19.79",
      "image": "https://m.media-amazon.com/images/I/61330aWtIEL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B09PNK3GRH",
      "rating": 4.5,
      "reviews": "150+ " + t('ratings')
    },
    {
      "id": 8,
      "category": t('minerals'),
      "name": "Nutriota Selencora (Selenium w/ Zinc and Copper) | (180 Capsules)",
      "price": "€10.99",
      "image": "https://m.media-amazon.com/images/I/61Sdenl4g5L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B0CT64JJ1N",
      "rating": 4.4,
      "reviews": "50+ " + t('ratings')
    },
    {
      "id": 9,
      "category": t('supplements'),
      "name": "Nutriota Royal Jelly | 250 mg (120 Capsules)",
      "price": "€24.99",
      "image": "https://m.media-amazon.com/images/I/61o7Po1LO5L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.it/dp/B08W44Q351",
      "rating": 4.4,
      "reviews": "150+ " + t('ratings')
    }
  ];

  const categories = [t('allProducts'), t('minerals'), t('vitamins'), t('supplements'), t('herbalSupplements')];

  // Handle category filtering from URL params
  useEffect(() => {
    if (category) {
      // Map URL category to translated category
      const categoryMap: { [key: string]: string } = {
        'All Products': t('allProducts'),
        'Minerals': t('minerals'),
        'Vitamins': t('vitamins'),
        'Supplements': t('supplements'),
        'Herbal Supplements': t('herbalSupplements')
      };
      
      const translatedCategory = categoryMap[category as string];
      if (translatedCategory) {
        setSelectedCategory(translatedCategory);
      }
    }
  }, [category, t]);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === t('allProducts')) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, t]);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === t('allProducts')) {
      router.push('/products');
    } else {
      // Map translated category back to English for URL
      const reverseCategoryMap: { [key: string]: string } = {
        [t('allProducts')]: 'All Products',
        [t('minerals')]: 'Minerals',
        [t('vitamins')]: 'Vitamins',
        [t('supplements')]: 'Supplements',
        [t('herbalSupplements')]: 'Herbal Supplements'
      };
      const englishCategory = reverseCategoryMap[category] || category;
      router.push(`/products?category=${encodeURIComponent(englishCategory)}`);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    // Fill remaining stars with empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="products-page min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Categories - Mobile: Top, Desktop: Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-28 bg-white rounded-xl shadow-lg p-4 lg:p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t('categories')}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg font-medium transition-all duration-200 text-sm lg:text-base ${
                      selectedCategory === category
                        ? 'bg-[#0089CF] text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#0089CF]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory}
              </h1>
              <p className="text-sm lg:text-base text-gray-600">
                {selectedCategory === t('allProducts') 
                  ? t('showingAll', { count: filteredProducts.length })
                  : t('showingCategory', { count: filteredProducts.length, category: selectedCategory })
                }
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  {/* Image - Clickable */}
                  <Link href={`/product${product.id}`} className="block hover:opacity-80 transition-opacity duration-200">
                    <div className="relative h-48 lg:h-64 overflow-hidden">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-[#0089CF] px-2 py-1 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Best Seller Badge */}
                      {bestSellerProducts.includes(product.name) && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0089CF] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Star size={12} className="fill-current" />
                            {t('bestSeller')}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  {/* Content area - Not clickable except for product name */}
                  <div className="p-4 lg:p-6">
                    {/* Product name - Clickable */}
                    <Link href={`/product${product.id}`} className="block">
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[#0089CF] transition-colors duration-200 cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    
                    {/* Price, Amazon button, and ratings - Not clickable */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg lg:text-xl font-bold text-[#0089CF]">
                          {product.price}
                        </span>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded-md text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          {t('buyOnAmazon')}
                        </a>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-xs text-gray-600">
                          {product.reviews}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-500 font-bold text-xl">N</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('noProducts')}</h3>
                <p className="text-gray-600">{t('noProductsDesc')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;