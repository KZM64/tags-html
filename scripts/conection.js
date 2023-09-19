const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Node.js!');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});