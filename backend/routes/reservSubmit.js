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
                        var err = null;
                        

                        var db = connectDB();
                        // parentID를 이용하여 해당하는 예약정보를 받아온다.

                        var sql = "INSERT INTO reservation (patientID, hospitalID, symptom, resDate, resTime) VALUES (?, ?, ?, ?, ?)";
                        var params = [req.query.patientID, req.query.hospitalID, req.query.symptom, req.query.resDate, req.query.resTime];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                        console.log('Error while performing query.', err);
                                        err = 'DB ERROR';
                                        call_back('db', db);
                                }
                                else {
                                        console.log("Save Reservation");
                                        call_back(null, db);

                                }
                        });
                }],
                function(err, db) {

                        if(err ==  null) {
                                if(db != null)
                                        db.end();

                                console.log("!!");
                                
                                res.send("success");

                        }
                        else {
                                console.log(err);
                                console.log("Error !!");
                                res.send("fail");
                        }
                        
                });
                     
});

module.exports = router;
