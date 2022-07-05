let express = require('express');
let router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'))
});

router.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/css/style.css'))
});

router.get('/img/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/img/logo.png'))
});

router.get('/index.html', (req, res) => {
    var nome = req.query.nome;
    var sobrenome = req.query.sobrenome;

    if (nome === '' || sobrenome === '') {
        res.sendFile(path.join(__dirname + '/form.html'))
    } else {
        res.send("<h3>Olá " + nome + " " + sobrenome + "</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
    }
});

router.get('/formJson', (req, res) => {
    res.sendFile(path.join(__dirname + '/formJson.html'))
});

router.get('/json', (req, res) => {
    var nome = req.query.nome;
    var sobrenome = req.query.sobrenome;
    res.status(200).json({ Nome: nome, Sobrenome: sobrenome })
});

router.get('/formPost', (req, res) => {
    res.sendFile(path.join(__dirname + '/formPost.html'))
});

router.get('/ab[0-9]cd', (req, res) => {
    res.send("<h3>Você acessou o link através de expressão regular</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});

router.get('/:p', (req, res) => {
    res.send("<h3>Voce informou o paramentro " + req.params.p + "</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});

router.get('/:user/:u/nome/:n', (req, res) => {
    res.send("<h3>Voce acessou informações do usuario " + req.params.u + " de nome " + req.params.n + "</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});

module.exports = router;