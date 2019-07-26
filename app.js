var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/web-client/build')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

io.on('connection', function(socket){
    socket.on('disconnect', function(){
    });

    socket.on('sendMessage', (message) => {
        
        socket.emit('receiveMessage', message)
        socket.broadcast.emit('receiveMessage', message)
        console.log('message', message)
    })
});

http.listen(8000, function(){
    console.log('listening on *:3000');
});
  

module.exports = app;
