const mongoose = require('mongoose');
const noteSchema = require('./noteSchema');

const folderSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;