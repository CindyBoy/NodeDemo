const spawn = require('child_process').spawn;

const child = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: ['ignore']
});

child.unref();