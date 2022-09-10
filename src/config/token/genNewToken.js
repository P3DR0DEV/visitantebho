const jwt = require('jsonwebtoken');
require('dotenv').config()

const genTokens = (payload)=>{ 
    return jwt.sign(payload, process.env.JWT_CREATE_ACCESS_TOKEN, {
        expiresIn: '7m'
    });
};

const createRefreshToken = (payload)=>{
    return jwt.sign(payload, process.env.JWT_CREATE_ACCESS_TOKEN, {
        expiresIn: '7d'
    });
};

const sendAccessToken = (res, req, accesstoken) =>{
    res.send({
        accesstoken,
        user: req.body.user
    })
}
const sendRefreshToken = (res, token) =>{
    res.cookie('refreshtoken', token, {
        httpOnly: true,
        path: '/refresh_token'
    });
};

module.exports = { 
    genTokens,
    createRefreshToken,
    sendRefreshToken,
    sendAccessToken
};