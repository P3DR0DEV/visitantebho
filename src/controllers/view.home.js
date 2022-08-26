const Visitante = require('../model/visitante');

const visitanteHome = (req,res)=>{
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
}

module.exports= visitanteHome