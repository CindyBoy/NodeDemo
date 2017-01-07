    var crypto = require('crypto');

    var data = "156156165152165156156";
    console.log('Original cleartext: ' + data);
    var algorithm = 'aes-128-ecb';
    var key = '78541561566';
    var clearEncoding = 'utf8';
    var iv = "";


    //var cipherEncoding = 'hex';
    //If the next line is uncommented, the final cleartext is wrong.
    var cipherEncoding = 'base64';
    var cipher = crypto.createCipheriv(algorithm, key, iv);

    var cipherChunks = [];
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    console.log(cipherEncoding + ' ciphertext: ' + cipherChunks.join(''));

    var decipher = crypto.createDecipheriv(algorithm, key,iv);
    var plainChunks = [];
    for (var i = 0;i < cipherChunks.length;i++) {
      plainChunks.push(decipher.update(cipherChunks[i], cipherEncoding, clearEncoding));
    }


    plainChunks.push(decipher.final(clearEncoding));
    console.log("UTF8 plaintext deciphered: " + plainChunks.join(''));