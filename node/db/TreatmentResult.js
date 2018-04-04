var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var _ = require('underscore');

var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

var DBNAME = 'TreatmentResult'
var TABLENAME = 'treatmentResult'


app.get('/', function(req, res){
        res.render('home');
});

app.post('/newDatabase',function(req,res){
    console.log('creating db');
    var sql = 'CREATE DATABASE ?';
    db.query(sql,DBNAME, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

app.post('/newTable', function(req, res) {
    var sql = 'CREATE TABLE ?(patientID int, contents VARCHAR(255), PRIMARY KEY(patientID))';
    db.query(sql,TABLENAME, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('? table created...',TABLENAME);
    });
});

app.post('/newTreatmentResult',function(req,res){
    var sql = 'INSERT INTO ? (patientID, contents) VALUES(? ?)'
    var params = [req.body.patientID,req.body.contents]

    db.query(sq,params,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send('Inserted...');
    });    
})

