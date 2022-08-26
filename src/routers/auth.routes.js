const router = require('express')();
const authController = require('../controllers/auth.controllers');

// => Definindo as rotas de autenticação

router.post('/login', authController.user_authenticate); //{POST} localhost:3000/api/ad/login
router.get('/login', (req, res)=>{
    res.redirect('/')
})
module.exports = router;