'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const _USUARIO = require('../controllers/usuario');
const _PEDIDO = require('../controllers/pedido');
const _CARRINHO = require('../controllers/carrinho');

// usuario
router.get('/login', _USUARIO.getLogin);
router.get('/registro', _USUARIO.getRegistro);
router.get('/logout', _USUARIO.logout);

router.post('/login', _USUARIO.postLogin);
router.post('/registro', _USUARIO.postRegistro);


// pedido
router.get('/pedido', _PEDIDO.getPedido);


// router.get('/login', _USUARIO.getLogin);
// router.get('/edit/id/:id', auth.authorize, _USUARIO.getById);
// router.post('/edit', auth.authorize, _USUARIO.update);
// router.post('/update/:id', auth.authorize, _USUARIO.update);
// router.post('/delete/:id',auth.authorize, _USUARIO.delete);

module.exports = router;