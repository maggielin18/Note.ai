const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Note = require('./models/noteSchema');
const Folder = require('./models/folderSchema');
const app = express();
const PORT = process.env.PORT || 3005;
const url = 'mongodb://localhost:27017/database';
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./routes/folderRoute'));
app.use('/', require('./routes/noteRoute'));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    app.get('/', (req, res) => {
      console.log('Root route hit');
      res.send('Server with MongoDB is up and running!');
    });

    app.post('/', async (req, res) => {
      try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        await note.save();
        res.status(201).json(note);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create note' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  
  // try {
  //   const db = await mongoose.connect(MONGODB_URI);
  //   console.log("Connected to ", db.connection.name);
  // } catch (error) {
  //   console.error(error);
  // }
  
  // mongoose.connection.on("connected", () => {
  //   console.log("Mongoose is connected");
  // });
  
  // mongoose.connection.on("disconnected", () => {
  //   console.log("Mongoose is disconnected");
  // });

  .catch(err => {
    console.error('Connection error:', err);
  });