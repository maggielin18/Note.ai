const express = require('express');
const router = express.Router();
const Note = require('../models/note');  // Path to your Note model

// Create a new note [Create]
router.post('/', async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create note' });
  }
});

// Read all notes [Read all]
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch notes' });
  }
});

// Read a specific note by ID [Read one]
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch note' });
  }
});

// Update a specific note by ID [Update]
router.put('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update note' });
  }
});

// Delete a specific note by ID [Delete]
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;