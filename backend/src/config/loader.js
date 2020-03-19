const path = require('path');
const server = require('./server');
require('./database');
require('./routes')(server);

server.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    console.log('Serving files:', path.join(__dirname+'/client/build/index.html'))
});