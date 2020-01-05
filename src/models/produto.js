'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const produto = new schema({
    nome: {
        type: String, 
        required: true, 
        trim: true, 
        index: true
    },
    modelo: {
        type: String, 
        required: true
    },
    fabricante: {
        type: Number, 
        required: true
    }, 
    preco: {
        type: Boolean,
        required: true, 
        default: true
    },
    disponibilidade: {
        type: Boolean,
        required: true, 
        default: true
    },
    imagens: [{
        type: String,
        required: false
    }],
    descricao: {

    },
    dados_tecnicos: {
        medida: {

        }
    },
    termos_garantia: {

    },
    categorias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorias',
        required: true
    }],
    entrada_estoque: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Produto', produto);