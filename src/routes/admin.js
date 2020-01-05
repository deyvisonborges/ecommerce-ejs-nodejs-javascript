const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const _ADMIN = require('../controllers/admin');

router.get('/login', _ADMIN.getLogin);

module.exports = router; 