import React from 'react';
import { motion } from 'framer-motion';
import './Slide2.css';

const Slide2 = () => {
  return (
    <div className="slide-container slide2-container">
      <div className="slide-number">02</div>
      <motion.h1 
        className="main-title slide2-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lợi Thế Khổng Lồ Và Tham Vọng Thống Lĩnh
      </motion.h1>

      <div className="architecture-container">
        
        {/* Blueprint Lines */}
        <div className="blueprint-lines">
          {/* Top dimension line */}
          <div className="bp-line bp-line-h" style={{ top: '-1cqw', left: '0', width: '90cqw' }}></div>
          <div className="bp-tick" style={{ top: '-1.5cqw', left: '-0.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '-1.5cqw', left: '-0.5cqw' }}></div>
          <div className="bp-tick" style={{ top: '-1.5cqw', left: '89.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '-1.5cqw', left: '89.5cqw' }}></div>
          
          {/* Side dimension lines */}
          <div className="bp-line bp-line-v" style={{ top: '0', left: '-2cqw', height: '9cqw' }}></div>
          <div className="bp-tick" style={{ top: '-0.5cqw', left: '-2.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '-0.5cqw', left: '-2.5cqw' }}></div>
          <div className="bp-tick" style={{ top: '8.5cqw', left: '-2.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '8.5cqw', left: '-2.5cqw' }}></div>
          
          <div className="bp-line bp-line-v" style={{ top: '0', right: '-2cqw', height: '9cqw' }}></div>
          <div className="bp-tick" style={{ top: '-0.5cqw', right: '-2.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '-0.5cqw', right: '-2.5cqw' }}></div>
          <div className="bp-tick" style={{ top: '8.5cqw', right: '-2.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ top: '8.5cqw', right: '-2.5cqw' }}></div>
        </div>

        {/* The Beam */}
        <motion.div 
          className="arch-beam"
          initial={{ opacity: 0, y: -50, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 12 }}
        >
          <div className="beam-solid-left"></div>
          <div className="beam-content-right">
            <motion.div 
              className="beam-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2>Chiếm lĩnh <span className="highlight-orange">30%</span> thị phần toàn quốc vào năm <span className="highlight-orange">2010</span></h2>
              <p>(Khởi điểm kỳ vọng: <span className="highlight-orange">5%</span> năm 2008, <span className="highlight-orange">15%</span> năm 2009)</p>
            </motion.div>
          </div>
          
          {/* Target Icon */}
          <motion.div 
            className="target-icon-container"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 120, damping: 10 }}
          >
            <div className="target-pulsing" style={{ width: '100%', height: '100%' }}>
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="45" fill="#f97316" />
                <circle cx="50" cy="50" r="35" fill="#ffffff" />
                <circle cx="50" cy="50" r="25" fill="#f97316" />
                <circle cx="50" cy="50" r="15" fill="#ffffff" />
                <circle cx="50" cy="50" r="8" fill="#f97316" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
        
        {/* The Pillars */}
        <div className="pillars-wrapper">
          {/* Pillar 1 */}
          <motion.div 
            className="arch-pillar-wrapper"
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.0, type: "spring", stiffness: 70, damping: 15 }}
          >
            <div className="arch-pillar auto-glow" style={{ '--glow-delay': '0s' }}>
              <div className="pillar-cap"></div>
              <div className="pillar-body">
                <div className="pillar-icon-container">
                  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 10 90 L 90 90" />
                    <path d="M 10 10 L 10 90" />
                    <path d="M 25 88 L 25 60 L 40 60 L 40 88" />
                    <path d="M 45 88 L 45 40 L 60 40 L 60 88" />
                    <path d="M 65 88 L 65 20 L 80 20 L 80 88" />
                    <path d="M 15 70 L 35 45 L 55 55 L 85 15" strokeWidth="6" />
                    <polygon points="85,5 95,15 75,20" fill="#1a365d" className="glow-fill" stroke="none" />
                  </svg>
                </div>
                <h3 className="pillar-title">Năng Lực<br/>Tài Chính</h3>
                <p className="pillar-desc">Vốn hóa khổng lồ<br/>trên TTCK Việt Nam</p>
              </div>
              <div className="pillar-base"></div>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            className="arch-pillar-wrapper"
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, type: "spring", stiffness: 70, damping: 15 }}
          >
            <div className="arch-pillar auto-glow" style={{ '--glow-delay': '2s' }}>
              <div className="pillar-cap"></div>
              <div className="pillar-body">
                <div className="pillar-icon-container">
                  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
                    <line x1="50" y1="20" x2="20" y2="50" />
                    <line x1="50" y1="20" x2="80" y2="50" />
                    <line x1="20" y1="50" x2="50" y2="80" />
                    <line x1="80" y1="50" x2="50" y2="80" />
                    <line x1="20" y1="50" x2="80" y2="50" />
                    <line x1="50" y1="20" x2="50" y2="80" />
                    <circle cx="50" cy="20" r="8" fill="#1a365d" className="glow-fill" stroke="none" />
                    <circle cx="20" cy="50" r="8" fill="#1a365d" className="glow-fill" stroke="none" />
                    <circle cx="80" cy="50" r="8" fill="#1a365d" className="glow-fill" stroke="none" />
                    <circle cx="50" cy="80" r="8" fill="#1a365d" className="glow-fill" stroke="none" />
                    <circle cx="50" cy="50" r="10" fill="#f97316" stroke="none" />
                  </svg>
                </div>
                <h3 className="pillar-title">Kênh Phân Phối<br/>Vô Đối</h3>
                <p className="pillar-desc">Bao phủ hơn 200.000<br/>điểm bán lẻ toàn quốc</p>
              </div>
              <div className="pillar-base"></div>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            className="arch-pillar-wrapper"
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.4, type: "spring", stiffness: 70, damping: 15 }}
          >
            <div className="arch-pillar auto-glow" style={{ '--glow-delay': '4s' }}>
              <div className="pillar-cap"></div>
              <div className="pillar-body">
                <div className="pillar-icon-container">
                  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 50 5 L 10 20 L 10 50 C 10 75 50 95 50 95 C 50 95 90 75 90 50 L 90 20 Z" fill="rgba(26,54,93,0.1)" />
                    <path d="M 50 15 L 20 25 L 20 50 C 20 70 50 85 50 85 C 50 85 80 70 80 50 L 80 25 Z" fill="#1a365d" className="glow-fill" stroke="none" />
                    <polygon points="50,30 55,45 70,45 58,55 62,70 50,60 38,70 42,55 30,45 45,45" fill="#ffffff" stroke="none" />
                  </svg>
                </div>
                <h3 className="pillar-title">Uy Tín<br/>Thương Hiệu Mẹ</h3>
                <p className="pillar-desc">Tượng đài ngành<br/>hàng tiêu dùng nhanh<br/>FMCG từ 1976</p>
              </div>
              <div className="pillar-base"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional background blueprint details below pillars */}
        <div className="blueprint-lines">
          {/* Base horizontal dimension line */}
          <div className="bp-line bp-line-h" style={{ bottom: '-3cqw', left: '0', width: '90cqw' }}></div>
          <div className="bp-tick" style={{ bottom: '-3.5cqw', left: '-0.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ bottom: '-3.5cqw', left: '-0.5cqw' }}></div>
          <div className="bp-tick" style={{ bottom: '-3.5cqw', left: '89.5cqw' }}></div>
          <div className="bp-tick bp-tick-2" style={{ bottom: '-3.5cqw', left: '89.5cqw' }}></div>
        </div>

      </div>
    </div>
  );
};

export default Slide2;
