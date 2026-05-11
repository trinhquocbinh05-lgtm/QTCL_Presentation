import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Inbox } from 'lucide-react';
import axios from 'axios';
import './PageStyles.css';

const QADashboard = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${apiUrl}/api/questions`);
      setQuestions(res.data);
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/');
      return;
    }
    fetchQuestions();
  }, [navigate]);

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <button className="back-link mb-2" onClick={() => navigate('/admin')}>
            <ArrowLeft size={16} className="mr-2" /> Bảng điều khiển
          </button>
          <h1 className="dashboard-title">HỆ THỐNG <span className="highlight-blue">Q&A</span></h1>
        </div>
        <button className="glass-btn btn-secondary" onClick={fetchQuestions}>
          <RefreshCw size={20} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
          Làm mới
        </button>
      </div>

      {loading ? (
        <div className="flex-center py-12">
          <p className="text-xl text-slate-300">Đang tải câu hỏi...</p>
        </div>
      ) : questions.length === 0 ? (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Inbox size={48} className="mx-auto mb-4 text-slate-500" />
          <h3 className="text-xl font-bold mb-2">Chưa có câu hỏi nào</h3>
          <p>Hãy mời khán giả đặt câu hỏi thông qua trang Khách.</p>
        </motion.div>
      ) : (
        <motion.div 
          className="questions-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {questions.map((q, index) => (
            <motion.div 
              key={q._id} 
              className="question-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              style={{ padding: '1.5rem', margin: 0 }}
            >
              <h3 className="q-author">{q.name}</h3>
              <p className="q-email">{q.email}</p>
              <div className="q-content">{q.content}</div>
              <p className="q-date">
                {new Date(q.createdAt).toLocaleString('vi-VN')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default QADashboard;
