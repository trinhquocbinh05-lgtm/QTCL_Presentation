import React from 'react';
import { motion } from 'framer-motion';
import { Store, Coffee, Share2, XCircle, AlertTriangle } from 'lucide-react';
import './Slide9.css';

const Slide9 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="slide-container slide9-container">
      <div className="slide-number">09</div>
      {/* HEADER */}
      <motion.div 
        className="slide9-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="slide9-title">Phân Phối: Sự Tự Mãn Từ Kênh Bán Lẻ</h2>
        <div className="slide9-subtitle-box">
          <AlertTriangle size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: '#ef4444' }} />
          <strong>Nghịch lý 200.000 điểm bán:</strong> Cưỡng ép đại lý nhập kèm cà phê cùng với sữa tươi.
        </div>
      </motion.div>

      {/* CONTENT LAYOUT */}
      <motion.div className="divergence-layout" variants={containerVariants} initial="hidden" animate="visible">
        
        {/* LEFT COLUMN */}
        <div className="divergence-left">
          <motion.div className="start-node glass-panel" variants={itemVariants}>
            <Share2 size={28} color="#38bdf8" />
            <h3>Channel Divergence</h3>
          </motion.div>
        </div>

        {/* MIDDLE COLUMN (PIPES) */}
        <div className="divergence-middle">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="blue-pipe-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- BLUE PIPE (SUCCESS) --- */}
            {/* Outer Shell */}
            <motion.path 
              d="M 0 50 C 40 50, 60 25, 100 25" 
              fill="none" stroke="#1e293b" strokeWidth="40" vectorEffect="non-scaling-stroke" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
            />
            {/* Inner Fluid */}
            <motion.path 
              d="M 0 50 C 40 50, 60 25, 100 25" 
              fill="none" stroke="url(#blue-pipe-gradient)" strokeWidth="24" vectorEffect="non-scaling-stroke" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Flowing Data */}
            <motion.path 
              d="M 0 50 C 40 50, 60 25, 100 25" 
              fill="none" stroke="#e0f2fe" strokeWidth="8" vectorEffect="non-scaling-stroke" 
              strokeDasharray="20 30"
              className="pipe-flow-blue"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            />

            {/* --- RED PIPE (BROKEN) --- */}
            {/* Outer Shell */}
            <motion.path 
              d="M 0 50 C 40 50, 60 75, 75 75" 
              fill="none" stroke="#1e293b" strokeWidth="40" vectorEffect="non-scaling-stroke" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
            />
            {/* Inner Fluid (Failing) */}
            <motion.path 
              d="M 0 50 C 40 50, 60 75, 75 75" 
              fill="none" stroke="#991b1b" strokeWidth="24" vectorEffect="non-scaling-stroke" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Flowing Data (Struggling) */}
            <motion.path 
              d="M 0 50 C 40 50, 60 75, 75 75" 
              fill="none" stroke="#fecaca" strokeWidth="8" vectorEffect="non-scaling-stroke" 
              strokeDasharray="25 50 10 40"
              className="pipe-flow-red"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            />

            {/* Breakage Sparks */}
            <motion.circle 
              cx="75" cy="75" r="8" 
              fill="#ef4444" filter="url(#glow-red)" 
              initial={{ opacity: 0 }}
              animate={{ r: [6, 12, 6], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 1.5 }}
            />
            
            {/* Ghost Pipe (Shows disconnected destination) */}
            <motion.path 
              d="M 85 75 L 100 75" 
              fill="none" stroke="#1e293b" strokeWidth="40" vectorEffect="non-scaling-stroke" 
              strokeDasharray="15 15" opacity="0.4"
              initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2 }}
            />
          </svg>
        </div>

        {/* RIGHT COLUMN */}
        <div className="divergence-right">
          {/* Top Node (Off-Premise) */}
          <motion.div className="end-node blue-path glass-panel" variants={itemVariants}>
            <div className="node-header blue-text">
              <Store size={20} />
              <div>
                <div>Kênh Off-Premise</div>
                <div className="node-sub-header">(Điểm bán mang về)</div>
              </div>
            </div>
            <p className="node-desc">
              Cà phê Moment bị xếp cạnh <span className="highlight-blue">sữa bột, tã giấy</span>. 
              Hạ thấp giá trị của một sản phẩm thưởng thức.
              <br/>
              Hàng tồn kho bám bụi do biên lợi nhuận đại lý không bằng sữa.
            </p>
          </motion.div>

          {/* Bottom Node (On-Premise) */}
          <motion.div className="end-node red-path glass-panel failed-node" variants={itemVariants}>
            <div className="node-header red-text">
              <Coffee size={20} />
              <div>
                <div>Kênh On-Premise</div>
                <div className="node-sub-header">(Điểm tiêu thụ tại chỗ)</div>
              </div>
            </div>
            <p className="node-desc">
              <span className="highlight-red">Bỏ lỡ hoàn toàn kênh quán cà phê.</span> Thiếu không gian trưng bày và trải nghiệm thực tế - nơi định hình niềm tin cà phê thứ thiệt của người Việt.
            </p>
            {/* The X mark over the node edge */}
            <div className="x-mark-wrapper">
              <motion.div 
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
              >
                <XCircle size={28} color="#ef4444" fill="#020617" />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default Slide9;
