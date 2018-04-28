var mysql = require('mysql');
var _ = require('underscore');

// DB connect할 때 필요한 정보들
const dbInfo = {
        host: 'localhost',
        user: 'root',
        password: 'westCircle1!',
        database: 'emr_data'
};


// DB 접속
function connectDB() {
        var db = mysql.createConnection(dbInfo);
        db.connect(function(err) {
                if(err) {
                        console.error('mysql connection error');
                        console.error(err);
                        throw err;
                }
        });

        return db;
}


// 회원가입할 때 사용하는 함수
module.exports.addMember = function(id, name, phone, birthday, password) {
        try {
                db = connectDB();
                var params = [id, name, phone, birthday, password];
                var sql = 'INSERT INTO patient (patientID, name, phone, birthday, password) VALUES(?, ?, ?, ?, ?)';
                db.query(sql, params, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }
                });

        }
        catch(e) {
                console.error(e);
        }
        finally {
                db.end();
        }
};


// 모든 회원정보 출력
module.exports.printMemberAll = function() {
        try {
                db = connectDB();
                var sql = 'SELECT * from patient';
                db.query(sql, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }

                        // 출력하는 코드
                        console.log('   /ID/            /name/          /phone/         /birthday/          /password/');
                        for(var i in rows) {
                                console.log(rows[i].patientID + '   ' + rows[i].name + '    ' + rows[i].phone + '   ' + rows[i].birthday + '    ' + rows[i].password);
                        }
                });
        }
        catch(e) {
                console.error(e);
        }
        finally {
                db.end();
        }
};


// 회원 고유 ID로 회원정보 출력(DB에 있으면 정보 반환, 없으면 undefined 또는 null 반환)
module.exports.getMember = function(id) {
        var member = {};    // 회원정보를 담는 변수
        try {
                db = connectDB();
                var sql = 'SELECT * FROM patient WHERE id = ' + id;
                db.query(sql, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }

                        member = _.clone(rows[0]);    // member 값 복사
                });
        }
        catch(e) {
                console.error(e);
        }
        finally {
            db.end();
            return member;
        }
}

// ID, password로 로그인 확인(DB에 있으면 id, 없으면 0 반환)
module.exports.login = function(patientID, password) {
        var id = 0;

        try {
                db = connectDB();
                var sql = 'SELECT * FROM patient WHERE patientID = ? and password = ?';
                var params = [patientID, password];
                db.query(sql, params, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }
                        if(rows[0] != undefined)
                                id = rows[0].id;
                });
        }
        catch(e) {
                console.error(e);
        }
        finally {
            db.end();
            return id;
        }
}


