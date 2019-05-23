const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Connected to ${port}`);
})