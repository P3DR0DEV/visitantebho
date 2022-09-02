const { verify } = require("jsonwebtoken")
require('dotenv').config()

function validUser(req, res, next) {
    try {
        //validar se existe auth dentro do header
        const Authorization = req.headers['Authorization']
        if(!Authorization) throw new Error('Header have not been declared')
        //validar se a strin do header auth começa com Bearer
        const token = Authorization.split(' ')[1]
        if(Authorization[0] !== 'Bearer') throw new Error('Invalid header type')
        // ai sim validar o token com o jwt.verify
        const user = verify(token, process.env.JWT_CREATE_ACCESS_TOKEN)
        return user
        //salvar user na req
        //next  
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}