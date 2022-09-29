const express = require('express');
const server = express();
const profiles= require('./src/data/profiles.json');

server.get('/profiles',(req,res) =>{

return res.json(profiles)
});

server.listen(3000, ()=>{

    console.log('Servidor esta funcionando');
});