import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { itemCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-amber-800">ArtisanHub</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search handmade products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-amber-600 transition-colors">
              Products
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-amber-600 transition-colors">
              Categories
            </Link>
            {isAuthenticated && user?.role === 'admin' && (
              <Link to="/admin" className="text-gray-700 hover:text-amber-600 transition-colors">
                Admin Panel
              </Link>
            )}
            {isAuthenticated && user?.role === 'seller' && (
              <Link to="/dashboard" className="text-gray-700 hover:text-amber-600 transition-colors">
                Dashboard
              </Link>
            )}
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {user?.name}</span>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <Link to="/products" className="text-gray-700 hover:text-amber-600 transition-colors">
                Products
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-amber-600 transition-colors">
                Categories
              </Link>
              {isAuthenticated && user?.role === 'admin' && (
                <Link to="/admin" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Admin Panel
                </Link>
              )}
              {isAuthenticated && user?.role === 'seller' && (
                <Link to="/dashboard" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Dashboard
                </Link>
              )}
              <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({itemCount})</span>
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}