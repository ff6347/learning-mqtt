// required when running on node.js
var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://try:try@broker.shiftr.io', {
  clientId: 'javascript/node'
});

client.on('connect', function() {
  console.log('client has connected!');

  // via wildcard
  // client.subscribe('/fabianmoronzirfas/*/*'); // specific
  client.subscribe('/helloword/#'); // all
  // client.unsubscribe('/example');

  // setInterval(function(){
  //   client.publish('/hello', 'world');
  // }, 1000);
  client.on('message', function(topic, message) {
    console.log('Received new message. Topic is "%s" message is "%s" ', topic, message.toString());
    client.publish('fabianmoronzirfas/beep', '1');
  });
});
