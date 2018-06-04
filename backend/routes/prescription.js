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
        
        console.log("enter!");
        async.waterfall([
                function(call_back) {
                        var err = null;
                        

                        var db = connectDB();
                        // parentID를 이용하여 현재 날짜에 해당하는 예약정보를 받아온다.

                        
                        var curDate = new Date();
                        var sql =  "UPDATE medicine SET lunch = 1 where id=?";

                        var params = [req.query.id];
                        db.query(sql, params, function(err, rows, fields) {
                                if(err) {
                                            console.log('Error while performing query.', err);
                                            throw err;
                                }
                                else {
                                            console.log("DB searched - medicine");
                                            console.log(rows);
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
                                res.send(null);
                        }
                        
                });
                     
});

module.exports = router;
