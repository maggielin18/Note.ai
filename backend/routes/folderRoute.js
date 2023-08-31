const express = require('express');
const router = express.Router();
const Folder = require('../models/folderSchema');  // Path to your Folder model

// Create a new folder [Create]
router.post('/', async (req, res) => {
  try {
    const folder = new Folder(req.body);
    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create folder' });
  }
});

// Read all folders [Read all]
router.get('/', async (req, res) => {
  try {
    const folders = await Folder.find();
    res.status(200).json(folders);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch folders' });
  }
});

// Read a specific folder by ID [Read one]
router.get('/:id', async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.id);
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    res.status(200).json(folder);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch folder' });
  }
});

// Update a specific folder by ID [Update]
router.put('/:id', async (req, res) => {
  try {
    const folder = await Folder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    res.status(200).json(folder);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update folder' });
  }
});

// Delete a specific folder by ID [Delete]
router.delete('/:id', async (req, res) => {
  try {
    const folder = await Folder.findByIdAndDelete(req.params.id);
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    res.status(200).json({ message: 'Folder deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete folder' });
  }
});

module.exports = router;