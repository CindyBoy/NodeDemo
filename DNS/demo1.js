const dns = require('dns');

dns.lookup('nodejs.org', (err, addresses, family) => {
  console.log('addresses:', addresses);
  console.log('family:', family);
  console.log('err:', err);
});