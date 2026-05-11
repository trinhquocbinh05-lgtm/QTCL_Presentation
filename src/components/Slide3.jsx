import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import './Slide3.css';

const Slide3 = () => {
  const controls = useAnimation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // 1. Show grid and axes
      await controls.start('grid');
      // 2. Draw line from 2003 to 2010
      await controls.start('line');
      // 3. Fill areas
      await controls.start('areas');
      // 4. Show points and labels sequentially
      setStep(1);
      await new Promise(r => setTimeout(r, 800));
      setStep(2);
      await new Promise(r => setTimeout(r, 800));
      setStep(3);
      await new Promise(r => setTimeout(r, 800));
      setStep(4);
    };
    sequence();
  }, [controls]);

  // Coordinates
  // 2003: 100, 380
  // 2004: 200, 360
  // 2005: 300, 330
  // 2006: 400, 205
  // 2007: 500, 80
  // 2008: 600, 220
  // 2009: 700, 390
  // 2010: 800, 390
  
  const pathData = "M 100 380 L 200 360 L 300 330 L 500 80 L 600 220 L 700 390 L 800 390";
  const lightBlueArea = "M 100 380 L 200 360 L 300 330 L 300 400 L 100 400 Z";
  const darkBlueArea = "M 300 330 L 500 80 L 600 220 L 600 400 L 300 400 Z";
  const redArea = "M 600 220 L 700 390 L 800 390 L 800 400 L 600 400 Z";

  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    line: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
  };

  const areaVariants = {
    hidden: { opacity: 0 },
    areas: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }
  };

  return (
    <div className="slide-container slide3-container">
      <div className="slide-number">03</div>
      <motion.h1 
        className="slide3-title"
        initial={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        Biểu Đồ Thăng Trầm: Vinamilk Và Giấc Mơ Cà Phê
      </motion.h1>

      <div className="chart-container">
        <svg viewBox="0 0 900 450" className="chart-svg" preserveAspectRatio="none">
          {/* Definitions for gradients or markers if needed */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Lines */}
          <motion.g 
            initial={{ opacity: 0 }} 
            animate={controls} 
            variants={{ grid: { opacity: 1, transition: { duration: 0.5 } } }}
            className="chart-grid"
          >
            {/* Horizontal lines */}
            {[50, 100, 150, 200, 250, 300, 350, 400].map(y => (
              <line key={`h-${y}`} x1="80" y1={y} x2="850" y2={y} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            ))}
            {/* Vertical lines */}
            {[100, 200, 300, 400, 500, 600, 700, 800].map(x => (
              <line key={`v-${x}`} x1={x} y1="50" x2={x} y2="400" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            ))}
            
            {/* Base Line */}
            <line x1="80" y1="400" x2="850" y2="400" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />
            <line x1="80" y1="50" x2="80" y2="400" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />
            <line x1="80" y1="50" x2="850" y2="50" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />
            <line x1="850" y1="50" x2="850" y2="400" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />
          </motion.g>

          {/* Areas */}
          <motion.g initial="hidden" animate={controls} variants={areaVariants}>
            <path d={lightBlueArea} fill="rgba(56, 189, 248, 0.3)" />
            <path d={darkBlueArea} fill="rgba(59, 130, 246, 0.4)" />
            <path d={redArea} fill="rgba(239, 68, 68, 0.4)" />
          </motion.g>

          {/* Main Line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial="hidden"
            animate={controls}
            variants={drawVariants}
          />

          {/* Light Beam Animation */}
          {step >= 1 && (
            <motion.path
              d={pathData}
              fill="none"
              stroke="#00f3ff" /* neon blue */
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
              animate={{
                pathOffset: [0, 1],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.1, 0.9, 1]
              }}
            />
          )}

          {/* Red circles and X at specific points */}
          {/* 2003 Point */}
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.g key="a2003" initial="hidden" animate="visible" variants={fadeVariants}>
                <circle cx="100" cy="380" r="15" fill="none" stroke="#ef4444" strokeWidth="3" />
                <circle cx="100" cy="380" r="20" fill="none" stroke="#ef4444" strokeWidth="1" />
                <line x1="100" y1="360" x2="100" y2="260" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              </motion.g>
            )}
            
            {/* 2007 Point with Coffee Cup */}
            {step >= 2 && (
              <motion.g key="a2007" initial="hidden" animate="visible" variants={fadeVariants}>
                <circle cx="500" cy="80" r="15" fill="none" stroke="#ef4444" strokeWidth="3" />
                <circle cx="500" cy="80" r="20" fill="none" stroke="#ef4444" strokeWidth="1" />
                <line x1="480" y1="80" x2="350" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Coffee Cup SVG above the point */}
                <g transform="translate(480, 20) scale(1.5)">
                  {/* Cup Body */}
                  <path d="M -15 -20 L 15 -20 C 15 -20 12 15 0 15 C -12 15 -15 -20 -15 -20 Z" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                  {/* Cup Handle */}
                  <path d="M 14 -10 C 22 -10 22 5 12 5" fill="none" stroke="#1e3a8a" strokeWidth="2" />
                  {/* Coffee inside (top ellipse) */}
                  <ellipse cx="0" cy="-20" rx="15" ry="4" fill="#8B4513" stroke="#1e3a8a" strokeWidth="1" />
                  {/* Steam */}
                  <path d="M -5 -25 Q -8 -30 -5 -35 T -5 -45" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 5 -24 Q 2 -29 5 -34 T 5 -44" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Moment Text */}
                  <text x="0" y="-3" fontSize="6" fill="#1e3a8a" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Moment</text>
                </g>
              </motion.g>
            )}

            {/* 2008 Point */}
            {step >= 3 && (
              <motion.g key="a2008" initial="hidden" animate="visible" variants={fadeVariants}>
                <circle cx="600" cy="220" r="15" fill="none" stroke="#ef4444" strokeWidth="3" />
                <circle cx="600" cy="220" r="20" fill="none" stroke="#ef4444" strokeWidth="1" />
                <line x1="615" y1="205" x2="680" y2="150" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              </motion.g>
            )}

            {/* 2010 Point */}
            {step >= 4 && (
              <motion.g key="a2010" initial="hidden" animate="visible" variants={fadeVariants}>
                <path d="M 785 375 L 815 405 M 815 375 L 785 405" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                <line x1="800" y1="370" x2="800" y2="250" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>

        {/* Labels Overlay */}
        <div className="chart-labels-overlay">
          {/* Axis Labels */}
          <div className="y-axis-label">Market Share / Ambition</div>
          <div className="x-axis-labels">
            {[2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010].map((year, i) => (
              <span key={year} style={{ left: `${((i + 1) * 100) / 9}%` }}>{year}</span>
            ))}
          </div>

          {/* Annotations */}
          {step >= 1 && (
            <motion.div className="annotation anno-2003" initial="hidden" animate="visible" variants={fadeVariants}>
              <h4>2003: True Coffee</h4>
              <p>Thử nghiệm mờ nhạt,<br/>thiếu bứt phá.</p>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div className="annotation anno-2007" initial="hidden" animate="visible" variants={fadeVariants}>
              <h4>2005 - 2007: Bơm vốn</h4>
              <p>Tung Moment Coffee. Đầu<br/>tư 17 triệu USD xây<br/>Nhà máy. Đạt 3% thị phần.</p>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div className="annotation anno-2008" initial="hidden" animate="visible" variants={fadeVariants}>
              <h4>2008 - 2009: Khủng hoảng</h4>
              <p>Chiến dịch Arsenal 2 triệu<br/>USD lệch pha. Tồn kho ách<br/>tắc. Lợi nhuận rớt xuống 1%.</p>
            </motion.div>
          )}

          {step >= 4 && (
            <motion.div className="annotation anno-2010" initial="hidden" animate="visible" variants={fadeVariants}>
              <h4>2010: Cắt lỗ</h4>
              <p>Bán lại nhà máy cho<br/>Trung Nguyên giá 40<br/>triệu USD. Thương<br/>hiệu khai tử.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock AnimatePresence to bypass the import error if AnimatePresence is missing, but it is imported above.
export default Slide3;
