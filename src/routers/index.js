const express = require('express');
const visitanteHome = require('../controllers/view.home');
const router = express.Router();

router.get('/api', (req, res)=>{
    res.status(200).send({
        success: true,
        message: 'Hi, welcome',
        version: '1.0.0'
    });
});

router.get('/home', visitanteHome);


module.exports = router;