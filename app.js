const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function(req,res){
  res.sendFile('public/index.html');
});

app.get('/chat', function(req,res){
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, function (){
    console.log("Servidor en el puerto 3000");
});