const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

// Get all quizzes
router.get('/', async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Get quiz by ID
router.get('/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

// Adaptive Submission: Return next question based on answer
router.post('/:id/submit', async (req, res) => {
  const { answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);
  // Find next question logic (simple adaptive):
  let lastAnswer = answers[answers.length - 1];
  let nextDifficulty = lastAnswer.isCorrect ? 'hard' : 'easy';
  let nextQuestion = quiz.questions.find(q => q.difficulty === nextDifficulty);
  res.json({ nextQuestion });
});

module.exports = router;
