// required when running on node.js
var config = require('../private.json');
var mqtt = require('mqtt');
var id = 'simple-js-input';
var client = mqtt.connect('mqtt://' + config.user + ':' + config.pw + '@broker.shiftr.io', {
  clientId: id
});

client.on('connect', function() {
  console.log('client has connected!');

  client.subscribe('/input/' + id); // all
  client.on('message', function(topic, message) {
    console.log('Received new message. Topic is "%s" message is "%s" ', topic, message.toString());

  });
});
