const HOSTName = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(HOSTName[0], (error, response, body) => {

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('index.txt', body, (err, data) => {
    if (err) throw err;
    const { size } = fs.statSync('index.txt')
    console.log(`Downloaded and save ${size} to index.txt!`)    
  });
  
});

module.exports = "request";