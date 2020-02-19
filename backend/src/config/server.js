const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});

const staticFilesPath = path.join(__dirname, 'client/build');
server.use(express.static(staticFilesPath));
console.log('Expecting frontend to be in:', staticFilesPath);

module.exports = server;