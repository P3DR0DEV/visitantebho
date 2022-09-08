const router = require('express')();
const authController = require('../controllers/auth.controllers');
// => Definindo as rotas de autenticação

router.post('/login', authController.user_authenticate); //{POST} localhost:3000/api/ad/login
router.get('/login', (req, res)=>{
    res.redirect('/')
});
router.post('/logout',(req, res)=>{ 
    res.clearCookie('refreshtoken', { path:'/refresh_token' })
    res.redirect('/')
})
module.exports = router;