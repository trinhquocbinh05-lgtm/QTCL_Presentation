import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, TrendingDown } from 'lucide-react';
import './Slide8.css';

const Slide8 = ({ isAnimated }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const crossOutVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.8,
      transition: { duration: 1.5, delay: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <div className="slide-container slide8-container">
      <div className="slide-number">08</div>
      {/* Background Ambience */}
      <div className="dynamic-bg">
        <div className="bg-glow blue-glow-8" />
        <div className="bg-glow red-glow-8" />
      </div>

      <div className="slide-content z-10 w-full flex flex-col items-center">
        <motion.div 
          className="slide-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title gradient-text">TRUYỀN THÔNG: CUỘC HÔN PHỐI LỆCH PHA</h2>
          <div className="title-underline"></div>
          <p className="slide-subtitle text-danger">Trị Giá 2 Triệu USD</p>
        </motion.div>

        <motion.div 
          className="objective-box glass-panel danger-border"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="objective-label">
            <AlertCircle size={20} /> Mục tiêu sai lầm
          </div>
          <p>
            Dùng 2 triệu USD thuê Arsenal để <strong>nam tính hóa</strong> hình ảnh hãng sữa, 
            nhầm lẫn giữa sự <strong>chú ý thể thao</strong> và <strong>hành vi tiêu dùng thức uống</strong>.
          </p>
        </motion.div>

        <motion.div 
          className="comparison-table-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="comparison-grid">
            {/* Header Row */}
            <div className="grid-cell header-cell empty-header"></div>
            <div className="grid-cell header-cell brand-header brown-theme">
              <h3 className="text-brown">Cà Phê Moment</h3>
              <span className="sub-header">(Bản sắc Việt Nam)</span>
            </div>
            <div className="grid-cell header-cell brand-header red-theme">
              <h3 className="text-red-light">Arsenal FC</h3>
              <span className="sub-header">(Hình ảnh Phương Tây)</span>
            </div>

            {/* Row 1 */}
            <motion.div variants={itemVariants} className="grid-cell row-label">Bản chất<br/>sản phẩm</motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Hương vị Robusta mộc mạc, quốc gia chuộng trà
            </motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Biểu tượng thể thao Châu Âu xa lạ
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={itemVariants} className="grid-cell row-label">Không gian</motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Gắn liền với thói quen vỉa hè dân dã
            </motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Quy mô vận động trường quốc tế
            </motion.div>

            {/* Row 3 */}
            <motion.div variants={itemVariants} className="grid-cell row-label">Cảm xúc</motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Tính trầm ngâm, nhâm nhi chậm rãi
            </motion.div>
            <motion.div variants={itemVariants} className="grid-cell content-cell">
              Tốc độ nhanh, nhịp sống vội vã, bùng nổ
            </motion.div>

            {/* SVG Overlay for the giant X */}
            {isAnimated && (
              <div className="x-overlay-container">
                <svg className="giant-x" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.line 
                    x1="0" y1="0" x2="100" y2="100" 
                    stroke="#ef4444" strokeWidth="3" 
                    strokeLinecap="round"
                    variants={crossOutVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.line 
                    x1="100" y1="0" x2="0" y2="100" 
                    stroke="#ef4444" strokeWidth="3" 
                    strokeLinecap="round"
                    variants={crossOutVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
            )}
          </div>
        </motion.div>

        {isAnimated && (
          <motion.div 
            className="conclusion-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="conclusion-badge">CHỐT HẠ</div>
            <p className="conclusion-text">
              Đại sứ thương hiệu <strong>KHÔNG CÓ SỰ TƯƠNG ĐỒNG</strong> thuộc tính với sản phẩm.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Slide8;
