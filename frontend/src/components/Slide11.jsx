import React from 'react';
import { motion } from 'framer-motion';
import './Slide11.css';

const Slide11 = () => {
  return (
    <div className="slide-container slide11-wrapper">
      <div className="slide-number">11</div>
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Điểm nút 2010: Quyết định rút lui chiến lược
      </motion.h2>

      <div className="slide11-content">
        {/* LEFT: VISUAL CHART */}
        <div className="visual-section">
          <svg className="chart-svg" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="wall-front" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              <marker id="arrow-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#ef4444" />
              </marker>
              <marker id="arrow-green" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#22c55e" />
              </marker>
              <marker id="arrow-pointer" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* RED LINE (Going down) */}
            <motion.path
              d="M 20 120 L 140 150 L 220 240 L 270 240 L 305 320"
              fill="none"
              stroke="#ef4444"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow-red)"
              markerEnd="url(#arrow-red)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* THE WALL (3D Pillar) */}
            <motion.g
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              {/* Glowing aura behind wall */}
              <rect x="300" y="70" width="100" height="380" fill="#3b82f6" opacity="0.25" filter="url(#glow-blue)" />
              
              {/* Right Side Face */}
              <path d="M 360 120 L 390 90 L 390 390 L 360 420 Z" fill="#1e3a8a" />
              {/* Top Face */}
              <path d="M 320 120 L 350 90 L 390 90 L 360 120 Z" fill="#60a5fa" />
              {/* Front Face */}
              <path d="M 320 120 L 360 120 L 360 420 L 320 420 Z" fill="url(#wall-front)" />
              
              {/* Top Castle Notches (Optional but nice) */}
              <path d="M 320 120 L 320 105 L 332 105 L 332 120 Z" fill="#3b82f6" />
              <path d="M 344 120 L 344 105 L 356 105 L 356 120 Z" fill="#3b82f6" />
            </motion.g>

            {/* GREEN LINE (Bouncing up) */}
            <motion.path
              d="M 390 370 L 440 280 L 480 320 L 530 160"
              fill="none"
              stroke="#22c55e"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow-green)"
              markerEnd="url(#arrow-green)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
            />

            {/* ANNOTATION: Pointer Line */}
            <motion.path 
              d="M 150 230 Q 200 230 240 240" 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="2" 
              strokeDasharray="4 4"
              markerEnd="url(#arrow-pointer)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            {/* ANNOTATION: Text Box */}
            <foreignObject x="-20" y="160" width="200" height="140">
              <div style={{ width: '100%', height: '100%', padding: '20px', boxSizing: 'border-box' }}>
                <motion.div 
                  className="chart-annotation-clean"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <p>Dự án liên tục báo lỗ, thị phần rớt xuống dưới 1%.</p>
                </motion.div>
              </div>
            </foreignObject>

            {/* $40M PRICE TAG */}
            <foreignObject x="90" y="290" width="200" height="160">
              <div style={{ width: '100%', height: '100%', padding: '20px', boxSizing: 'border-box' }}>
                <motion.div 
                  className="price-tag-wrapper"
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: -10 }}
                  transition={{ delay: 1.8, type: "spring", bounce: 0.6 }}
                >
                  <div className="price-tag-content">
                    <h4 className="price-val">$40</h4>
                    <span className="price-unit">TRIỆU USD</span>
                  </div>
                </motion.div>
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-section">
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            <h3>Cắt lỗ dứt khoát:</h3>
            <p>Tháng 9/2010, nhượng lại toàn bộ Nhà máy cà phê Sài Gòn cho chính đối thủ Trung Nguyên.</p>
          </motion.div>

          <motion.div 
            className="info-card highlight-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.0, duration: 0.6 }}
          >
            <h3>Sự dũng cảm trong quản trị:</h3>
            <p>Chấp nhận bán đi một con bò gầy không có tương lai để bảo toàn dòng tiền và bảo vệ vị thế dẫn đầu trong ngành hàng sữa cốt lõi.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
