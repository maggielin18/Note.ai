const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;