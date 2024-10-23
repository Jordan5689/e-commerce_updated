import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-indigo-600"
            >
              ShopNow
            </motion.h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.span
                className={`text-gray-600 hover:text-indigo-600 ${
                  location.pathname === item.path ? 'text-indigo-600 font-semibold' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-indigo-600"
            >
              <ShoppingCart />
            </motion.span>
          </Link>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-indigo-600 cursor-pointer"
          >
            <User />
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white py-2"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.span
                  className={`block text-gray-600 hover:text-indigo-600 ${
                    location.pathname === item.path ? 'text-indigo-600 font-semibold' : ''
                  }`}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;