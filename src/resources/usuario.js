require('../models/usuario');

const mongoose = require('mongoose');
const model = mongoose.model('usuarios');
const cript = require('bcryptjs');
const salt = 10;

class Usuario {
    static async registrar(data) {
        let { senha } = data;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        data.senha = senha;
        return await new model(data).save();
    }

    static async verificarRegistro(data) {
        const { email } = data;
        const usuario = await model.findOne({email});
        return usuario;
    }

    static async veriricarLogin(data) {
        const { email, senha } = data;
        const usuario = await model.findOne({email}).select('+senha');
        return usuario;
    }

    static async buscarTodos() {
        return await model.find({});
    }

    static async buscaPeloID(id) {
        return model.findOne({_id: id});
    }

    static async atualizar(id, data) {
        return await model.findOneAndReplace(id, { $set: data });
    }

    static async excluirTodos() {
        return await model.removeAll();
    }

    static async excluirPeloID(id) {
        return await model.findOneAndRemove(id);
    }
}

module.exports = Usuario;