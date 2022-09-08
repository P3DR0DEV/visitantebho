const jwt = require('jsonwebtoken');
require('dotenv').config()

const genTokens = (payload)=>{ 
    return jwt.sign(payload, process.env.JWT_CREATE_ACCESS_TOKEN, {
        expiresIn: '7m'
    }, (err, token)=>{
        res.json({ token })
    });
};

const createRefreshToken = (payload)=>{
    return jwt.sign(payload, process.env.JWT_CREATE_ACCESS_TOKEN, {
        expiresIn: '7d'
    });
};

const sendAccessToken = (req, res, accesstoken) =>{
    res.send({
        accesstoken,
        user: req.body.user
    })
}
const sendRefreshToken = (res, token) =>{
    res.cookie(refreshtoken, token, {
        path: '/refresh_token',
        httpOnly: true
    });
};

module.exports = { 
    genTokens,
    createRefreshToken,
    sendRefreshToken,
    sendAccessToken
} 