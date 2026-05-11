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

export default router;
