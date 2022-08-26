const express = require('express');
const router = express.Router();

router.get('/api', (req, res)=>{
    res.status(200).send({
        success: true,
        message: 'Hi, welcome',
        version: '1.0.0'
    });
});

router.get('/home', (req,res)=>{
    return res.render('../views/home.ejs', { title: 'Home' })
})


module.exports = router;