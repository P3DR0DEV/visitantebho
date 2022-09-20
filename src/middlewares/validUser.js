require('dotenv').config()

function validUser(req, res, next) {
    try {
        console.log(req.session.user)
        if(!req.session.user){
            res.redirect('/notAllowed')
        } else{
            next()
        };
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validUser
}