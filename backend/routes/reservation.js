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
                        var e = null;
                        

                        var db = connectDB();
                        // parentID를 이용하여 해당하는 예약정보를 받아온다.

                        var sql = "SELECT id, patientID, hospitalID, DATE_FORMAT(resDate, '%Y-%m-%d') as resDate, resTime FROM reservation WHERE patientID = ? and resDate > now()";
                        var params = [req.query.id];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                        console.log('Error while performing query.', err);
                                        e = 'DB ERROR';
                                        call_back('db', null, null, db);
                                }
                                else {
                                        console.log("DB Searched");
                                        console.log(rows);


                                        call_back(null, rows, db);

                                }
                        });
                
                }, function(resTable, db, call_back) {
                        var cnt = resTable.length;
                        var i = 0;
                        var j = 0;
                        var hospital = new Array();
                        
                        for(i = 0; i < cnt; i++) {
                                var sql = 'SELECT * FROM hospital WHERE id = ?';
                                var params = [resTable[i]['hospitalID']];
                                db.query(sql, params, function(err, rows, fields) {
                                                if(err) {
                                                        console.log('Error while performing query.', err);
                                                        call_back('db', null, null, db);
                                                }
                                                else {
                                                        console.log("DB searched - hos");
                                                        console.log(rows);
                                                        hospital[j] = rows[0];
                                                        console.log(j);
                                                        console.log(cnt);
                                                        
                                                        if(j == cnt-1)
                                                                call_back(null, resTable, hospital, db);
                                                        j++;
                                                }
                                        });
                        }

                        }],
                function(err, resTable, hospital, db) {

                        if(err ==  null) {
                                if(db != null)
                                        db.end();

                                console.log("!!");
                                
                                res.send([resTable, hospital]);

                                 

                        }
                        else {
                                console.log(err);
                                console.log("Error !!");
                                res.send(null);
                        }
                        
                });
                     
});

module.exports = router;
