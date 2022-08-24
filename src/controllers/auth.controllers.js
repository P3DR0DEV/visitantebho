const ad = require('../config/activeDirectory.js')
require('dotenv').config()
const domain = process.env.DOMAIN

//Método para autenticar usuários
exports.user_authenticate = async (req, res) => {
  const { user, pass} = req.body;
  console.log(user)
  console.log(pass)
  console.log(domain)
  try {
    await ad.authenticate( domain + "\\" + user, pass,
    function (err, auth) {
      if (auth) {
        return res.status(200).json({
          message: "Authenticated!"
        });
      }
      else {
        return res.status(401).send({
          message: "Authentication failed!",
          error: err
        });
      }
    });
  }catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
  }
};