import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Lightbulb, Target } from 'lucide-react';
import './Slide15.css';

const Slide15 = () => {
  return (
    <div className="slide-container slide15-wrapper">
      <div className="slide-number">15</div>
      <motion.h2 
        className="slide-title text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        LỜI KẾT: <span className="highlight-blue">MỘT BƯỚC LÙI ĐỂ TIẾN XA</span>
      </motion.h2>

      <div className="slide15-integrated-visual">
        {/* SVG Visualization */}
        <div className="integrated-svg-container">
          <svg viewBox="0 0 1000 500" className="integrated-bow-svg">
            <defs>
              <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Path tracking the arrow's trajectory */}
            <path d="M 150,250 L 950,250" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 10" fill="none" />

            {/* Bow String (Pulled back) */}
            <motion.path 
              d="M 450,100 L 150,250 L 450,400" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="4" 
              fill="none"
              initial={{ d: "M 450,100 L 430,250 L 450,400" }}
              animate={{ 
                d: [
                  "M 450,100 L 430,250 L 450,400", // Rest
                  "M 450,100 L 150,250 L 450,400", // Pulled back
                  "M 450,100 L 470,250 L 450,400", // Released
                  "M 450,100 L 430,250 L 450,400", // Settle
                  "M 450,100 L 430,250 L 450,400"  // Wait
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.35, 0.45, 1], ease: "easeInOut" }}
            />
            
            {/* Bow Body */}
            <path d="M 450,100 Q 550,250 450,400" stroke="rgba(255,255,255,0.8)" strokeWidth="8" fill="none" />
            <path d="M 450,100 Q 550,250 450,400" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="16" fill="none" filter="url(#glow-blue)" />

            {/* Animated Arrow */}
            <motion.g
              animate={{ 
                x: [280, 0, 580, 580, 580, 280, 280], // from rest -> pulled -> shot (hits target) -> stays -> resets
                opacity: [1, 1, 1, 1, 0, 0, 1] 
              }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.35, 0.7, 0.8, 0.9, 1], ease: "easeInOut" }}
            >
              {/* Arrow Shaft */}
              <line x1="150" y1="250" x2="350" y2="250" stroke="white" strokeWidth="6" />
              <line x1="150" y1="250" x2="350" y2="250" stroke="url(#arrow-gradient)" strokeWidth="12" filter="url(#glow-blue)" />
              {/* Arrow Head */}
              <polygon points="370,250 340,235 345,250 340,265" fill="#10b981" filter="url(#glow-green)" />
              {/* Arrow Tail */}
              <polygon points="150,250 130,235 140,250 130,265" fill="#ef4444" filter="url(#glow-red)" />
            </motion.g>

            {/* Node 1 Point (Bước Lùi) */}
            <circle cx="150" cy="250" r="8" fill="#ef4444" filter="url(#glow-red)" />
            {/* Node 2 Point (Nhận Thức) */}
            <circle cx="550" cy="250" r="8" fill="#3b82f6" filter="url(#glow-blue)" />
            {/* Target Board at Node 3 (Tiến Xa) */}
            <g transform="translate(950, 250)">
              <motion.g
                animate={{ x: [0, 0, 8, -6, 4, -2, 0, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.38, 0.41, 0.44, 0.47, 0.5, 1], ease: "easeInOut" }}
              >
                {/* Wooden stand */}
                <rect x="-4" y="20" width="8" height="40" fill="#475569" rx="2" />
                <rect x="-15" y="55" width="30" height="5" fill="#475569" rx="2" />
                
                {/* Target Board Ellipses (Side/Angle view) */}
                <ellipse cx="0" cy="0" rx="12" ry="35" fill="#0f172a" stroke="#10b981" strokeWidth="2" filter="url(#glow-green)"/>
                <ellipse cx="0" cy="0" rx="8" ry="25" fill="#10b981" />
                <ellipse cx="0" cy="0" rx="4" ry="12" fill="#ffffff" />
              </motion.g>
            </g>
          </svg>

          {/* HTML Overlay Nodes */}
          
          {/* NODE 1: Bước Lùi */}
          <motion.div 
            className="integrated-node node-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="node-icon-hex bg-red-glow">
              <Coffee size={28} className="text-white" />
            </div>
            <div className="node-text-content">
              <h3 className="node-title text-red">MỘT BƯỚC LÙI</h3>
              <div className="node-badge badge-red">Thất bại Moment Coffee (2010)</div>
              <p className="node-desc">Đóng vai trò như một <strong>bộ lọc chiến lược</strong>, một "học phí đắt giá" giúp khép lại giấc mơ nóng vội.</p>
            </div>
          </motion.div>

          {/* NODE 2: Nhận Thức */}
          <motion.div 
            className="integrated-node node-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="node-icon-hex bg-blue-glow">
              <Lightbulb size={28} className="text-white" />
            </div>
            <div className="node-text-content">
              <h3 className="node-title text-blue">NHẬN THỨC CỐT LÕI</h3>
              <div className="node-badge badge-blue">Ranh Giới & Thấu Hiểu</div>
              <p className="node-desc">Sức mạnh nằm ở năng lực nhận biết ranh giới bản thân và <strong>thấu hiểu tận cùng</strong> tâm hồn khách hàng.</p>
            </div>
          </motion.div>

          {/* NODE 3: Tiến Xa */}
          <motion.div 
            className="integrated-node node-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <div className="node-icon-hex bg-green-glow">
              <Target size={28} className="text-white" />
              <motion.div 
                className="pulse-ring"
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="node-text-content">
              <h3 className="node-title text-green">ĐỂ TIẾN XA</h3>
              <div className="node-badge badge-green">Vươn Tầm Thế Giới</div>
              <p className="node-desc">Từ bước lùi chiến lược, tập trung bứt phá lợi thế lõi, lọt <strong>Top 50 công ty sữa hàng đầu thế giới</strong>.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide15;
