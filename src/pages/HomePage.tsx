import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import DeliveryProcess from '../components/DeliveryProcess';
import SpecialOffer from '../components/SpecialOffer';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <DeliveryProcess />
      <SpecialOffer />
    </main>
  );
};

export default HomePage;