const fs =require('fs');

// fs.rename('tmp/hello', '/tmp/world', (err) => {
//   if (err) throw err;
//   console.log('renamed complete');
// });
// fs.stat('tmp/hello', (err, stats) => {
//   if (err) throw err;
//   console.log(`stats: ${JSON.stringify(stats)}`);
// });

fs.rename('tmp/hello', 'tmp/world', (err) => {
  if (err) throw err;
  fs.stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});