import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, MapPin, Megaphone, Swords } from 'lucide-react';
import './Slide10.css';

const Slide10 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const comparisonData = [
    {
      id: 'product',
      icon: <Package size={20} />,
      label: 'Product',
      vinamilk: <><span className="highlight-vnm">Mờ nhạt & Xung đột</span> nhận thức từ tên thương hiệu sữa.</>,
      g7: <><span className="highlight-g7">Đậm đà</span>, định vị thứ thiệt, bảo chứng bởi Vua cà phê.</>
    },
    {
      id: 'price',
      icon: <DollarSign size={20} />,
      label: 'Price',
      vinamilk: <><span className="highlight-vnm">Lúng túng:</span> Định vị cao cấp ban đầu, sau đó phá giá đẩy hàng tồn.</>,
      g7: <><span className="highlight-g7">Nhất quán:</span> Mức giá trung bình nhưng giá trị cảm nhận cao.</>
    },
    {
      id: 'place',
      icon: <MapPin size={20} />,
      label: 'Place',
      vinamilk: <><span className="highlight-vnm">Cưỡng ép:</span> Bị kẹp giữa bỉm và sữa, vắng bóng tại quán cà phê.</>,
      g7: <><span className="highlight-g7">Phủ rộng & Trải nghiệm:</span> Có hệ thống showroom quán cà phê làm mỏ neo.</>
    },
    {
      id: 'promotion',
      icon: <Megaphone size={20} />,
      label: 'Promotion',
      vinamilk: <><span className="highlight-vnm">Hào nhoáng & Lãng phí:</span> Chi 2 triệu USD thuê Arsenal, xa rời thói quen dân dã.</>,
      g7: <><span className="highlight-g7">Cảm xúc & Bản địa:</span> Thử mù (Blind Test), đánh vào lòng tự hào Khơi nguồn sáng tạo.</>
    }
  ];

  return (
    <div className="slide-container slide10-container">
      <div className="slide-number">10</div>
      {/* HEADER */}
      <motion.div 
        className="slide10-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="title-icon-wrapper">
          <Swords size={32} className="battle-icon" />
        </div>
        <h2 className="slide10-title">Trận Chiến Kịch Vọng</h2>
        <div className="slide10-subtitle">
          <span className="brand-vnm">Vinamilk Moment</span> <span className="vs-text">vs.</span> <span className="brand-g7">Trung Nguyên G7</span>
        </div>
      </motion.div>

      {/* COMPARISON MATRIX */}
      <motion.div 
        className="matrix-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Table Header */}
        <motion.div className="matrix-header-row" variants={rowVariants}>
          <div className="matrix-cell header-empty"></div>
          <div className="matrix-cell header-vnm">
            <div className="header-brand">Vinamilk Moment</div>
            <div className="header-tagline">(Cái Bẫy Tài Chính)</div>
          </div>
          <div className="matrix-cell header-g7">
            <div className="header-brand">Trung Nguyên G7</div>
            <div className="header-tagline">(Sức Mạnh Bản Sắc)</div>
          </div>
        </motion.div>

        {/* Table Body */}
        {comparisonData.map((row, index) => (
          <motion.div className="matrix-data-row" key={row.id} variants={rowVariants}>
            <div className="matrix-cell cell-label">
              <div className="label-content">
                {row.icon}
                <span>{row.label}</span>
              </div>
            </div>
            <div className="matrix-cell cell-vnm">
              <p>{row.vinamilk}</p>
            </div>
            <div className="matrix-cell cell-g7">
              <p>{row.g7}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide10;
