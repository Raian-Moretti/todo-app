const path = require('path');
const server = require('./config/server');
require('./config/database');
require('./config/routes')(server);

server.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    console.log('Serving files:', path.join(__dirname+'/client/build/index.html'))
});