import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product1Page() {
  return (
    <>
      <Head>
        <title>Nutriota Alpha Lipoic Acid | Premium Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Alpha Lipoic Acid - a powerful antioxidant supplement designed to support healthy blood sugar levels and nervous system function. 500mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="alpha lipoic acid, antioxidant, blood sugar support, nervous system, dietary supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId={1}
        amazonLink="https://www.amazon.es/dp/B09NXNVBHZ"
        productImage="https://m.media-amazon.com/images/I/61PyhQAGXDL._AC_SX679_.jpg"
      />
    </>
  );
}
