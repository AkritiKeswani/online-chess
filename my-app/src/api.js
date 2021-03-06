import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(interval, cb) {
  socket.on('timer', timestamp => console.log(timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }
