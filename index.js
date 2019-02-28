// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();
const PORT = 5000;

// this is a piece of middleware that will make your POST requests work
server.use(express.json());

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

server.post('/api/users', (req, res) => {
  const newUser = req.body;
  if (newUser.name && newUser.bio) {
    db.insert(newUser)
      .then(users => {
        res.status(201).json(users);
      })
      .catch(error => {
      res.status(500).json({error: "There was an error while saving the user to the database."})
    })
  } else {
    res.status(400).statusMessage({errorMessage: "Please provide name and bio for the user."})
  }
})






server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

