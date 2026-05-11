import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';
import './PageStyles.css';

const GuestPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/questions`, formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', content: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container flex-center">
      <motion.div 
        className="glass-card entry-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="back-link mb-6" onClick={() => navigate('/')}>
          <ArrowLeft size={16} className="mr-2" /> Quay lại
        </button>

        <h1 className="page-title text-center mb-2">ĐẶT CÂU HỎI</h1>
        <p className="page-subtitle text-center mb-8">Chúng tôi sẽ giải đáp trong phần Q&A</p>

        {isSuccess ? (
          <motion.div 
            className="success-message text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CheckCircle size={64} className="text-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Gửi thành công!</h2>
            <p className="text-slate-300 mb-8">Cảm ơn bạn đã đặt câu hỏi. Câu hỏi đã được ghi nhận.</p>
            <button 
              className="glass-btn btn-secondary mx-auto"
              onClick={() => setIsSuccess(false)}
            >
              Gửi câu hỏi khác
            </button>
          </motion.div>
        ) : (
          <form className="admin-login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Họ và Tên</label>
              <input 
                type="text" 
                name="name"
                className="glass-input" 
                placeholder="Nhập tên của bạn"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email liên hệ</label>
              <input 
                type="email" 
                name="email"
                className="glass-input" 
                placeholder="VD: name@student.ueh.edu.vn"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Nội dung câu hỏi</label>
              <textarea 
                name="content"
                className="glass-textarea" 
                placeholder="Bạn muốn hỏi gì..."
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error-text text-red">{error}</p>}

            <button 
              type="submit" 
              className="glass-btn btn-primary mt-4 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : (
                <>Gửi Câu Hỏi <Send size={20} className="ml-2" /></>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default GuestPage;
