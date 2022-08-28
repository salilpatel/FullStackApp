/*const express = require('express')
const server = express()
const bp = require("body-parser")
const cors=require('cors')
server.use(bp.json())
server.use(cors())
// deploy
const port=3001
const createTask = require('./TaskManager/createTask')
const findTask = require('./TaskManager/findTask')
const deleteTask = require('./TaskManager/deleteTask')
const updateTask=require('./TaskManager/updateTask')




server.use('/', createTask)
server.use('/', findTask)
server.use('/', deleteTask)
server.use('/',updateTask)

server.listen(process.env.port||port, () => console.log('server started'))*/

const express = require('express')
const server = express()
const bp = require("body-parser")
const cors=require('cors')
const path=require('path')
const favicon = require("serve-favicon");
server.use(favicon(path.join(__dirname,'client', "build", "favicon.ico")));
//server.use(favicon(path.resolve('./client/build/favicon.ico')))
server.use(express.static(path.join(__dirname,'/client', "build")));
//server.use(express.static(path.resolve('./client/build/favicon.ico')));
server.use(bp.json())
server.use(cors())
// deploy
const port=3001
const createTask = require('./TaskManager/createTask')
const findTask = require('./TaskManager/findTask')
const deleteTask = require('./TaskManager/deleteTask')
const updateTask=require('./TaskManager/updateTask')

server.use('/', createTask)
server.use('/', findTask)
server.use('/', deleteTask)
server.use('/',updateTask)
server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname,'client', "build", "favicon.ico"));
});
const host = '0.0.0.0';
server.listen(process.env.PORT||port,host, () => console.log('server started'))