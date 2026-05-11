import React from 'react';
import { motion } from 'framer-motion';
import './Slide0.css';

const members = [
  { id: 1, name: "Hoàng Anh", mssv: "33254020121" },
  { id: 2, name: "Trịnh Quốc Bình", mssv: "89254020098" },
  { id: 3, name: "Trần Thị Mỹ Hiền", mssv: "89254020042" },
  { id: 4, name: "Nguyễn Thị Quỳnh Hương", mssv: "87254020088" },
  { id: 5, name: "Võ Hoàng Long", mssv: "89254020030" },
  { id: 6, name: "Dương Hà Tiên", mssv: "33254020150-0358962027" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      duration: 0.8
    }
  }
};

const Slide0 = () => {
  return (
    <div className="slide0-container">
      <div className="slide-number">00</div>
      <motion.div 
        className="slide0-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="project-info-header">
          <motion.h2 variants={itemVariants} className="pre-title">ĐỀ TÀI</motion.h2>
          <motion.h1 variants={itemVariants} className="intro-title">
            PHÂN TÍCH THẤT BẠI CHIẾN LƯỢC MARKETING<br/>CỦA VINAMILK TRONG MẢNG CÀ PHÊ
          </motion.h1>
          <motion.div 
            className="red-divider"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: "10cqw", opacity: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
          ></motion.div>
          
          <motion.div variants={itemVariants} className="class-info">
            <p><strong>Giảng viên:</strong> TS. Đặng Ngọc Đại</p>
            <p><strong>Môn học:</strong> QUẢN TRỊ CHIẾN LƯỢC</p>
            <p><strong>Mã lớp học phần:</strong> 26D3MAN50201102</p>
            <p className="highlight-group"><strong>Nhóm thực hiện:</strong> 9</p>
          </motion.div>
        </div>

        <motion.div className="members-grid" variants={containerVariants}>
          {members.map((member, i) => (
            <motion.div 
              key={member.id} 
              className="member-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#e53935', boxShadow: '0 10px 25px rgba(229, 57, 53, 0.3)' }}
            >
              <div className="member-number">{i + 1}</div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-mssv">MSSV: {member.mssv}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide0;
