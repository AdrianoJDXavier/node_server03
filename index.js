const express = require('express');
const app = express();
let port = 3000;
app.use(express.urlencoded());


let parans_module = require("./routes.js")
app.use('/', parans_module);

app.post('/test_post', (req, res) => {
    const { nome, sobrenome } = req.body;
    res.send("<h3>Voce acessou uma página via método post seu nome é " + nome + " " + sobrenome + "</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});


app.get('*', (req, res) => {
    res.send("<h3>Link invalido: 404</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});

app.listen(port, () => console.log(`Escutando na porta ${port}`))