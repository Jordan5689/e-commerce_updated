import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      bgImageAlt="Hero background"
      strength={-200}
    >
      <section className="relative text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          style={{ y }}
          className="container mx-auto px-4 py-24 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover the Latest Trends</h2>
            <p className="text-xl mb-8">Shop our curated collection of stylish and high-quality products.</p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default Hero;