import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SpecialOffer = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="py-16 bg-indigo-600 text-white overflow-hidden">
      <motion.div className="container mx-auto px-4" style={{ y }}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <p className="text-xl mb-6">Get 20% off on all products this week!</p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            >
              Shop Now
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Special Offer"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;