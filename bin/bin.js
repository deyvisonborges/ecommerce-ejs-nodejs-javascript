'use strict'

// módulos
const express = require('express');
const bodyp = require('body-parser');
const morgan = require('morgan')

// criando app
const app = express();

// configurando parse
app.use(bodyp.json({limit: '5mb'}));
app.use(bodyp.urlencoded({extended: false}));

app.use(morgan('dev'));

// definindo template engine e local publico dos arquivos
app.set('view engine', 'ejs');
app.set('views', 'views');

// definindo statics
app.use(express.static('public'));

// registrando segmentos de rotas
const r_admin = require('../src/routes/admin');
const r_usuario = require('../src/routes/usuario'); // rota de usuarios

app.use('/admin', r_admin);
app.use('/usuario', r_usuario);

// rota principal
app.use('/', (req, res, next) => {
    try {
        return res.redirect('/usuario/login');
    } catch (err) {
        next(err);
    }
});

// tratamento para demais erros
app.use((err, req, res, next) => {
    const message = err.message;
    res.send(message);
});

module.exports = app;
