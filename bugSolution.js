const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    return res.json(user);
  }
});

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});