const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const gifs = require('./routes/gifs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/gifs', gifs);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000, function (req, res) {
  console.log('Now listening on port 3000.');
  console.log('Go to localhost:3000 to see site.');
  console.log('ctrl+c shuts down server.');
});
