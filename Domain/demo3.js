// create a top-level domain for the server
const domain = require('domain');
const http = require('http');
const serverDomain = domain.create();

console.log("run111...");
serverDomain.run(() => {
  console.log("run222...");
  // server is created in the scope of serverDomain
  http.createServer((req, res) => {
    console.log("run33.3..");
    // req and res are also created in the scope of serverDomain
    // however, we'd prefer to have a separate domain for each request.
    // create it first thing, and add req and res to it.
    var reqd = domain.create();
    reqd.add(req);
    reqd.add(res);
    reqd.on('error', (er) => {
      console.log("run444...");
      console.error('Error', er, req.url);
      try {
        console.log("run555...");
        res.writeHead(500);
        res.end('Error occurred, sorry.');
      } catch (er) {
        console.log("run666...");
        console.error('Error sending 500', er, req.url);
      }
    });
    console.log("run777...");
  }).listen(1337);
});