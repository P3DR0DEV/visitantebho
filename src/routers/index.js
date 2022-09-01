const express = require('express');
const { visitanteHome , notAllowed }  = require('../controllers/view.home');
const { validUser } = require('../middlewares/validUser');
const router = express.Router();

router.get('/api', (req, res)=>{
    res.status(200).send({
        success: true,
        message: 'Hi, welcome',
        version: '1.0.0'
    });
});

router.get('/home', validUser);

router.get('/notAllowed', notAllowed)

module.exports = router;