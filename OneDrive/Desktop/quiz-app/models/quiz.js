const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ type: String, required: true }],
      difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
      correctAnswer: { type: String, required: true }
    }
  ]
});
module.exports = mongoose.model('Quiz', quizSchema);
