const GET_CODE = 'getCode';
const USE_FEATURE = 'useFeature';
const SEND_BUG = 'sendBug';
const SEND_BLIND = 'sendBlind';
const SEND_FREEZE = 'sendFreeze';
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 4000;
const INDEX = './index.html';

const bug = (string) => {
  if (string.length % 2 == 0) {
    //bug 1
    string = string.replaceAll('{', '(');
    string = string.replaceAll('}', ')');
  } else {
    //bug type 2
    string = string.replaceAll(',', ';');
    string = string.replaceAll(';', ',');
  }
  console.log(string);
  return string;
};

const freeze = () => {
  console.log('freezing in progress');
};

const blind = () => {
  console.log('blinding');
};

//const cors = require('cors');

// const corsOptions = {
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

const server = express()
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
    if (req.method === 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, DELETE, PATCH, GET'
      );
      return res.status(200).json({});
    }
    next();
  })
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

io.on('connection', (socket) => {
  // Join a conversation
  const roomId = 'game';
  socket.join(roomId);

  // Listen for new getCode
  socket.on(GET_CODE, (data) => {
    console.log(data);
    io.in(roomId).emit(GET_CODE, data);
  });

  socket.on(USE_FEATURE, (data) => {
    io.in(roomId).emit(USE_FEATURE, data);
  });

  socket.on(SEND_BUG, (data) => {
    io.in(roomId).emit(SEND_BUG, {
      code: bug(data.code),
      senderId: data.senderId,
    });
  });

  socket.on(SEND_BLIND, (data) => {
    io.in(roomId).emit(SEND_BLIND, {
      senderId: data.senderId,
    });
  }); //thiwlrh

  socket.on(SEND_FREEZE, (data) => {
    io.in(roomId).emit(SEND_FREEZE, {
      senderId: data.senderId,
    });
  });

  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    socket.leave(roomId); // supp
  });
});
