// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();
const PORT = 5000;

console.log('db', db);

server.get('/', (req, res) => {
  res.send('Hello there!')
})



server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({error: "The users information could not be retrieved."})
    }
    )
})






server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

