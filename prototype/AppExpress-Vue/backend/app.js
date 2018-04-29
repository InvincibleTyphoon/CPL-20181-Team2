var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 만든 라우터 api 모듈 획득 ////
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/logins');
var app = express();

// DB접근 api 모듈 획득
var memberDB = require('../../node/db/api/memberDB.js');
var reservDB = require('../../node/db/api/reservationDB.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 실제 만든거 라우팅 ////
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/logins', loginRouter);


// DB api test

//memberDB.addMember('seowon000', '윤서원', '010-0000-0000', '1995-04-03', '00000000');
//memberDB.addMember('daehun001', '곽대훈', '010-1111-0000', '1995-05-04', '11111111');
//memberDB.addMember('seokil002', '김석일', '010-2222-0000', '1995-06-05', '22222222');
//memberDB.addMember('kyeonghwa003', '성경화', '010-3333-0000', '1997-07-06', '33333333');

console.log("---------회원정보 출력------------");
memberDB.printMemberAll();


var memId = [memberDB.login('seowon000', '00000000'), memberDB.login('daehun001', '11111111'), memberDB.login('seokil002', '22222222'), memberDB.login('kyeonghwa003', '33333333')];
/*
if(memId[0]) {
        console.log('로그인 성공');
}
else {
        console.log("로그인 실패");
}

memId[0] = memberDB.login('seowon000', '00000000');
*/


memberInfo = [memberDB.getMember(memId[0]), memberDB.getMember(memId[1]), memberDB.getMember(memId[2]), memberDB.getMember(memId[3])];




for(m in memberInfo) {
        console.log(m);
}

reservDB.addReserv(memId[0], 1001, '하지정맥', '2018-05-02', '11:00:00');
reservDB.addReserv(memId[1], 1002, '당뇨', '2018-05-02', '15:00:00');
reservDB.addReserv(memId[2], 1002, '천식', '2018-05-02', '17:00:00');
reservDB.addReserv(memId[3], 1003, '발목골절', '2018-05-02', '14:00:00');
/*
console.log("윤서원 정보");
console.log(reservDB.getPatiReserv(memId[0]));
console.log("곽대훈 정보");
console.log(reservDB.getPatiReserv(memId[1]));
console.log("김석일 정보");
console.log(reservDB.getPatiReserv(memId[2]));
console.log("성경화 정보");
console.log(reservDB.getPatiReserv(memId[3]));

console.log("-----외과 예약정보-----");
console.log(reservDB.getHosReserv(1001));
console.log("-----내과 예약정보-----");
console.log(reservDB.getHosReserv(1001));
console.log("-----정형외과 예약정보-----");
console.log(reservDB.getHosReserv(1001));

*/


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

module.exports = app;


