var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'Namiq',
        text: 'Hey. This is John'
    });
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});