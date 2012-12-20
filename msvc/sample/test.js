var io = require('socket.io').listen(8080);

var chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });

var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
  });

io.sockets.on('connection', function (socket) {
  socket.on('test', function (msg) {
    console.log('Test message: ', msg);
  });
});