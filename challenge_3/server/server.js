// import dependencies
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3002;

const dirName = path.join(__dirname, '/public');
console.log('dirName ', dirName);


// middleware
app.use(express.static(dirName));

// routes
app.post('/customerData', (req, res) => {
  console.log('req.body ', req.body);
})


// set up server to listen
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
})