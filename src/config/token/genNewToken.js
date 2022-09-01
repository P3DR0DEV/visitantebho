const jwt = require('jsonwebtoken');
require('dotenv').config()

const genTokens = (payload)=>{ 
    return jwt.sign(payload, process.env.JWT_CREATE_ACCESS_TOKEN,{
        expiresIn: '7m'
    })
}

module.exports = { genTokens } 