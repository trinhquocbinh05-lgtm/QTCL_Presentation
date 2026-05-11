import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, Send, X, MessageCircle } from 'lucide-react';
import './Slide17.css';

const Slide17 = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [activeAnswerId, setActiveAnswerId] = useState(null);
  const [answerText, setAnswerText] = useState('');

  // Load questions from localStorage on mount
  useEffect(() => {
    const savedQuestions = localStorage.getItem('presentation_questions');
    if (savedQuestions) {
      try {
        setQuestions(JSON.parse(savedQuestions));
      } catch (e) {
        console.error("Error parsing saved questions", e);
      }
    }
  }, []);

  // Save questions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('presentation_questions', JSON.stringify(questions));
  }, [questions]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim() === '') return;
    
    const newQ = {
      id: Date.now().toString(),
      text: newQuestion,
      answer: ''
    };
    
    setQuestions(prev => [...prev, newQ]);
    setNewQuestion('');
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    if (activeAnswerId === id) {
      setActiveAnswerId(null);
      setAnswerText('');
    }
  };

  const handleOpenAnswer = (q) => {
    setActiveAnswerId(q.id);
    setAnswerText(q.answer || '');
  };

  const handleSaveAnswer = (id) => {
    setQuestions(prev => prev.map(q => 
      q.id === id ? { ...q, answer: answerText } : q
    ));
    setActiveAnswerId(null);
    setAnswerText('');
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
        >
          <div className="qna-header">
            <div className="qna-icon-wrapper">
              <MessageCircleQuestion size={40} className="qna-header-icon" />
            </div>
            <h3>Q&A SESSION</h3>
            <p>Mời quý thầy cô và các bạn đặt câu hỏi</p>
          </div>

          <div className="qna-interactive">
            <form onSubmit={handleAddQuestion} className="qna-form">
              <input 
                type="text"
                className="qna-input"
                placeholder="Nhập câu hỏi của bạn tại đây..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
              <button type="submit" className="qna-submit-btn">
                <Send size={20} />
              </button>
            </form>

            <div className="qna-list">
              <AnimatePresence>
                {questions.map((q, index) => (
                  <motion.div 
                    key={q.id}
                    className="qna-item-container"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, scale: 0.9, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: '12px' }}
                  >
                    <div className="qna-item">
                      <span className="qna-number">Q{index + 1}</span>
                      <p className="qna-text">{q.text}</p>
                      
                      <div className="qna-actions">
                        <button 
                          className="qna-answer-btn" 
                          onClick={() => handleOpenAnswer(q)}
                          title="Thêm/Sửa câu trả lời"
                        >
                          <MessageCircle size={18} />
                        </button>
                        <button 
                          className="qna-delete-btn" 
                          onClick={() => handleDeleteQuestion(q.id)}
                          title="Xóa câu hỏi"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Answer Edit Area */}
                    <AnimatePresence>
                      {activeAnswerId === q.id && (
                        <motion.div 
                          className="qna-answer-area"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <div className="qna-answer-input-wrapper">
                            <textarea 
                              className="qna-answer-input"
                              placeholder="Nhập câu trả lời..."
                              rows={3}
                              value={answerText}
                              onChange={(e) => setAnswerText(e.target.value)}
                              autoFocus
                            />
                            <div className="qna-answer-actions">
                              <button 
                                className="qna-cancel-btn"
                                onClick={() => setActiveAnswerId(null)}
                              >
                                Hủy
                              </button>
                              <button 
                                className="qna-save-btn"
                                onClick={() => handleSaveAnswer(q.id)}
                              >
                                Lưu giải đáp
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Display Answer if exists and not editing */}
                    {q.answer && activeAnswerId !== q.id && (
                      <div className="qna-answer-area">
                        <div className="qna-answer-display" onClick={() => handleOpenAnswer(q)}>
                          <span className="qna-answer-label">Giải đáp:</span>
                          <p className="qna-answer-text">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {questions.length === 0 && (
                <motion.div 
                  className="qna-empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.3)' }}
                >
                  <p>Chưa có câu hỏi nào. Hãy là người đầu tiên đặt câu hỏi!</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide17;
