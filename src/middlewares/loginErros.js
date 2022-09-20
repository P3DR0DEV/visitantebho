const erros = (req,res,next)=>{
    res.locals.errors = req.flash('errors');
    next()
}

module.exports ={ erros }