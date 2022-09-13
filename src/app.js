const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

// view engine & middleware
// app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname + '/views'));
// app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));

// => Rotas
const index = require(__dirname+ '/routers/index')
const auth = require(__dirname+ '/routers/auth.routes')

// app.get('/',(req, res)=>{
//     return res.render('index',{ title: 'Home Page' });
// });

app.use(index)
app.use('/api/ad', auth)

// app.use((req , res)=>{
//     return res.status(404).render('404', { title: 'Not Found'})
// })

module.exports = app;

