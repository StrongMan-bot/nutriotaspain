import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

import { ExternalLink } from 'lucide-react'; // Import ExternalLink icon

const Products = () => {
  const { t, i18n } = useTranslation('products');
  const router = useRouter();
  const { search, category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState('allProducts');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);


  // Product data from JSON with ratings added
  const products = [
    {
      "id": 1,
      "category": t('supplements'),
      "name": "Nutriota Alpha Lipoic Acid | 500 mg (180 Capsules)",
      "price": "€16.99",
      "image": "https://m.media-amazon.com/images/I/61PyhQAGXDL._AC_SX679_.jpg",
      "link": "https://www.amazon.es/dp/B09NXNVBHZ",
      "rating": 4.5,
      "reviews": "150+ " + t('ratings')
    },
    {
      "id": 2,
      "category": t('supplements'),
      "name": "Nutriota Propolis | 1000 mg (180 Tablets)",
      "price": "€16.99",
      "image": "https://m.media-amazon.com/images/I/615c8u9DpSL._AC_SX679_.jpg",
      "link": "https://www.amazon.es/dp/B09FFFSX3K",
      "rating": 4.4,
      "reviews": "150+ " + t('ratings')
    },
    {
      "id": 3,
      "category": t('minerals'),
      "name": "Nutriota Chromium Picolinate | 250 mcg (365 Tablets)",
      "price": "€16.99",
      "image": "https://m.media-amazon.com/images/I/616nEDc2B6L._AC_SX679_.jpg",
      "link": "https://www.amazon.es/dp/B0DCZJDCKH",
      "rating": 4.4,
      "reviews": "30+ " + t('ratings')
    }
  ];

  const categories = ['allProducts', 'minerals', 'supplements'];

  // Handle category filtering from URL params
  useEffect(() => {
    if (category) {
      // Map URL category to internal category key
      const categoryMap: { [key: string]: string } = {
        'All Products': 'allProducts',
        'Minerals': 'minerals',
        'Supplements': 'supplements'
      };
      
      const internalCategory = categoryMap[category as string];
      if (internalCategory) {
        setSelectedCategory(internalCategory);
      }
    }
  }, [category]);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === 'allProducts') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === t(selectedCategory)));
    }
  }, [selectedCategory, t]);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'allProducts') {
      router.push('/products');
    } else {
      // Map internal category key to English for URL
      const reverseCategoryMap: { [key: string]: string } = {
        'allProducts': 'All Products',
        'minerals': 'Minerals',
        'vitamins': 'Vitamins',
        'supplements': 'Supplements',
        'herbalSupplements': 'Herbal Supplements'
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
                    {t(category)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {t(selectedCategory)}
              </h1>
              <p className="text-sm lg:text-base text-gray-600">
                {selectedCategory === 'allProducts' 
                  ? t('showingAll', { count: filteredProducts.length })
                  : t('showingCategory', { count: filteredProducts.length, category: t(selectedCategory) })
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