const express = require('express');
const { visitanteHome , notAllowed }  = require('../controllers/view.home');
const { validUser } = require('../middlewares/validUser');
const router = express.Router();

const { insertMongo } = require('../controllers/insertMongo')

router.post('/var/www',(req, res)=>{
    const { txtnome, txtcpf , hostname } = req.body;
    insertMongo(txtnome, txtcpf, hostname)

})
router.get('/api', (req, res)=>{
    res.status(200).send({
        success: true,
        message: 'Hi, welcome',
        version: '1.0.0'
    });
});

router.get('/home', validUser ,visitanteHome);

router.get('/notAllowed', notAllowed)

module.exports = router;