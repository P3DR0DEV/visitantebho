const { verify } = require('jsonwebtoken')

require('dotenv').config()

function validUser(req, res, next) {
    try {
        console.log(req.session.user)
        if((!req.session.user.user && req.session.user.logado !== true)){
            res.redirect('/notAllowed')
        } else{
            next()
        }; 
        // const Authorization = req.headers['authorization']
        // if(!Authorization) throw new Error('Header have not been declared')
        
        // const token = Authorization.split(' ')[1]
        // const user = verify(token, process.env.JWT_CREATE_ACCESS_TOKEN);
        // if(!user) throw new Error('Invalid token')
        // next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}