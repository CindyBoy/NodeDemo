const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'a password');

var decrypted = '';
decipher.on('readable', () => {
  var data = decipher.read();
  if (data)
  decrypted += data.toString('utf8');
});
decipher.on('end', () => {
  console.log(decrypted);
  // Prints: some clear text data
});

var encrypted = 'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
// var encrypted = 'ca981be48e90867604588e75d04feabb63cc007a8fkaaa878bdad98dfs8ad89b10616ed84d815504';
decipher.write(encrypted, 'hex');
decipher.end();