import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product3Page() {
  return (
    <>
      <Head>
        <title>Nutriota Chromium Picolinate | Premium Minerals | Nutriota</title>
        <meta name="description" content="Discover Nutriota Chromium Picolinate - a high-quality dietary supplement designed to support healthy blood sugar metabolism and energy production. 250mcg per tablet, 365 tablets per bottle." />
        <meta name="keywords" content="chromium picolinate, blood sugar support, energy metabolism, dietary supplement, Nutriota, minerals" />
      </Head>
      <ProductDetail 
        productId={3}
        amazonLink="https://www.amazon.es/dp/B0DCZJDCKH"
        productImage="https://m.media-amazon.com/images/I/616nEDc2B6L._AC_SX679_.jpg"
      />
    </>
  );
}
