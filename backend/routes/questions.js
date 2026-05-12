import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new question
router.post('/', async (req, res) => {
  const { name, email, content } = req.body;
  if (!name || !email || !content) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }

  const question = new Question({
    name,
    email,
    content,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH update a question's answer status or content
router.patch('/:id', async (req, res) => {
  try {
    const { answered, answerContent, name, email, content } = req.body;
    
    // Build update object dynamically
    const updateData = {};
    if (answered !== undefined) updateData.answered = answered;
    if (answerContent !== undefined) updateData.answerContent = answerContent;
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (content !== undefined) updateData.content = content;

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Không tìm thấy câu hỏi.' });
    }
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a question
router.delete('/:id', async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Không tìm thấy câu hỏi.' });
    }
    res.json({ message: 'Đã xóa câu hỏi thành công.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
