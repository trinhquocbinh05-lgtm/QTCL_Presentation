import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircleQuestion, ListOrdered, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import './Slide17.css';

const Slide17 = () => {
  const navigate = useNavigate();

  const handleOpenQA = () => {
    // Navigate to QA Dashboard
    navigate('/qa');
  };

  return (
    <div className="slide-container slide17-wrapper">
      <div className="slide-number">17</div>
      
      {/* Background animated elements */}
      <div className="qna-bg-elements">
        <motion.div 
          className="floating-bubble"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="floating-bubble"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="slide17-layout">
        <motion.div 
          className="qna-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="qna-header" style={{ borderBottom: 'none', marginBottom: '2rem' }}>
            <motion.div 
              className="qna-icon-wrapper"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MessageCircleQuestion size={60} className="qna-header-icon" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '3rem', margin: '1rem 0' }}
            >
              Q&A SESSION
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ fontSize: '1.2rem', color: '#cbd5e1' }}
            >
              Mời thầy và các bạn đặt câu hỏi
            </motion.p>
          </div>

          <motion.div 
            className="qr-code-display"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
            style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px',
              marginBottom: '3rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}
          >
            <QRCodeSVG 
              value={`${window.location.origin}/guest`} 
              size={180}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"Q"}
              includeMargin={false}
            />
            <p style={{ color: '#0f172a', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
              Quét mã để đặt câu hỏi
            </p>
          </motion.div>

          <motion.button 
            className="qa-list-btn"
            onClick={handleOpenQA}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ListOrdered size={24} style={{ marginRight: '10px' }} />
            Xem Danh Sách Câu Hỏi
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide17;
