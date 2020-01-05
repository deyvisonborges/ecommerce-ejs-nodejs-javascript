'use strict'

const schema = require('simple-mongoose-creator');
schema.smc('categorias', {
    titulo: {
        trim: true, 
        createIndexes: true , 
        required: true, 
        type: String
    },
    descricao: {
        type: String, 
        required: true
    },
    dataCriacao: {
        type: Date, 
        default: Date.now
    }
});

module.exports = schema;