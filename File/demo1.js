// const fs = require('fs');

// fs.unlink('tmp/hello.txt', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });


//Here is the synchronous version:
const fs = require('fs');

fs.unlinkSync('tmp/hello');
console.log('successfully deleted /tmp/hello');