const path = require("path");
const express = require("express");
const http = require("http")
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const {
    generateMessage
} = require('./utils/message');

const app = express();
var server = http.createServer(app)
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {
        console.log(message);
        socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
    });
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});