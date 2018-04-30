var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// define router ////
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/logins');
var signUpRouter = require('./routes/sign-up');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 실제 만든거 라우팅 /////
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/logins', loginRouter);
app.use('/api/sign-up', signUpRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



/////// Publising to MQTT Broker ///////////////////////////////////////////////
// define mqtt and client ///////////
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1'); // 여기에 ip 정보를 입력해줘야함
// 기본 loopback ip : 127.0.0.1로 테스트 환경 구축
// github에 보안상 이슈로 loopback ip 그대로 둘예정
// 따로 공지해준 ip로 수정해서 쓰길 바람

// mqtt 관련. 클라이언트 접속시 호출
// 클라이언트에게 greetings, time 의 topic을 구독하게 함
// 테스트를 위해서 3초마다 메시지를 publish함
client.on('connect', function () {
  console.log("mqtt: connect");
  client.subscribe('greetings'); 
  client.subscribe('time');
  publish("greetings", "Nice to meet you.");
  programmedPublish();
});

// mqtt 관련. 3초마다 메시지를 publish
function programmedPublish() {
  publish("time", new Date().toISOString());
  setTimeout(programmedPublish, 3000);
}

// mqtt 관련. 클라이언트에게 메시지를 보내고 나면 무슨 메시지를 보냈는지 Log로 출력
client.on('message', function (topic, message) {
  console.log("Published: " + topic.toString() + ' :: ' + message.toString());
});

// mqtt 관련. topic의 message를 publish함
function publish(topic, message) {
  client.publish(topic, message);
}

module.exports = app;
