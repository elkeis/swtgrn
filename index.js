const express = require('express');
const path = require('path');
const products = require('./data')

const app = express();

console.log(products);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'data')));

// Put all API endpoints under '/api'
app.get('/api/test', (req, res) => {
  res.json({
    test: 'success'
  });
});


app.get('/api/products', (req, res) => {
  res.json(products);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`sweetgreen.by is listening on port:${port}`);
