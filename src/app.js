const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser')
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const {erros} = require('./middlewares/loginErros')

//view engine & middleware
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname + '/views'));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cookieParser())

const sessionOptions = session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
});
app.use(sessionOptions);
app.use(flash());
app.use(erros)

// => Rotas
const index = require(__dirname+ '/routers/index')
const auth = require(__dirname+ '/routers/auth.routes')

app.get('/',(req, res)=>{
    if(req.session.user) return res.redirect('/home')
    return res.render('authPage',{ title: 'Authentication' });
});

app.use(index)
app.use('/api/ad', auth)

app.use((req , res)=>{
    return res.status(404).render('404', { title: 'Not Found'})
})

module.exports = app;

