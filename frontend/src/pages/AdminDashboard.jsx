import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, MessageSquare, LogOut } from 'lucide-react';
import './PageStyles.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Basic protection
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div className="page-container flex-center">
      <motion.div 
        className="glass-card entry-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-link mb-6" onClick={handleLogout}>
          <LogOut size={16} className="mr-2" /> Đăng xuất
        </button>

        <h1 className="page-title text-center mb-8">
          BẢNG ĐIỀU KHIỂN <span className="highlight-blue">ADMIN</span>
        </h1>

        <div className="role-buttons flex-col">
          <button 
            className="glass-btn btn-primary w-full py-4 text-xl mb-4"
            onClick={() => navigate('/presentation')}
          >
            <Play size={28} className="mr-3" />
            Bắt đầu thuyết trình
          </button>
          
          <button 
            className="glass-btn btn-secondary w-full py-4 text-xl"
            onClick={() => navigate('/qa')}
          >
            <MessageSquare size={28} className="mr-3" />
            Xem câu hỏi Q&A
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
