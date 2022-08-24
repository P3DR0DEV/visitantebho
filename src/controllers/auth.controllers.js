const ad = require('../config/activeDirectory.js')
require('dotenv').config()
const domain = process.env.DOMAIN

//Método para autenticar usuários
exports.user_authenticate = async (req, res) => {
  const { user, pass } = req.body;
  // console.log(user)
  // console.log(pass)
  // console.log(domain)
  // const query = 'CN=BHO'
  try {
    await ad.authenticate( domain + "\\" + user, pass,
    function (err, auth) {
      if (auth) {
        // ad.findGroups(query,(err, groups)=>{
        //   if(err){
        //     console.log("ERRO:", err)
        //   }
        //   console.log(groups)
        // })
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
    ad.groupExists('CTIC-BHO',(err, result)=>{
      // if(err){
      //   console.log(err)
      //   return
      // };
      console.log(result)
    })
  }catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
  }
};