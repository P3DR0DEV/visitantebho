const mongoClient = require('mongodb').MongoClient;

const insertMongo = (insert_nome, insert_cpf, insert_host) =>{
    const insert_stamp = registroTime();
    const url = "mongodb://192.168.100.52";
    mongoClient.connect(url, (err, client)=>{
        let db = client.db("myDb");
        if(err) throw err;

        const obj = {
            NOME: insert_nome,
            CPF: insert_cpf,
            STAMP: insert_stamp,
            HOST: insert_host
        };

        db.collection('Dados').insertOne(obj, (err , res)=>{
            if (err) throw err;
            console.log('1 record inserted');
            client.close()
        });
    });
};


function registroTime(){
    const lcTime = new Date();
    const dia = lcTime.getDate();
    let mes = lcTime.getMonth() +1;
    const ano = lcTime.getFullYear();
    const hora = lcTime.getHours();
    const minutes = lcTime.getMinutes();

    if(mes< 10){
        mes = `0${mes}`
    }
    return `${dia}/${mes}/${ano}  ${hora}:${minutes}`
}

module.exports= {
    insertMongo
}