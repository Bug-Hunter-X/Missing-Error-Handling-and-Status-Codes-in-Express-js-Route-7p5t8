const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Returning a simple message without status code
    res.send('User not found'); 
  } else {
    res.json(user);
  }
});

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];