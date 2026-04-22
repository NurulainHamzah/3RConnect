const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation, you should add more validation and hashing for production
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  // Check if the email is already registered
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email is already registered.' });
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
