import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Star } from 'lucide-react';
import './Slide16.css';

const Slide16 = () => {
  return (
    <div className="slide-container slide16-wrapper">
      <div className="slide-number">16</div>
      {/* Background animated elements */}
      <div className="thank-you-bg-elements">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-star"
            initial={{ 
              opacity: Math.random() * 0.5 + 0.1,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, Math.random() * 0.8 + 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Star size={16} fill="rgba(255,255,255,0.2)" color="transparent" />
          </motion.div>
        ))}
      </div>

      <div className="slide16-layout">
        <motion.div 
          className="thank-you-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="icon-crown"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <Coffee size={80} className="main-icon" />
          </motion.div>
          
          <motion.h1 
            className="thank-you-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            CẢM ƠN QUÝ THẦY CÔ <br /> <span className="highlight-text">& CÁC BẠN ĐÃ LẮNG NGHE</span>
          </motion.h1>

          <motion.div 
            className="thank-you-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p>Nhóm thuyết trình xin kết thúc phần trình bày tại đây.</p>
            <div className="heart-wrapper">
              <Heart size={32} className="heart-icon" fill="#f43f5e" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide16;
