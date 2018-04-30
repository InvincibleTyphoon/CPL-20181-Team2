var express = require('express');
var router = express.Router();
//var memberDB = require('../api/memberDB');
var async = require('async');
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

router.get('/', function (req, res, next) {
        var id = -1;

        async.waterfall([
                function(callback) {
                        var err = null;
                        var db = connectDB();
                        var sql = 'SELECT * FROM patient WHERE patientID = ? and password = ?';
                        var params = [req.query.id, req.query.pw];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                        console.log('Error while performing query.', err);
                                        err = 'DB ERROR';
                                        callback(err, 'err');
                                }
                                else {
                                        if(rows[0] != undefined) {
                                                id = rows[0].id;
                                                callback(null, db);
                                        }
                                        else {
                                                console.log('id 없음');
                                                id = 0;
                                                callback('err', db);

                                        }

                                }
                        });
                }, function(db, callback) {
                        console.log('id : ' + id);
                        if(id != 0) {
                                console.log('로그인 성공');
                                var sql = 'SELECT * FROM patient WHERE id = ' + id;
                                db.query(sql, function(err, rows, fields) {
                                        if(err) {
                                                console.log('Error while performing query.', err);
                                                throw err;
                                        }

                                        var member = _.clone(rows[0]);    // member 값 복사
                                        callback(null, db, member);
                                });
                        }
                        else {
                                console.log('로그인 실패');
                                callback('Error', callback);
                        }
                }],
                function(err, db, result) {
                        if(err){
                                console.log(err);
                                res.send(err);
                        }
                        else {
                                console.log(result);
                                res.send(result);
                        }
                });
                
/*
        console.log('aa');
        id = memberDB.login(req.query.id, req.query.pw);
        console.log('id : ' + id);
        if(id > 0) {
                console.log('로그인 성공');
        } else {
                console.log('로그인 실패');
        }
        
        res.send('aa');
*/
});

module.exports = router;
