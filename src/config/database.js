const mongoose = require('mongoose')
mongoose.Promise = global.Promise
<<<<<<< HEAD
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser: true})
=======

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'
module.exports = mongoose.connect(url, {useMongoClient: true})
>>>>>>> 01.05.19

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
"'{VALUE}' não é válido para o atributo '{PATH}'."