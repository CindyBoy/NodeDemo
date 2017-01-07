const domain = require('domain');
const fs = require('fs');
const d = domain.create();
d.on('error', (er) => {
  console.error('Caught error!', er);
});

console.log('run111...');
d.run(() => {
	console.log('run222...');
  process.nextTick(() => {
  	console.log('run333...');
    setTimeout(() => { // simulating some various async stuff
    	console.log('run444...');
      fs.open('file', 'r', (er, fd) => {
      	console.log(fd);
      	console.log(fs);
      	console.log('run555...');
        if (er) throw er;
        // proceed...
        console.log('run666...');
      });
    }, 100);
  });
});