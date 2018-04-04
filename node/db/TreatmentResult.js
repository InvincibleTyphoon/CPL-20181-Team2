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
app.use(bodyParser.json());

var DBNAME = "TreatmentResult"
var TABLENAME = "treatmentResult"

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '1q2w3e4r5t',
    database: DBNAME
});

app.get('/', function(req, res){
        res.render('home');
});

app.get('/inputResult', function (req,res){
    res.render('inputResult');
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
    var sql = 'CREATE TABLE ' + TABLENAME + '(patientID int, contents VARCHAR(255), PRIMARY KEY(patientID))';
    db.query(sql,TABLENAME, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table' + TABLENAME +   'created...');
    });
});

app.post('/newTreatmentResult',function(req,res){
    var sql = 'INSERT INTO ' + TABLENAME + '(patientID, contents) VALUES(?,?)';
    var params = [req.body.patientID,req.body.contents];
    console.log('Request : ' + sql);
    db.query(sql,params, function(err,result){
        if(err) throw err;
        console.log(result);
        res.send('Inserted...');
    });    
})


app.listen('3000', () => {
    console.log('Server started on port 3000');
});