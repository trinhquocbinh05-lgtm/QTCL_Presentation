import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Coffee, ArrowLeft, ArrowRight, Target, Hexagon } from 'lucide-react';
import './Slide5.css';

const Slide5 = () => {
  const leftPanelVariants = {
    hidden: { opacity: 0, x: '-100%', skewX: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: '100%', skewX: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" }
    }
  };

  const zapVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, delay: 1.2, type: "spring", bounce: 0.6 }
    }
  };

  return (
    <div className="slide-container slide5-container">
      <div className="slide-number">05</div>
      {/* Title */}
      <motion.div 
        className="slide5-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="slide-title">SAI LỆCH VỀ INSIGHT NGƯỜI TIÊU DÙNG</h1>
        <div className="title-underline"></div>
      </motion.div>

      <div className="split-layout">
        {/* LEFT PANEL - VINAMILK */}
        <motion.div 
          className="split-panel left-panel"
          variants={leftPanelVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="panel-background blueprint-bg"></div>
          
          <motion.div className="panel-content" variants={contentVariants}>
            <div className="icon-badge blue-badge">
              <Briefcase size={48} strokeWidth={1.5} />
              <Hexagon className="badge-ring" size={100} strokeWidth={1} />
            </div>
            
            <h2 className="panel-title text-blue">Góc nhìn của Vinamilk</h2>
            <div className="subtitle-tag blue-tag">Tư duy bán thức uống dinh dưỡng</div>
            
            <p className="panel-description">
              Khách hàng cần một loại cà phê <span className="highlight-blue">tiện lợi, giá rẻ</span>, 
              được <span className="highlight-blue">bảo chứng</span> bởi một tập đoàn uy tín.
            </p>
          </motion.div>
        </motion.div>

        {/* CENTER DIVIDER */}
        <div className="center-divider">
          <motion.div className="zap-container" variants={zapVariants} initial="hidden" animate="visible">
            <div style={{ display: 'flex', gap: '4px' }}>
              <ArrowRight size={32} className="zap-icon" color="#ef4444" strokeWidth={3} />
              <ArrowLeft size={32} className="zap-icon" color="#ef4444" strokeWidth={3} />
            </div>
            <div className="zap-glow"></div>
          </motion.div>
        </div>

        {/* RIGHT PANEL - REALITY */}
        <motion.div 
          className="split-panel right-panel"
          variants={rightPanelVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="panel-background organic-bg"></div>
          
          <motion.div className="panel-content" variants={contentVariants}>
            <div className="icon-badge amber-badge">
              <Coffee size={48} strokeWidth={1.5} />
              <Target className="badge-ring" size={100} strokeWidth={1} />
            </div>
            
            <h2 className="panel-title text-amber">Insight thực tế</h2>
            <div className="subtitle-tag amber-tag">Tư duy bán thức uống thưởng thức</div>
            
            <p className="panel-description">
              Tôi cần một tách cà phê <span className="highlight-amber">đậm đà</span> giúp tôi tỉnh táo, 
              <span className="highlight-amber">khẳng định cá tính</span> và mang lại phong cách sống.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;
