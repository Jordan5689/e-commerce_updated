import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  
  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: parseInt(id || '1'),
    name: 'Stylish Watch',
    price: 199.99,
    description: 'A premium watch that combines style with functionality. Perfect for any occasion.',
    rating: 4.5,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1399&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1399&q=80',
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="relative h-96">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="text-indigo-600" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-indigo-600" />
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="text-indigo-600" />
              <span>30-day return policy</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;