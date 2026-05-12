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
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 6;

  const apiUrl = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:5000`;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchQuery]);

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) return;
    try {
      await axios.delete(`${apiUrl}/api/questions/${id}`);
      setQuestions(questions.filter(q => q._id !== id));
      alert('Đã xóa câu hỏi thành công!');
    } catch (err) {
      console.error('Failed to delete question:', err);
      alert('Không thể xóa câu hỏi: ' + (err.response?.data?.message || err.message));
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
      alert('Không thể cập nhật trạng thái: ' + (err.response?.data?.message || err.message));
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
      alert('Cập nhật câu trả lời thành công!');
    } catch (err) {
      console.error('Failed to submit answer:', err);
      alert('Không thể cập nhật câu trả lời: ' + (err.response?.data?.message || err.message));
    }
  };

  const filteredQuestions = questions.filter(q => {
    if (filter === 'answered' && !q.answered) return false;
    if (filter === 'unanswered' && q.answered) return false;
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const matchName = q.name?.toLowerCase().includes(lowerQuery);
      const matchEmail = q.email?.toLowerCase().includes(lowerQuery);
      const matchContent = q.content?.toLowerCase().includes(lowerQuery);
      return matchName || matchEmail || matchContent;
    }
    
    return true;
  });

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages === 0 ? 1 : totalPages));
  const indexOfLastItem = safeCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="page-container">
      <div className="sticky-header">
        <div className="dashboard-header" style={{ marginBottom: '1.5rem', borderBottom: 'none', paddingBottom: 0 }}>
          <div>
            <button className="back-link" style={{ marginBottom: '0.5rem' }} onClick={() => navigate('/admin')}>
              <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Bảng điều khiển
            </button>
            <h1 className="dashboard-title">HỆ THỐNG <span className="highlight-blue">Q&A</span></h1>
          </div>
          <button className="glass-btn btn-secondary refresh-btn" onClick={fetchQuestions} title="Làm mới">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} style={{ marginRight: '6px' }} />
            <span className="refresh-text">Làm mới</span>
          </button>
        </div>

        <div className="filter-controls" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            className="glass-input" 
            placeholder="Tìm kiếm theo tên, email, nội dung..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1, minWidth: '250px' }}
          />
          <select 
            className="glass-input" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: 'auto', minWidth: '150px' }}
          >
            <option value="all" style={{ color: 'black' }}>Tất cả câu hỏi</option>
            <option value="unanswered" style={{ color: 'black' }}>Chưa trả lời</option>
            <option value="answered" style={{ color: 'black' }}>Đã trả lời</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex-center" style={{ padding: '3rem 0' }}>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Đang tải câu hỏi...</p>
        </div>
      ) : questions.length === 0 ? (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Inbox size={48} style={{ margin: '0 auto 1rem', color: '#64748b' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Chưa có câu hỏi nào</h3>
          <p>Hãy mời khán giả đặt câu hỏi thông qua trang Khách.</p>
        </motion.div>
      ) : (
        <>
          <motion.div 
            className="questions-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {currentQuestions.map((q, index) => (
            <motion.div 
              key={q._id} 
              className={`question-card glass-card ${q.answered ? 'card-answered' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              style={{ padding: '1.5rem', margin: 0, position: 'relative' }}
            >
              <div className="question-header">
                <div>
                  <h3 className="q-author">{q.name}</h3>
                  <p className="q-email">{q.email}</p>
                </div>
                <div className="action-buttons-group">
                  <button 
                    className={`icon-btn ${q.answered ? 'btn-answered' : ''}`}
                    onClick={() => handleToggleAnswered(q._id, q.answered)}
                    title={q.answered ? "Đánh dấu chưa trả lời" : "Đánh dấu đã trả lời"}
                  >
                    <CheckCircle size={20} />
                  </button>
                  <button 
                    className="icon-btn"
                    onClick={() => {
                      setAnsweringId(answeringId === q._id ? null : q._id);
                      setAnswerText(q.answerContent || '');
                    }}
                    title="Viết câu trả lời"
                  >
                    <MessageCircle size={20} />
                  </button>
                  <button 
                    className="icon-btn btn-delete"
                    onClick={() => handleDelete(q._id)}
                    title="Xóa câu hỏi"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              
              <div className="q-content">{q.content}</div>
              
              {q.answerContent && answeringId !== q._id && (
                <div className="answer-box">
                  <p className="answer-label">Câu trả lời:</p>
                  <p className="answer-text">{q.answerContent}</p>
                </div>
              )}

              {answeringId === q._id && (
                <div className="answer-form">
                  <div className="answer-form-header">
                    <p className="answer-label">Nhập câu trả lời:</p>
                    <button onClick={() => setAnsweringId(null)} className="btn-close">
                      <X size={16} />
                    </button>
                  </div>
                  <textarea
                    className="glass-textarea"
                    style={{ minHeight: '80px', marginBottom: '0.5rem', fontSize: '0.9rem', padding: '0.75rem' }}
                    rows="3"
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="Viết câu trả lời của bạn..."
                  ></textarea>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      className="glass-btn btn-primary btn-small"
                      onClick={() => submitAnswer(q._id)}
                    >
                      Lưu trả lời
                    </button>
                  </div>
                </div>
              )}

              <p className="q-date">
                {new Date(q.createdAt).toLocaleString('vi-VN')}
              </p>
            </motion.div>
          ))}
          </motion.div>
          
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', gap: '1rem' }}>
              <button 
                className="glass-btn btn-secondary btn-small"
                onClick={() => setCurrentPage(Math.max(safeCurrentPage - 1, 1))}
                disabled={safeCurrentPage === 1}
                style={{ opacity: safeCurrentPage === 1 ? 0.5 : 1, cursor: safeCurrentPage === 1 ? 'not-allowed' : 'pointer', minWidth: '80px' }}
              >
                Trước
              </button>
              <span style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: 500 }}>
                Trang {safeCurrentPage} / {totalPages}
              </span>
              <button 
                className="glass-btn btn-secondary btn-small"
                onClick={() => setCurrentPage(Math.min(safeCurrentPage + 1, totalPages))}
                disabled={safeCurrentPage === totalPages}
                style={{ opacity: safeCurrentPage === totalPages ? 0.5 : 1, cursor: safeCurrentPage === totalPages ? 'not-allowed' : 'pointer', minWidth: '80px' }}
              >
                Sau
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QADashboard;
