// A simple server to test this locally
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000, () => {
  console.log('starting on port 8080');
})
