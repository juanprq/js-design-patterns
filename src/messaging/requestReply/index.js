const wsUri = 'ws://localhost:3000';
const wsServerPort = 3000;
new (require('./Server'))(wsServerPort);

const client = new (require('./Client'))(wsUri);

console.log('antes de enviar');
client.send('This is my first message', (res) => console.log(`Task 1: ${res}`));
console.log('despues de enviar');
client.send('Hello Node.js, I\'m a server!', (res) => console.log(`Task 2: ${res}`));
