'use strict'

const storage = require('localtoken');
const jwt = require('jsonwebtoken');
const _SECRET = require('../../bin/keys');

module.exports.authorize = async (req, res, next) => {
    try {
        const data = await storage.getInLocal('token');
        if(!data) {
            return res.send('Permissão negada!');
        }
        return next();
    } catch (err) {
        const msg = 'Erro na autorização. Tente mais tarde!';
        console.log(msg);
        throw new Error(msg);
    }
}

module.exports.generateToken = async (data) => {
    try {
        return await jwt.sign(data, _SECRET.secret);
    } catch (err) {
        const msg = 'Houve um erro ao gerar o token';
        console.log(msg);
        throw new Error(msg);
    }
}

module.exports.decoded = async (token) => {
    try {
        const data = await jwt.decode(token, _SECRET.secret);
        return data;
    } catch (err) {
        const msg = 'Houve um erro ao decodificar o token';
        console.log(msg);
        throw new Error(msg);
    }
}