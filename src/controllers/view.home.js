const Visitante = require('../model/visitante');

const visitanteHome = (req,res)=>{
    Visitante.find().sort({ createdAt: -1 })
     .then(result =>{
        res.render('../views/home',{
            title: 'home',
            visitante: result
        })
     })
     .catch(err =>{
        console.log(err)
     })
}

module.exports= visitanteHome