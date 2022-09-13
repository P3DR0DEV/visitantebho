const Visitante = require('../model/visitante');

const visitanteHome = (req,res)=>{
   Visitante.find().sort({ createdAt: -1 })
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


const notAllowed = (req,res)=>{
   res.render('../views/notAllowed',{
      title: 'Not Allowed'
   })
}
module.exports= { 
   visitanteHome,
   notAllowed
}