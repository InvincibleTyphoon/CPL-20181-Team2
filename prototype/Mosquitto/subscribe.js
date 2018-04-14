var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1');
 
//연결되면 모든 topic을 subscribe함
client.on('connect', function () {
  client.subscribe('#');
});
 
//받은 메시지를 출력
client.on('message', function (topic, message) {
  console.log("Published: " + topic.toString() + ' :: ' + message.toString());
});
