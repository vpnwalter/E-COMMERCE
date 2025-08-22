import { Product, User, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Handwoven Ceramic Bowl',
    description: 'Beautiful handcrafted ceramic bowl perfect for serving and display.',
    price: 4500.00,
    image: 'https://images.pexels.com/photos/6394571/pexels-photo-6394571.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Ceramics',
    artisan: {
      name: 'Maria Rodriguez',
      location: 'Santa Fe, NM'
    },
    stock: 12,
    featured: true
  },
  {
    id: '2',
    name: 'Macrame Plant Hanger',
    description: 'Intricate macrame design perfect for hanging your favorite plants.',
    price: 2800.00,
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home Decor',
    artisan: {
      name: 'Jennifer Adams',
      location: 'Portland, OR'
    },
    stock: 8,
    featured: false
  },
  {
    id: '3',
    name: 'Wooden Cutting Board',
    description: 'Premium hardwood cutting board with natural finish and food-safe coating.',
    price: 6500.00,
    image: 'https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Kitchenware',
    artisan: {
      name: 'David Chen',
      location: 'Asheville, NC'
    },
    stock: 15,
    featured: true
  },
  {
    id: '4',
    name: 'Hand-knitted Wool Scarf',
    description: 'Soft merino wool scarf with intricate cable knit pattern.',
    price: 8500.00,
    image: 'https://images.pexels.com/photos/7139925/pexels-photo-7139925.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    artisan: {
      name: 'Sarah Thompson',
      location: 'Burlington, VT'
    },
    stock: 6,
    featured: false
  },
  {
    id: '5',
    name: 'Artisan Leather Wallet',
    description: 'Handcrafted leather wallet with vintage brass hardware.',
    price: 7800.00,
    image: 'https://images.pexels.com/photos/5816296/pexels-photo-5816296.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    artisan: {
      name: 'Michael Torres',
      location: 'Austin, TX'
    },
    stock: 20,
    featured: true
  },
  {
    id: '6',
    name: 'Handmade Silver Necklace',
    description: 'Delicate sterling silver necklace with artisan-crafted pendant.',
    price: 12500.00,
    image: 'https://images.pexels.com/photos/8980845/pexels-photo-8980845.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Jewelry',
    artisan: {
      name: 'Elena Vasquez',
      location: 'Tucson, AZ'
    },
    stock: 4,
    featured: false
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john@example.com',
  role: 'buyer'
};