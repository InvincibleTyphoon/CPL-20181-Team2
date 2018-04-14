'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


 
//Client와 연결 이벤트 발생 -> client에게 "greetings"와 "time"을 topic으로 등록시킴
//그리고 "greetings" topic으로 "Helloworld"라는 메시지를 pubish(전송)
//1.5초마다 "time" topic으로 시간 정보를 publish
client.on('connect', function () {
    client.subscribe('greetings');
    client.subscribe('time');
    publish("greetings", "Nice to meet you.");
    programmedPublish();
});

//message 이벤트 발생 시 로그로 메시지를 찍음
client.on('message', function (topic, message) {
    console.log("Published: " + topic.toString() + ' :: ' + message.toString());
});

//클라이언트에게 메시지를 전송하는 함수
function publish(topic, message) {
    client.publish(topic, message);
}

//3초(3000 밀리세컨드)마다 시간을 publish하는 함수
function programmedPublish() {
    publish("time", new Date().toISOString());
    setTimeout(programmedPublish, 3000);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

function sendMqttMessage() {
    
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
