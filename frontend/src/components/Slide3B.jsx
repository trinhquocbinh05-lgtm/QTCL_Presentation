import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Slide3B.css';

const Slide3B = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      setStep(1);
      await new Promise(r => setTimeout(r, 800));
      setStep(2);
      await new Promise(r => setTimeout(r, 800));
      setStep(3);
      await new Promise(r => setTimeout(r, 800));
      setStep(4);
      await new Promise(r => setTimeout(r, 1200));
      setStep(5);
    };
    sequence();
  }, []);

  const timelineData = [
    { year: '1929', text: 'Nestlé bắt đầu nghiên cứu sản phẩm cà phê hòa tan.', type: 'nescafe' },
    { year: '1938', text: 'Chính thức ra mắt thương hiệu Nescafé tại Thụy Sĩ.', type: 'nescafe' },
    { year: '1952', text: 'Phát minh quy trình sản xuất mới không cần thêm chất bột đường.', type: 'nescafe' },
    { year: '1998', text: 'Nescafé sản xuất tại Việt Nam (Nhà máy Đồng Nai hoạt động).', type: 'nescafe' },
    { year: '2003', text: 'Vinamilk (Moment) mới bước chân vào thị trường cà phê.', type: 'vinamilk' }
  ];

  return (
    <div className="slide-container slide3b-container">
      <div className="slide-number">03B</div>
      <motion.h1 
        className="slide3b-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Đối Thủ Nescafé: Gã Khổng Lồ Với Bề Dày Lịch Sử
      </motion.h1>
      <motion.div 
        className="slide3b-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Khoảng cách 74 năm kinh nghiệm trên thị trường trước khi Vinamilk gia nhập
      </motion.div>

      <div className="timeline-wrapper">
        <div className="timeline-track">
            <motion.div 
              className="timeline-line-fill"
              initial={{ width: '0%' }}
              animate={{ width: step === 0 ? '0%' : step === 1 ? '0%' : step === 2 ? '25%' : step === 3 ? '50%' : '75%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
            
            {step >= 5 && (
                <motion.div
                    className="timeline-line-fill-vinamilk"
                    initial={{ width: '0%' }}
                    animate={{ width: '25%' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            )}

            {step >= 5 && (
                <motion.div
                  className="neon-runner"
                  animate={{ 
                    left: ['0%', '5%', '75%', '75.1%', '95%', '100%'],
                    background: [
                      'linear-gradient(90deg, rgba(239, 68, 68, 0) 0%, rgba(239, 68, 68, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                      'linear-gradient(90deg, rgba(239, 68, 68, 0) 0%, rgba(239, 68, 68, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                      'linear-gradient(90deg, rgba(239, 68, 68, 0) 0%, rgba(239, 68, 68, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                      'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                      'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                      'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.8) 80%, rgba(255, 255, 255, 1) 100%)'
                    ],
                    boxShadow: [
                      '0 0 2cqw 0.5cqw rgba(239, 68, 68, 0.6)',
                      '0 0 2cqw 0.5cqw rgba(239, 68, 68, 0.6)',
                      '0 0 2cqw 0.5cqw rgba(239, 68, 68, 0.6)',
                      '0 0 2cqw 0.5cqw rgba(14, 165, 233, 0.6)',
                      '0 0 2cqw 0.5cqw rgba(14, 165, 233, 0.6)',
                      '0 0 2cqw 0.5cqw rgba(14, 165, 233, 0.6)'
                    ],
                    opacity: [0, 1, 1, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    times: [0, 0.05, 0.75, 0.751, 0.95, 1],
                    repeatDelay: 1
                  }}
                />
            )}
        </div>

        <div className="timeline-nodes">
          {timelineData.map((item, index) => {
            const isVisible = step >= index + 1;
            const isVnm = item.type === 'vinamilk';
            return (
              <div className="timeline-node" key={index}>
                <motion.div 
                  className={`node-year ${isVnm ? 'vinamilk-year' : ''}`}
                  initial={{ opacity: 0, y: isVnm ? -20 : 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: isVnm ? -20 : 20 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  {item.year}
                </motion.div>
                
                <motion.div 
                  className={`node-point ${isVnm ? 'vinamilk-point' : ''}`}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
                ></motion.div>

                <motion.div 
                  className={`node-content ${isVnm ? 'vinamilk-content' : ''}`}
                  initial={{ opacity: 0, y: isVnm ? 20 : -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: isVnm ? 20 : -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p>{item.text}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {step >= 5 && (
          <motion.div 
            className="vs-badge"
            initial={{ scale: 0, opacity: 0, x: "-50%" }}
            animate={{ scale: 1, opacity: 1, x: "-50%" }}
            transition={{ type: 'spring', bounce: 0.6, delay: 0.5 }}
          >
            Bất lợi quá lớn về thời gian và độ phủ thị trường!
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Slide3B;
