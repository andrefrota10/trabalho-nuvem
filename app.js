const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo a Home!</h1><p>Esta alterao.</p>');
});


app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre o Projeto</h1><p>Aplicacao Node.js para o trabalho de nuvem.</p>');
});


app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1><p>Email: aluno@exemplo.com</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
