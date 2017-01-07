const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf = new Buffer(arr.buffer); // shares the memory with arr;

console.log(buf);
  // Prints: <Buffer 88 13 a0 0f>

// changing the TypdArray changes the Buffer also
arr[1] = 6000;

console.log(buf);
  // Prints: <Buffer 88 13 70 17>

console.log("===================");
const buf3 = new Buffer(5);
console.log(buf3);
  // <Buffer 78 e0 82 02 01>
  // (octets will be different, every time)
buf3.fill(0);
console.log(buf3);
  // <Buffer 00 00 00 00 00>

console.log("===================");
 const buf1 = new Buffer('this is a tést');
console.log(buf1.toString());
  // prints: this is a tést
console.log(buf1.toString('ascii'));
  // prints: this is a tC)st

const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');
console.log(buf2.toString());
  // prints: this is a tést