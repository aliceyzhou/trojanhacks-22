var request = require('request');

var program = {
  script: 'console.log("4/20 blaze it")',
  language: 'nodejs',
  versionIndex: '4',
  clientId: 'd0c25492b573abf6ac0f5999d0f62d98',
  clientSecret:
    'f9416cae80b7afda1888d70f09a18d8f2b8672526d9486fd56d22096c6047367',
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
