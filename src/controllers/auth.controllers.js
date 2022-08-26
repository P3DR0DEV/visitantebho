const ad = require('../config/activeDirectory.js')
require('dotenv').config()
const viewController = require('./view.home')
const domain = process.env.DOMAIN
const permissoes = [{ username:'150367' }, { username:'150176' }]

//Método para autenticar usuários
exports.user_authenticate = async (req, res) => {
  const { user, pass } = req.body;
  try {
    await ad.authenticate( domain + "\\" + user, pass,
    function (err, auth) {
      if (auth) {
        const valid = permissoes.find(allowedUsers => allowedUsers.username === user)
        if (!valid){
          return res.sendStatus(403)
        }
        res.redirect('/home')
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