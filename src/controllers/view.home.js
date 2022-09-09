const Visitante = require('../model/visitante');
const { verify }= require('jsonwebtoken')

const visitanteHome = (req,res)=>{
   verify(req.token, process.env.JWT_CREATE_ACCESS_TOKEN, (err, data)=>{
      if (err){
         console.log(err)
      } else {
         Visitante.find()
         .then(result =>{
            res.render('../views/home',{
                  title: 'Home',
                  visitante: result
            })
         })
         .catch(err =>{
            console.log(err)
         })
      }
   })
}


const notAllowed = (req,res)=>{
   res.render('../views/notAllowed',{
      title: 'Not Allowed'
   })
}
module.exports= { 
   visitanteHome,
   notAllowed
}