const ad = require('../config/activeDiretory')
require('dotenv').config()
const domain = process.env.DOMAIN_CONTROLLER

exports.user_authenticate = async (req, res)=>{
    const { user, pass } = req.body;
    try{
        // console.log(user)
        // console.log(pass)
        // console.log(domain)
        await ad.authenticate(domain + "\\" + user, pass, 
        function(err, auth){
            if (auth){
                return res.status(200).json({
                    message:"Authenticated"
                });
            } else{
                return res.status(401).send({
                    message: "Authentication Failed",
                    error: err
                });
            };
        });

    } catch(e){
        return res.status(500).send({ message:"ERROR" + e })
    }
};