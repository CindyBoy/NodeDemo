const util = require('util');
const vm = require('vm');

const sandboxes = [{}, {}, {}];

const script = new vm.Script('globalVar = "set"');

sandboxes.forEach((sandbox) => {
  script.runInNewContext(sandbox);
});

console.log(util.inspect(sandboxes));

// [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]