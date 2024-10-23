import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Welcome to ShopNow, your premier destination for quality products and exceptional shopping experiences. 
            Founded in 2024, we've been committed to bringing you the best selection of products while providing 
            outstanding customer service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                title: 'Our Team',
                description: 'Dedicated professionals working to serve you better',
              },
              {
                icon: Target,
                title: 'Our Mission',
                description: 'Providing quality products at competitive prices',
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'Customer satisfaction is our top priority',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              What started as a small online store has grown into a trusted marketplace for thousands of customers. 
              We believe in the power of e-commerce to connect people with the products they love, and we're 
              constantly innovating to make your shopping experience better.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for ways to improve and grow. Your feedback and support help us become better 
              every day.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;