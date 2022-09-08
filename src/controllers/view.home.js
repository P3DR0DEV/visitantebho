const Visitante = require('../model/visitante');

const visitanteHome = (req,res, accessToken)=>{
   if(accessToken){
      Visitante.find()
      .then(result =>{
         res.render('../views/home',{
               title: 'Home',
               visitante: result
         })
         console.log(result)
      })
      .catch(err =>{
         console.log(err)
      })
   } else{
      res.render('../views/home',{
         visitante: "",
         title: "User invalid"
      })
   }
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