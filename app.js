var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

// Configure server
var api = new ParseServer({
  databaseURI: 'mongodb://admin:quanlyduanphanmem8@ds021356.mlab.com:21356/demoparse', // Database
  cloud: './cloud/main.js', // Custom function
  appId: 'myAppId', // Just a password to recognize who's calling the API
  masterKey: 'myMasterKey', // Master password which is used to Read/Write everything
  serverURL: 'http://localhost:1337/parse' // server URL
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Start server
app.listen(1337, function() {
  console.log('Parse server is running...');
});