// show all events
const { Server } = require('http');

const server = new Server();

const { emit } = server;

server.emit = (...args) => {
  console.log(args[0]); // eventName
  // mandatory return
  return emit.apply(server, args);
};

// note keep-alive: single "connection" event for many requests
server.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('Hello World');
  }
}).listen(8000);
