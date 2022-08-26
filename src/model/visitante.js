const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    hostname:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    }
})

const Visitante = mongoose.model('Visitante', pessoaSchema)

module.exports = Visitante