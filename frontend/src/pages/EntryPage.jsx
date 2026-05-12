import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Lock, ArrowRight } from 'lucide-react';
import './PageStyles.css';

const EntryPage = () => {
  const navigate = useNavigate();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (passcode === 'UEHADMIN') {
      // For simplicity, we just use a basic check.
      // In a real app, this should be a JWT or session token from backend.
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Mã xác nhận không chính xác!');
    }
  };

  return (
    <div className="page-container flex-center">
      <motion.div
        className="glass-card entry-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title text-center">
          CHÀO MỪNG ĐẾN VỚI <br /><span className="highlight-blue">BUỔI THUYẾT TRÌNH</span>
        </h1>
        <p className="page-subtitle text-center mb-8">Vui lòng chọn vai trò của bạn</p>

        {!showAdminLogin ? (
          <div className="role-buttons">
            <button
              className="glass-btn btn-primary"
              onClick={() => navigate('/guest')}
            >
              <Users size={24} className="mr-2" />
              Khách (Đặt câu hỏi)
            </button>
            <button
              className="glass-btn btn-secondary"
              onClick={() => setShowAdminLogin(true)}
            >
              <Lock size={24} className="mr-2" />
              Người Thuyết Trình
            </button>
          </div>
        ) : (
          <motion.form
            className="admin-login-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            onSubmit={handleAdminSubmit}
          >
            <div className="form-group">
              <label>Mã Quyền Truy Cập</label>
              <input
                type="password"
                className="glass-input"
                placeholder="Nhập mã hóa"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError('');
                }}
              />
            </div>
            {error && <p className="error-text text-red">{error}</p>}
            <div className="role-buttons mt-6">
              <button
                type="button"
                className="glass-btn btn-secondary"
                onClick={() => setShowAdminLogin(false)}
              >
                Quay Lại
              </button>
              <button
                type="submit"
                className="glass-btn btn-primary"
              >
                Xác Nhận <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default EntryPage;
