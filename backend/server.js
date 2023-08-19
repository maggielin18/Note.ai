
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/notebank';
const app = express();
const PORT = process.env.PORT || 3001;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
  const db = client.db('notebank'); // Change 'mydatabase' to your database name

  // Define routes here, using the `db` object to interact with the database

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
