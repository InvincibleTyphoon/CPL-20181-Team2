var mysql = require('mysql');
var _ = require('underscore');

const dbInfo = {
        host: 'localhost',
        user: 'root',
        password: 'westCircle1!',
        database: 'emr_data'
};

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


// 예약할 때 사용하는 함수(예약정보를 저장한다.) patientId는 string형 ID가 아니라 int형 고유값 id를 의미
module.exports.addReserv = function(patientID, hospitalID, symptom, resDate, resTime) {
        try {
                db = connectDB();
                var params = [patientID, hospitalID, symptom, resDate, resTime];
                var sql = 'INSERT INTO reservation (patientID, hospitalID, symptom, resDate, resTime) VALUES(?, ?, ?, ?, ?)';
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
};


// 의사가 해당하는 진료과에 예약한 예약정보들을 볼 때 쓰는 함수 (hospital의 ID로 검색, 있으면 리스트 반환 없으면 null 또는 undefined 반환)
module.exports.getHosReserv = function(hospitalID) {
        var reserv = [];
        try {
                db = connectDB();
                var sql = 'SELECT p.name, p.birthday, p.phone, r.symptom, r.resDate, r.resTime FROM reservation r INNER JOIN patient p ON p.id = r.patientID WHERE r.hospitalID = ?';
                var params = [hospitalID];

                db.query(sql, params, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }

                        // 값 복사. 안하면 이 함수 종료되자마자 값 날아감..
                        reserv = _.clone(rows);
                });
        }
        catch(e) {
                console.error(e);
        }
        finally {
                return reserv;
        }
};


// 환자가 예약한 정보들을 볼 때 쓰는 함수 (patient의 ID로 검색, 있으면 리스트 반환, 없으면 null 뜨노느 undefined 반환)
module.exports.getPatiReserv = function(patientID) {
        var reserv = [];
        try {
                db = connectDB();
                var sql = 'SELECT h.name, h.office, r.symptom, r.resDate, r.resTime FROM reservation r INNER JOIN hospital h ON h.id = r.hospitalID WHERE r.patientID = ?';
                var params = [patientID];
                db.query(sql, params, function(err, rows, fields) {
                        if(err) {
                                console.log('Error while performing query.', err);
                                throw err;
                        }

                        reserv = _.clone(rows);    // 값 복사.
                });
        }
        catch(e) {
                console.error(e);
        }
        finally {
            return reserv;
        }
}
