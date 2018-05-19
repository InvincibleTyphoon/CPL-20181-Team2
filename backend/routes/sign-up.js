var express = require('express');
var router = express.Router();
//var memberDB = require('../api/memberDB');
var async = require('async');
var mysql = require('mysql');
var _ = require('underscore');
const dbInfo = {
        host: '35.229.136.4',
        user: 'root',
        password: 'hoscare',
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

        async.waterfall([
                function(call_back) {
                        var err = null;
                        

                        if(req.query.id == '' || req.query.pw == '' || req.query.rePw == '' || req.query.name == '' || req.query.birthday == '' || req.query.phone == '') {
                                call_back('noInput', null, 'noInput');
                                return;
                        }


                        if(req.query.pw != req.query.rePw){
                                call_back('noMatch', null, 'noMatch');
                                return;
                        }
                        
                        var db = connectDB();
                        // ID중복 확인
                        var sql = 'SELECT * FROM patient WHERE patientID = ? ';
                        var params = [req.query.id, req.query.pw];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                        console.log('Error while performing query.', err);
                                        err = 'DB ERROR';
                                        call_back('db', db, 'db');
                                }
                                else {
                                        if(rows[0] == undefined) {
                                                call_back(null, db);
                                        }
                                        else {
                                                console.log('id 중복');
                                                call_back('dup', db, 'dup');
                                        }

                                }
                        });
                }, function(db, call_back) {
                        var sql = 'INSERT INTO patient (patientId, name, phone, password, birthday) VALUES (?, ?, ?, ?, ?)';
                        var params = [req.query.id, req.query.name, req.query.phone, req.query.pw, req.query.birthday];
                        db.query(sql, params, function(err, rows, fields) {
                                        if(err) {
                                                console.log('Error while performing query.', err);
                                                throw err;
                                        }
                                        else {
                                                call_back(null, db, 'success');
                                        }
                                });
                }],
                function(err, db, result) { 
                        /*
                        if(err == 'dup'){
                                console.log(err);
                                res.send(1);
                        }
                        else if(err == 'noMatch') {
                                console.log(err);
                                res.send(2);
                        }
                        else if(err == 'noInput') {
                                console.log(err);
                                res.send(3);
                        }
                        else if(err == 'db') {
                                console.log(err);
                                res.send(4);
                        }
                        else {
                                console.log(result);
                                res.send(result);
                        }*/

                        if(db != null)
                                db.end();
                        res.send(result);
                        
                });
                     
});

module.exports = router;
