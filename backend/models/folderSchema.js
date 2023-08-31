const mongoose = require('mongoose');
const noteSchema = require('./noteSchema');

const folderSchema = new mongoose.Schema({
  title: String,
  content: [noteSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;