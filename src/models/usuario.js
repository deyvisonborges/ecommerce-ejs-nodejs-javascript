
const schema = require('simple-mongoose-creator');

schema.smc('usuarios', {
    nome: {
        trim: true, 
        createIndexes: true, 
        required: true, 
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true,
        select: false // pra nao retornar a senha quando for uma consulta publica
    }
});

module.exports = schema;