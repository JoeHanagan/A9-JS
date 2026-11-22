const express = require('express');
const path = require('path');
const jokes = require('./jokes.json');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname)));

app.get('/api/v1/random-joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});