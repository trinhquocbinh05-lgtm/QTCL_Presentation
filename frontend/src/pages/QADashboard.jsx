import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Inbox, Trash2, CheckCircle, MessageCircle, X } from 'lucide-react';
import axios from 'axios';
import './PageStyles.css';

const QADashboard = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answeringId, setAnsweringId] = useState(null);
  const [answerText, setAnswerText] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const fetchQuestions = async () => {
    setLoading(true);
    try {
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

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) return;
    try {
      await axios.delete(`${apiUrl}/api/questions/${id}`);
      setQuestions(questions.filter(q => q._id !== id));
    } catch (err) {
      console.error('Failed to delete question:', err);
      alert('Không thể xóa câu hỏi. Vui lòng thử lại.');
    }
  };

  const handleToggleAnswered = async (id, currentStatus) => {
    try {
      const res = await axios.patch(`${apiUrl}/api/questions/${id}`, {
        answered: !currentStatus
      });
      setQuestions(questions.map(q => q._id === id ? res.data : q));
    } catch (err) {
      console.error('Failed to update question status:', err);
    }
  };

  const submitAnswer = async (id) => {
    try {
      const res = await axios.patch(`${apiUrl}/api/questions/${id}`, {
        answered: true,
        answerContent: answerText
      });
      setQuestions(questions.map(q => q._id === id ? res.data : q));
      setAnsweringId(null);
      setAnswerText('');
    } catch (err) {
      console.error('Failed to submit answer:', err);
      alert('Không thể cập nhật câu trả lời.');
    }
  };

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
              className={`question-card glass-card ${q.answered ? 'opacity-70' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              style={{ padding: '1.5rem', margin: 0, position: 'relative' }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="q-author">{q.name}</h3>
                  <p className="q-email">{q.email}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    className={`p-2 rounded-full transition-colors ${q.answered ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'}`}
                    onClick={() => handleToggleAnswered(q._id, q.answered)}
                    title={q.answered ? "Đánh dấu chưa trả lời" : "Đánh dấu đã trả lời"}
                  >
                    <CheckCircle size={18} />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-slate-700/50 text-slate-300 hover:bg-blue-500/30 hover:text-blue-400 transition-colors"
                    onClick={() => {
                      setAnsweringId(answeringId === q._id ? null : q._id);
                      setAnswerText(q.answerContent || '');
                    }}
                    title="Viết câu trả lời"
                  >
                    <MessageCircle size={18} />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-slate-700/50 text-slate-300 hover:bg-red-500/30 hover:text-red-400 transition-colors"
                    onClick={() => handleDelete(q._id)}
                    title="Xóa câu hỏi"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="q-content">{q.content}</div>
              
              {q.answerContent && answeringId !== q._id && (
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <p className="text-sm font-semibold text-blue-400 mb-1">Câu trả lời:</p>
                  <p className="text-slate-300 text-sm whitespace-pre-wrap">{q.answerContent}</p>
                </div>
              )}

              {answeringId === q._id && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-blue-400">Nhập câu trả lời:</p>
                    <button onClick={() => setAnsweringId(null)} className="text-slate-400 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                  <textarea
                    className="w-full bg-slate-800/50 border border-slate-600 rounded p-2 text-white text-sm mb-2 focus:border-blue-500 outline-none"
                    rows="3"
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="Viết câu trả lời của bạn..."
                  ></textarea>
                  <div className="flex justify-end">
                    <button 
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm transition-colors"
                      onClick={() => submitAnswer(q._id)}
                    >
                      Lưu trả lời
                    </button>
                  </div>
                </div>
              )}

              <p className="q-date mt-4">
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
