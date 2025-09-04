import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ExternalLink, ArrowLeft } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

interface ProductDetailProps {
  productId: number;
  amazonLink: string;
  productImage: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, amazonLink, productImage }) => {
  const { t } = useTranslation(`product${productId}`);
  const { t: tProducts } = useTranslation('products');
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Generate image paths based on productId
  const getProductImages = (id: number) => {
    const basePath = `/images/ProductImage${id}`;
    return [
      `${basePath}.jpg`,
      `${basePath}.2.jpg`,
      `${basePath}.3.jpg`,
      `${basePath}.4.jpg`
    ];
  };

  const productImages = getProductImages(productId);

  const tabs = [
    { id: 'description', label: t('productDescription') },
    { id: 'ingredients', label: t('ingredients') },
    { id: 'general', label: t('generalInformation') }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'description':
        return t('descriptionContent');
      case 'ingredients':
        return t('ingredientsContent');
      case 'general':
        return t('generalInfoContent').split('\n').map((line: string, index: number) => (
          <div key={index} className="mb-2">{line}</div>
        ));
      default:
        return t('descriptionContent');
    }
  };

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
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Products Button */}
        <div className="mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#0089CF] hover:text-[#0070A3] font-medium transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            {tProducts('backToProducts')}
          </Link>
        </div>
        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 -gap-16 p-6 lg:p-8">
            {/* Left Side - Product Images with Carousel */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* Thumbnail Images - Optimized for 4:5 ratio */}
              <div className="flex flex-col gap-2">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`w-12 h-15 cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index 
                        ? 'border-[#0089CF] shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${t('title')} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image - Optimized container for 1:2 ratio (first image) */}
              <div className="flex-1 max-w-xs">
                <div className={`w-full border border-gray-200 rounded-lg bg-white p-8 flex items-center justify-center ${
                  selectedImage === 0 ? 'min-h-80' : 'max-h-80'
                }`}>
                  <OptimizedImage
                    src={productImages[selectedImage]}
                    alt={t('title')}
                    className={`object-contain ${
                      selectedImage === 0 ? 'w-36 h-auto' : 'max-w-full max-h-full'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Product Info with negative gap */}
            <div className="space-y-6 lg:-ml-12 flex flex-col justify-center">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {t('title')}
                </h1>
                
                {/* Category */}
                <div className="inline-block mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {t('category')}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {renderStars(parseFloat(t('rating')))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {t('rating')} ({t('ratingsCount')} {t('ratings', { ns: 'products' })})
                  </span>
                </div>

                                 {/* Price and Buy Button */}
                 <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                   <span className="text-2xl font-bold text-[#0089CF]">
                     {t('price')}
                   </span>
                   <a
                     href={amazonLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                   >
                     <ExternalLink size={14} />
                     {t('buyOnAmazon')}
                   </a>
                 </div>

                 {/* About the item section */}
                 <div className="mt-6">
                   <h3 className="text-lg font-semibold text-gray-900 mb-3">
                     {t('aboutThisItem')}
                   </h3>
                   <div className="prose max-w-none">
                     <p className="text-gray-700 leading-relaxed text-sm">
                       {t('aboutContent')}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t border-gray-200">
            <div className="flex flex-wrap border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#0089CF] border-b-2 border-[#0089CF] bg-blue-50'
                      : 'text-gray-600 hover:text-[#0089CF] hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 lg:p-8">
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {getTabContent()}
                </div>
              </div>
                         </div>
           </div>
         </div>

         {/* Explore More Products Section */}
         <div className="mt-8 bg-white rounded-xl shadow-lg p-6 lg:p-8">
           <div className="text-center">
             <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
               {tProducts('exploreMoreProducts')}
             </h2>
             <p className="text-gray-600 mb-6 text-sm lg:text-base">
               {tProducts('exploreMoreProductsDesc')}
             </p>
             <Link 
               href="/products"
               className="inline-flex items-center gap-2 bg-[#0089CF] hover:bg-[#0070A3] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
             >
               {tProducts('viewAllProducts')}
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
};

export default ProductDetail;