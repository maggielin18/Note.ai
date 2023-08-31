const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/noteSchema');
const app = express();
const PORT = 3005;
const url = 'mongodb://localhost:27017/notebank';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    app.get('/', (req, res) => {
      console.log('Root route hit');
      res.send('Server with MongoDB is up and running!');
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });