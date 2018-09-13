const { Server } = require('http');
const connectToServer = require('./test-module');

const server = new Server(connectToServer);
// NODE_PATH =.
server.listen(8000);
