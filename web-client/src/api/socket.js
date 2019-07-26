import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

let subscribeToMessages = (callback) => {
    socket.on('receiveMessage', message => callback(null, message));
    socket.emit('subscribeToMessages');
}

let emitMessage = (message) => {
    socket.emit('sendMessage', message)
}

export { socket, subscribeToMessages, emitMessage }