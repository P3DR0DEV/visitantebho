const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
    "STAMP":{
        type: String
    },
    "HOST":{
        type: String
    },
    "NOME":{
        type: String
    },
    "CPF":{
        type: String
    }
})

const Visitante = mongoose.model('',pessoaSchema,'Dados')

module.exports = Visitante