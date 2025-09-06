import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product2Page() {
  return (
    <>
      <Head>
        <title>Nutriota Propolis | Premium Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Propolis - a natural immune system booster with powerful antioxidant properties. 1000mg per tablet, 180 tablets per bottle." />
        <meta name="keywords" content="propolis, immune system, antioxidant, natural supplement, dietary supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId={2}
        amazonLink="https://www.amazon.es/dp/B09FFFSX3K"
        productImage="https://m.media-amazon.com/images/I/615c8u9DpSL._AC_SX679_.jpg"
      />
    </>
  );
}
