const server = require('http').createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('i am confused');
});
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const PORT = 4000;
const GET_CODE = 'getCode';
const USE_FEATURE = 'useFeature';

io.on('connection', (socket) => {
  // Join a conversation
  const roomId = 'game';
  socket.join(roomId);

  // Listen for new getCode
  socket.on(GET_CODE, (data) => {
    console.log(data);
    io.in(roomId).emit(GET_CODE, 'hhhh');
  });

  socket.on(USE_FEATURE, (data) => {
    io.in(roomId).emit(USE_FEATURE, data);
  });

  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
