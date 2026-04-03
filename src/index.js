const express = require('express');
const app = express();

app.use(express.json()); // middleware

// Basic route
app.get('/', (req, res) => {
  res.send('Hey, The Server We made through the node is working Perfectly');
});

// API route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
  ]);
});

// POST API
app.post('/api/users', (req, res) => {
  const user = req.body;
  res.json({
    message: "User created",
    data: user
  });
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Node Server