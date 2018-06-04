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

// patientID를 이용하여 데이터 필터링

router.get('/', function (req, res, next) {
        
        console.log("enter");
        async.waterfall([
                function(call_back) {
                        var db = connectDB();
                        // parentID를 이용하여 해당하는 예약정보를 받아온다.
                        console.log(req.query.hosID);
                        var sql = "SELECT DATE_FORMAT(r.resDate, '%y-%M-%d') as resDate, r.resTime, p.name, r.symptom FROM reservation AS r, patient AS p WHERE r.hospitalID = ? and r.patientID = p.id and r.resDate > now()";
                        var params = [req.query.hosID];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                        console.log('Error while performing query.', err);
                                        e = 'DB ERROR';
                                        call_back('db', null, db);
                                }
                                else {
                                        console.log("DB Searched");
                                        console.log(rows);


                                        call_back(null, rows, db);

                                }
                        });
                }],
                function(err, resTable, db){
                        if(err ==  null) {
                                if(db != null)
                                        db.end();

                                console.log("!!");
                                
                                res.send(resTable);

                        }
                        else {
                                console.log(err);
                                console.log("Error !!");
                                res.send(null);
                        }
                        
                });
                     
});

module.exports = router;
