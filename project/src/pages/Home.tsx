import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';

export function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}