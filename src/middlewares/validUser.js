require('dotenv').config()

function validUser(req, res, next) {
    try {
        const Authorization = req.headers['Authorization']
        if(!Authorization) throw new Error('Header have not been declared')

        const bearerToken = Authorization.split(' ')[1]
        
        req.token = bearerToken
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}