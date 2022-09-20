const ad = require('../config/activeDirectory.js');
require('dotenv').config();
const domain = process.env.DOMAIN;
const permissoes = [{ username:'150367' }, { username:'150176' }];

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
        console.log(req.session.user)
        req.session.user = { user, logado: true }
        res.redirect('/home')
      }
      else {
        req.flash('errors', 'Authentication failed, Invalid Credentials.')
        req.session.save(()=>{
          return res.redirect('/')
        });
        return;
      }
    })
  }catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
  }
};