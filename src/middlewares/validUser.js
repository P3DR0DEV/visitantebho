const { verify } = require('jsonwebtoken')

require('dotenv').config()

function validUser(req, res, next) {
    try {
        const Authorization = req.headers['authorization']
        if(!Authorization) throw new Error('Header have not been declared')

        const token = Authorization.split(' ')[1]
        const { userId } = verify(token, process.env.JWT_CREATE_ACCESS_TOKEN);
        return userId
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}