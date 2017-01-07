const fs =require('fs');

fs.mkdtemp('tmp/foo-', (err, folder) => {
  console.log(folder);
    // Prints: /tmp/foo-itXde2
});