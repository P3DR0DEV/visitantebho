const { verify } = require("jsonwebtoken")
require('dotenv').config()

function validUser(req, res, next) {
    try {
        //validar se existe auth dentro do header
        const Authorization = req.headers['Authorization']
        if(!Authorization) throw new Error('User has not logged in.')
        //validar se a strin do header auth começa com Bearer
        if(Authorization[0] !== 'Bearer') throw new Error('Invalid Token')
        // ai sim validar o token com o jwt.verify
        const token = Authorization.split(' ')[1]
        verify(token, process.env.JWT_CREATE_ACCESS_TOKEN)
        //salvar user na req
        //next  
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}