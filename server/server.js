const path = require("path");
const express = require("express");
const http = require("http")
const socketIO = require("socket.io");
const port = process.env.PORT || 3000;
const {
    generateMessage,
    generateLocationMessage
} = require('./utils/message');
const publicPath = path.join(__dirname, "../public");
const app = express();
app.use(express.static(publicPath));
var server = http.createServer(app)
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLoacationMessage', (coords, callback) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
        callback();
    })

});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});