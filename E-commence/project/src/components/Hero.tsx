import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover
                <span className="text-amber-600"> Handcrafted</span>
                <br />
                Treasures
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect with talented local artisans and discover unique, handmade products 
                that tell a story. Each piece is crafted with passion and attention to detail.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/categories"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center font-semibold"
              >
                Browse Categories
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">Local Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2K+</div>
                <div className="text-sm text-gray-600">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Handmade crafts"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/6394571/pexels-photo-6394571.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Ceramic pottery"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Wooden crafts"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8980845/pexels-photo-8980845.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Handmade jewelry"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}