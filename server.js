const app = require(__dirname + '/src/app')
const mongoose = require('mongoose');

const mongoDb = process.env.MONGODB_URI
const port = process.env.PORT || 3000;

mongoose.connect(mongoDb)
 .then(app.listen(port,'0.0.0.0', ()=>{ 
   console.log('Listening to port: ', port);
 }))
 .catch(e => {
    console.log('ERRO: ', e)
 });
 