const http=require('http');
const express= require('express');
const app=express();
const socketio=require('socket.io');
const { connect } = require('http2');

const server=http.createServer(app);

const io=socketio(server);
app.use(express.static(__dirname+'/public'));
io.on('connection',(socket)=>{
    console.log('conncected with socket id =' +socket.id)
})


server.listen(3000,()=>{
    console.log('server stzrted')
});