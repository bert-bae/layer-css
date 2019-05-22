const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3001;

app.use("/", express.static("./"));

// app.use('ejs')
app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(port, () => {
  console.log(`Connected to ${port}`);
})