import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Coffee, AlertTriangle, Plus, Equal } from 'lucide-react';
import './Slide7.css';

const Slide7 = () => {
  // Thay đổi: Xóa bỏ setTimeout. Animation chạy nhanh và mượt ngay khi vào slide.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tốc độ trễ giữa các phần tử
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  const operatorVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  const warningVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  const bottomBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="slide-container slide7-container">
      <div className="slide-number">07</div>
      {/* Background Ambience tĩnh, không thay đổi đột ngột */}
      <div className="dynamic-bg">
        <div className="bg-glow blue-glow" />
        <div className="bg-glow brown-glow" />
        <div className="bg-glow red-glow" />
      </div>

      <div className="slide-content z-10 w-full flex flex-col items-center">
        <motion.div 
          className="slide-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title gradient-text">CHIẾN LƯỢC SẢN PHẨM</h2>
          <div className="title-underline"></div>
          <p className="slide-subtitle text-danger">Cái Bẫy Của Thương Hiệu Mẹ</p>
        </motion.div>

        {/* Bố cục dàn ngang rõ ràng, không đè lên nhau */}
        <motion.div 
          className="equation-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Milk Card */}
          <motion.div className="equation-item dna-card" variants={itemVariants}>
            <div className="icon-wrapper blue-icon">
              <Droplet size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-blue">[DNA Của Sữa]</h3>
            <ul>
              <li>Ngọt ngào</li>
              <li>Trẻ em</li>
              <li>Dinh dưỡng gia đình</li>
            </ul>
          </motion.div>

          {/* Plus Sign */}
          <motion.div className="equation-operator" variants={operatorVariants}>
            <motion.div 
              className="operator-circle plus-operator"
              animate={{ 
                scale: [1, 1.25, 1],
                boxShadow: ["0 0 15px rgba(255,255,255,0.05)", "0 0 40px rgba(59, 130, 246, 0.5)", "0 0 15px rgba(255,255,255,0.05)"],
                borderColor: ["rgba(255,255,255,0.1)", "rgba(59, 130, 246, 0.6)", "rgba(255,255,255,0.1)"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plus size={36} />
            </motion.div>
          </motion.div>

          {/* Coffee Card */}
          <motion.div className="equation-item dna-card" variants={itemVariants}>
            <div className="icon-wrapper brown-icon">
              <Coffee size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-brown">[DNA Cà Phê]</h3>
            <ul>
              <li>Đắng / Mạnh</li>
              <li>Người lớn</li>
              <li>Tỉnh táo / Nam tính</li>
            </ul>
          </motion.div>

          {/* Equals Sign */}
          <motion.div className="equation-operator" variants={operatorVariants}>
            <div className="operator-circle">
              <Equal size={36} />
            </div>
          </motion.div>

          {/* Conflict Card */}
          <motion.div className="equation-item conflict-card" variants={warningVariants}>
            <motion.div 
              className="alert-icon-wrapper"
              animate={{ boxShadow: ["0 0 10px #ef4444", "0 0 40px #ef4444", "0 0 10px #ef4444"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertTriangle size={64} color="#ef4444" strokeWidth={2} />
            </motion.div>
            <h3 className="text-danger conflict-title">SỰ XUNG ĐỘT<br/>NHẬN THỨC</h3>
          </motion.div>

        </motion.div>

        {/* Consequence Box */}
        <motion.div 
          className="consequence-box glass-panel danger-border"
          variants={bottomBoxVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="consequence-label">Hệ quả</div>
          <p className="consequence-text">
            Thương hiệu mẹ quá mạnh đã tạo ra định kiến. Người dùng mặc định cà phê của hãng sữa 
            chắc chắn nhiều sữa, ít cà phê, thiếu độ đô cho người sành sỏi. Việc cố gắng làm hài 
            lòng tất cả khiến Moment <span className="highlight-text">không đủ Tây như Nescafe</span>, 
            cũng <span className="highlight-text">không đủ Đậm như G7</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7;
