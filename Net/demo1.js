const net = require('net');
const client = net.connect({port: 8125}, () => {
  // 'connect' listener
  console.log('connected to server11!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server11');
});