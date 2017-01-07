const buf = new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);
  // creates a new Buffer containing ASCII bytes
  // ['b','u','f','f','e','r']
// coonsole.warn(buf);
  for (var b of buf)
  console.log(b)



const buf1 = new Buffer('buffer');
const buf2 = new Buffer(buf1);

buf1[0] = 0x61;
console.log(buf1.toString());
  // 'auffer'
console.log(buf2.toString());
  // 'buffer' (copy is not changed)