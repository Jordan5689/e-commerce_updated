import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, Package, Home } from 'lucide-react';

const DeliveryProcess = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Delivery Process
        </motion.h2>
        <div className="relative h-64">
          <motion.div
            style={{ x }}
            className="absolute inset-0 flex items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-600 text-white p-4 rounded-full"
            >
              <Package size={32} />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-2 bg-indigo-600 flex-grow mx-4"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-indigo-600 text-white p-4 rounded-full"
            >
              <Truck size={32} />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="h-2 bg-indigo-600 flex-grow mx-4"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-indigo-600 text-white p-4 rounded-full"
            >
              <Home size={32} />
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Order Placed</h3>
            <p className="text-gray-600">Your order is confirmed and being processed</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">On the Way</h3>
            <p className="text-gray-600">Your package is out for delivery</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Delivered</h3>
            <p className="text-gray-600">Your package has arrived at your doorstep</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;