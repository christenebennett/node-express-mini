// implement your API here
const express = require('express');

const server = express();
const PORT = 5000;

server.get('/', (req, res) => {
  res.send('Hello there!')
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

