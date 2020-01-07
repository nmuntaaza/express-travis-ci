const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Ci with Travis');
});

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;