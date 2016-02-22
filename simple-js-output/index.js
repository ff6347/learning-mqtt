// required when running on node.js
var config = require('../private.json');
var mqtt = require('mqtt');
var id = 'simple-js-output';
var client = mqtt.connect('mqtt://' + config.user + ':' + config.pw + '@broker.shiftr.io', {
  clientId: id
});

client.on('connect', function() {
  console.log('client has connected!');
  setInterval(function() {
    client.publish('/output', JSON.stringify({
      clientId: id,
      data: 1
    }));
  }, 5000);

});