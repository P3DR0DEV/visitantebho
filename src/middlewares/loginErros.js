const erros = (req,res,next)=>{
    res.locals.errors = req.flash('errors');
    res.locals.user = req.session.user;
    next()
}

module.exports ={ erros }