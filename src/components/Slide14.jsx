import React from 'react';
import { motion } from 'framer-motion';
import { Store, X, CheckCircle2, Coffee, Building2, TrendingDown } from 'lucide-react';
import './Slide14.css';

const Slide14 = () => {
  return (
    <div className="slide-container slide14-wrapper">
      <div className="slide-number">14</div>
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        SỰ TRỞ LẠI THỰC DỤNG: <span className="highlight-hicafe">CHIẾN LƯỢC HI-CAFÉ (2019 - NAY)</span>
      </motion.h2>

      <div className="slide14-content">
        
        {/* LEFT COLUMN: THE AVOIDED TRAP */}
        <motion.div 
          className="left-trap-column"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="trap-card">
            <div className="trap-icon-wrapper">
              <Building2 size={60} className="icon-building" />
              <X size={80} className="icon-cross" strokeWidth={3} />
            </div>
            <h3 className="trap-title">Tránh bẫy đốt tiền</h3>
            <p className="trap-desc">
              Không đua thuê <strong>"mặt bằng vàng"</strong> với chi phí <br/>
              <span className="text-red">10.000 - 20.000 USD/tháng</span> <br/>
              để đấu trực diện với các chuỗi lớn.
            </p>
            <div className="brick-wall-svg">
               {/* Decorative brick wall pattern */}
               <svg width="100%" height="80" viewBox="0 0 200 80">
                  <pattern id="bricks" width="40" height="20" patternUnits="userSpaceOnUse">
                    <rect width="40" height="20" fill="transparent" />
                    <rect x="0" y="0" width="19" height="9" fill="rgba(244, 63, 94, 0.2)" stroke="rgba(244, 63, 94, 0.4)" />
                    <rect x="20" y="0" width="19" height="9" fill="rgba(244, 63, 94, 0.2)" stroke="rgba(244, 63, 94, 0.4)" />
                    <rect x="-10" y="10" width="19" height="9" fill="rgba(244, 63, 94, 0.2)" stroke="rgba(244, 63, 94, 0.4)" />
                    <rect x="10" y="10" width="19" height="9" fill="rgba(244, 63, 94, 0.2)" stroke="rgba(244, 63, 94, 0.4)" />
                    <rect x="30" y="10" width="19" height="9" fill="rgba(244, 63, 94, 0.2)" stroke="rgba(244, 63, 94, 0.4)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#bricks)" />
               </svg>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: THE KIOSK STRATEGY */}
        <div className="right-strategy-column">
          
          <motion.div 
            className="diagram-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* The Blueprint Store Graphic */}
            <div className="store-blueprint">
              <div className="store-outline">
                <Store size={32} className="store-icon-bg" />
                <span className="store-label">
                  Cửa hàng Giấc Mơ Sữa Việt
                  <span className="store-sub">Hệ thống {'>'}600 điểm</span>
                </span>
                
                {/* The inner Kiosk */}
                <motion.div 
                  className="kiosk-box"
                  initial={{ boxShadow: "0 0 0 rgba(56, 189, 248, 0)" }}
                  animate={{ boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Coffee size={24} className="kiosk-icon" />
                  <span className="kiosk-label">
                    Kiosk Hi-Café
                    <span className="kiosk-sub">(Take-away)</span>
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Checkmark Callouts */}
            <div className="callouts-container">
              <motion.div 
                className="callout-card callout-top"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <CheckCircle2 size={32} className="icon-check" />
                <div>
                  <h4>Thấu hiểu kênh On-Premise</h4>
                  <p>Nhận ra cà phê cần <strong>trải nghiệm tại chỗ & mang đi</strong>, không chỉ bám bụi trên kệ siêu thị.</p>
                </div>
              </motion.div>

              <motion.div 
                className="callout-card callout-bottom"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <CheckCircle2 size={32} className="icon-check" />
                <div>
                  <h4>Tích hợp hệ sinh thái</h4>
                  <p>Tận dụng hệ thống mặt bằng có sẵn và tối ưu chi phí bằng nguyên liệu nội bộ <strong>(Sữa đặc Phương Nam)</strong>.</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide14;
