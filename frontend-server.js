// frontend-server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8054; // Choose a port for your frontend service

// Serve static files (e.g., CSS, JavaScript, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend server is running on port ${port}`);
});
