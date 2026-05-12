import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
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
      const apiUrl = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:5000`;
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
        <button className="back-link" style={{ marginBottom: '1.5rem' }} onClick={() => navigate('/')}>
          <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Quay lại
        </button>

        <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>ĐẶT CÂU HỎI</h1>
        <p className="page-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Chúng tôi sẽ giải đáp trong phần Q&A</p>

        {isSuccess ? (
          <motion.div 
            className="success-message"
            style={{ textAlign: 'center', padding: '2rem 0' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CheckCircle size={64} style={{ color: '#10b981', margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Gửi thành công!</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>Cảm ơn bạn đã đặt câu hỏi. Câu hỏi đã được ghi nhận.</p>
            <button 
              className="glass-btn btn-secondary"
              style={{ margin: '0 auto' }}
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
              className="glass-btn btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi Câu Hỏi'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default GuestPage;
