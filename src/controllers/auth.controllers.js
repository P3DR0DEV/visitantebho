const ad = require('../config/activeDirectory.js')
require('dotenv').config()
const domain = process.env.DOMAIN
const permissoes = [{ username:'' }, { username:'' }]

//Método para autenticar usuários
exports.user_authenticate = async (req, res) => {
  const { user, pass } = req.body;
  try {
    await ad.authenticate( domain + "\\" + user, pass,
    function (err, auth) {
      if (auth) {
        // return res.status(200).json({
          // message: "Authenticated!"
        // });
        const valid = permissoes.find(allowedUsers => allowedUsers.username === user)
        if (!valid){
          return res.sendStatus(403)
        }
        return res.sendStatus(200)
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