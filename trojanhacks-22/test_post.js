var request = require('request');

var program = {
  script: 'console.log("4/20 blaze it")',
  language: 'nodejs',
  versionIndex: '4',
  clientId: 'd0c25492b573abf6ac0f5999d0f62d98',
  clientSecret:
    '93caaf867132f33aa55fbdfaa7fae04181b0dfd7c2ac791336e935e4d54505ba',
};
request(
  {
    url: 'https://api.jdoodle.com/v1/execute',
    method: 'POST',
    json: program,
  },
  function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  }
);
