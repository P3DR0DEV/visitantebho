const ad = require('../config/activeDiretory')

exports.user_authenticate = async (req, res)=>{
    const { user, pass, domain } = req.body;
    try{
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