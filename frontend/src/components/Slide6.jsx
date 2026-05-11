import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, XCircle, ArrowUpRight, ArrowLeft, ArrowUpLeft } from 'lucide-react';
import './Slide6.css';

const Slide6 = ({ isAnimated = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.4 }
    }
  };

  return (
    <div className="slide-container slide6-container">
      <div className="slide-number">06</div>
      {/* Title */}
      <motion.div 
        className="slide6-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="slide-title">
          MA TRẬN SWOT: <span className="highlight-text">Sức Mạnh Bị Vô Hiệu Hóa</span>
        </h1>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div 
        className="swot-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* STRENGTHS */}
        <motion.div variants={itemVariants} style={{ display: 'flex', width: '100%', height: '100%' }}>
          <motion.div 
            className="swot-card strengths-card" 
            style={{ flex: 1 }}
            animate={isAnimated ? { 
              scale: [1, 1, 0.95, 0.95, 0.95, 1],
              filter: ["grayscale(0%)", "grayscale(0%)", "grayscale(80%)", "grayscale(80%)", "grayscale(80%)", "grayscale(0%)"]
            } : { scale: 1, filter: "grayscale(0%)" }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.45, 0.8, 1], ease: "easeInOut" }}
          >
            <div className="card-header blue-header">
              <Target className="swot-icon" size={28} />
              <h2>STRENGTHS</h2>
            </div>
            <ul className="swot-list">
              <li>Tài chính dồi dào.</li>
              <li>Phân phối 200.000 điểm.</li>
              <li>Uy tín thương hiệu cao.</li>
            </ul>
            
            {/* Animated Red Cross */}
            <svg className="cross-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.line 
                x1="10" y1="10" x2="90" y2="90" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isAnimated ? { pathLength: [0, 0, 1, 1, 1, 0], opacity: [0, 0, 1, 0.3, 0.3, 0] } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.45, 0.8, 1], ease: "easeInOut" }} 
              />
              <motion.line 
                x1="90" y1="10" x2="10" y2="90" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isAnimated ? { pathLength: [0, 0, 1, 1, 1, 0], opacity: [0, 0, 1, 0.3, 0.3, 0] } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.45, 0.8, 1], ease: "easeInOut" }} 
              />
            </svg>
            
            <motion.div 
              className="dim-overlay"
              initial={{ opacity: 0 }}
              animate={isAnimated ? { opacity: [0, 0, 0.6, 0.3, 0.3, 0] } : { opacity: 0 }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.45, 0.8, 1], ease: "easeInOut" }}
              style={{ animation: 'none' }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* WEAKNESSES */}
        <motion.div className="swot-card weaknesses-card" variants={itemVariants}>
          <motion.div className="danger-highlight" 
            initial={{ opacity: 0, scale: 1 }}
            animate={isAnimated ? { opacity: [0, 1, 0.7, 1], scale: [1, 1.05, 1.02, 1.05] } : { opacity: 0, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
          <div className="card-header red-header">
            <XCircle className="swot-icon" size={28} />
            <h2>WEAKNESSES</h2>
          </div>
          <ul className="swot-list">
            <li>Bị đóng khung nhận thức là hãng sữa.</li>
            <li>Thiếu bản sắc riêng trong hương vị cà phê.</li>
          </ul>
        </motion.div>

        {/* OPPORTUNITIES */}
        <motion.div className="swot-card opportunities-card" variants={itemVariants}>
          <div className="card-header green-header">
            <TrendingUp className="swot-icon" size={28} />
            <h2>OPPORTUNITIES</h2>
          </div>
          <ul className="swot-list">
            <li>Thị trường hòa tan tăng trưởng.</li>
            <li>Xu hướng tiện lợi.</li>
          </ul>
        </motion.div>

        {/* THREATS */}
        <motion.div className="swot-card threats-card" variants={itemVariants}>
          <motion.div className="danger-highlight" 
            initial={{ opacity: 0, scale: 1 }}
            animate={isAnimated ? { opacity: [0, 1, 0.7, 1], scale: [1, 1.05, 1.02, 1.05] } : { opacity: 0, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
          <div className="card-header red-header">
            <AlertTriangle className="swot-icon" size={28} />
            <h2>THREATS</h2>
          </div>
          <ul className="swot-list">
            <li>Gu thưởng thức cực kỳ khắt khe.</li>
            <li>Cạnh tranh sinh tử từ G7 và Nescafe.</li>
          </ul>
        </motion.div>

        {/* Attack Projectiles (Arrows) */}
        <motion.div 
          className="attack-projectile"
          style={{ top: '25%', left: '50%', marginTop: '-20px', marginLeft: '-20px' }}
          initial={{ opacity: 0, x: "8cqw" }}
          animate={isAnimated ? {
            opacity: [0, 0, 1, 1, 0, 0],
            x: ["8cqw", "8cqw", "0cqw", "-8cqw", "-16cqw", "-16cqw"],
            scale: [0.8, 0.8, 1.3, 1.3, 0.8, 0.8]
          } : { opacity: 0, x: "8cqw" }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.15, 0.2, 0.25, 0.3, 1], ease: "linear" }}
        >
          <ArrowLeft size={48} color="#ef4444" strokeWidth={3} />
        </motion.div>

        <motion.div 
          className="attack-projectile"
          style={{ top: '50%', left: '50%', marginTop: '-20px', marginLeft: '-20px' }}
          initial={{ opacity: 0, x: "8cqw", y: "8cqw" }}
          animate={isAnimated ? {
            opacity: [0, 0, 1, 1, 0, 0],
            x: ["8cqw", "8cqw", "0cqw", "-8cqw", "-16cqw", "-16cqw"],
            y: ["8cqw", "8cqw", "0cqw", "-8cqw", "-16cqw", "-16cqw"],
            scale: [0.8, 0.8, 1.3, 1.3, 0.8, 0.8]
          } : { opacity: 0, x: "8cqw", y: "8cqw" }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.18, 0.23, 0.28, 0.33, 1], ease: "linear" }}
        >
          <ArrowUpLeft size={48} color="#ef4444" strokeWidth={3} />
        </motion.div>

        {/* Floating Annotation */}
        <motion.div className="swot-annotation" 
          initial={{ opacity: 0, x: -50, rotate: 10 }}
          animate={isAnimated ? { opacity: 1, x: 0, rotate: -10 } : { opacity: 0, x: -50, rotate: 10 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="annotation-text">
            Tài chính không thể mua được<br/>thói quen khẩu vị.
          </div>
          <ArrowUpRight className="annotation-arrow" size={40} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide6;

