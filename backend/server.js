const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const server = express();

//Configs
server.use(cors());
server.use(express.json());

//Database connection
//database con
mongoose.connect('mongodb+srv://admin:admin@cluster0-6pbaq.mongodb.net/integraGit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});


//Models
requireDir('./src/models');

//Routes
server.use('/api', require('./src/routes'));

server.listen(3002);
console.log('server is listening on port 3002');