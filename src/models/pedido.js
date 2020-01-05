'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pedido = new schema({
    nome: {
        type: String,
        trim: true,
        required: true
    },
    sobrenome: {
        type: String,
        trim: true,
        required: true
    },
    cpf: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    endereco: {
        logradouro: {
            type: String,
            trim: true,
            required: true
        },
        numero: {
            type: Number,
            trim: true,
            required: true
        },
        complemento: {
            type: String,
            trim: true,
            required: true
        }
    },
    regiao: {
        cidade: {
            type: String,
            trim: true,
            required: true
        },
        estado: {
            type: Number,
            trim: true,
            required: true
        }
    },
    cep: {
        type: String,
        trim: true,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }
});
    

module.exports = mongoose.model('Pedidos', pedido);