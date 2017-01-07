const util = require('util');
const vm = require('vm');

const sandbox = {
  animal: 'cat',
  count: 9
};

vm.runInNewContext('count += 1; name = "kitty"', sandbox);
console.log(util.inspect(sandbox));

// { animal: 'cat', count: 3, name: 'kitty' }