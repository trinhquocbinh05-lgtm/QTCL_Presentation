import React from 'react';
import { motion } from 'framer-motion';
import { Split, BrainCircuit, MapPinned } from 'lucide-react';
import './Slide13.css';

const Slide13 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="slide-container slide13-wrapper">
      <div className="slide-number">13</div>
      <motion.h2 
        className="slide-title text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BÀI HỌC XƯƠNG MÁU VỀ
      </motion.h2>

      <motion.div 
        className="pyramid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TOP LAYER - Lesson 3 */}
        <motion.div className="pyramid-block block-top" variants={blockVariants}>
          <div className="block-icon">
            <div className="icon-ring color-cyan">
              <MapPinned size={40} className="icon-svg" />
            </div>
          </div>
          <div className="block-content">
            <h3 className="block-title color-cyan-text">3. Đặc Thù Hành Trình Khách Hàng (Channel Specificity)</h3>
            <p className="block-desc">
              Có kênh phân phối không có nghĩa là có tất cả. Hành vi mua sữa cho con hoàn toàn khác tâm thế chọn mua cà phê thưởng thức.
            </p>
          </div>
        </motion.div>

        {/* MIDDLE LAYER - Lesson 2 */}
        <motion.div className="pyramid-block block-middle" variants={blockVariants}>
          <div className="block-icon">
            <div className="icon-ring color-pink">
              <BrainCircuit size={40} className="icon-svg" />
            </div>
          </div>
          <div className="block-content">
            <h3 className="block-title color-pink-text">2. Sức Mạnh Của Định Tính Văn Hóa (Local Insight)</h3>
            <p className="block-desc">
              Không thể chỉ đo lường bằng định lượng. Phải thấu hiểu tâm lý học hành vi: Khách hàng mua một phong cách sống, không chỉ mua bột cà phê.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM LAYER - Lesson 1 */}
        <motion.div className="pyramid-block block-bottom" variants={blockVariants}>
          <div className="block-icon">
            <div className="icon-ring color-gold">
              <Split size={40} className="icon-svg" />
            </div>
          </div>
          <div className="block-content">
            <h3 className="block-title color-gold-text">1. Ranh Giới Việc Mở Rộng Thương Hiệu (Brand Extension)</h3>
            <p className="block-desc">
              Một thương hiệu không thể đại diện cho mọi thứ. Khi thuộc tính sản phẩm quá trái ngược (Sữa ngọt vs Cà phê đắng), cần dũng cảm xây dựng một thương hiệu hoàn toàn độc lập.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide13;
