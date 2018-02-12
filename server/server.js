const path = require("path");
const express = require("express");
const http = require("http")
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app)
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getDate()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getDate()
    });

    socket.on('createMessage', (message) => {
        console.log(message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getDate()
        // });
        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getDate()
        });
    });
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});