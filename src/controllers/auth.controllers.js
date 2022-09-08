const ad = require('../config/activeDirectory.js');
require('dotenv').config();
const domain = process.env.DOMAIN;
const { 
  genTokens,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken 
} = require('../config/token/genNewToken')
const permissoes = [{ username:'150367' }, { username:'150176' }];
const { verify } = require("jsonwebtoken")

//Método para autenticar usuários
exports.user_authenticate = async (req, res) => {
  const { user, pass } = req.body;
  try {
    await ad.authenticate( domain + "\\" + user, pass,(err, auth) => {
      if (auth) {
        const valid = permissoes.find(allowedUsers => allowedUsers.username === user)
        if (!valid){
          return res.status(403).redirect('/notAllowed')
        }
        const accessToken = genTokens({ user });
        const validToken = verify(accessToken, process.env.JWT_CREATE_ACCESS_TOKEN)


        if(validToken){
          res.redirect('/home', 200, validToken);
        } else{
          res.send({
            message: "invalid Token"
          })
        }
        // const refreshToken = createRefreshToken({ user });
        // sendRefreshToken(res, refreshToken) 
      }
      else {
        return res.status(401).send({
          message: "Authentication failed!",
          error: err
        });
      }
    })
  }catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
  }
};