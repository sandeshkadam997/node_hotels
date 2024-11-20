const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL)
    .then(()=>console.log('Connect to MongoDB'))
    .catch((error)=>console.log('Connection error',error));

const db=mongoose.connection;
db.on('connected', ()=>
        console.log('Connected to MongoDB server')
    );

db.on('error', ()=>{
        console.error('MongoDB connection error:' ,error);
   } );

db.on('disconnected', ()=>
        console.log('MongoDB server disconnected')
    );

module.exports=db;