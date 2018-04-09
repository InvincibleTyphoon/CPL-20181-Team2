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

app.get('/', function(req, res){
        res.render('home');

});

app.get('/membership', function(req, res){
        res.render('input');
});

app.post('/membership_receiver', function(req, res){
        var conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'westCircle1!',
                database: 'emr_data'
        });
        conn.connect(function(err){
                if(err) {
                        console.error('mysql connection error');
                        console.error(err);
                        throw err;
                }
        });
        var sql = 'INSERT INTO patient (id, name, phone, birthday, password) VALUES(?, ?, ?, ?, ?)';
        var params = [req.body.id, req.body.name, req.body.phone, req.body.birthday, req.body.password];
        var query = conn.query(sql, params, function(err, rows, fields) {
                if(err)
                        console.log('Error while performing query.', err);
        });

        sql = 'SELECT * from patient';

        var query = conn.query(sql, function(err, rows, fields){
                if (err)
                        console.log('Error while performing query.', err);
                else {
                        console.log('  /id/     /name/        /phone/        /birthday/          /password/');
                        for(var i in rows) {
                                console.log(rows[i].id + '     ' +  rows[i].name + '      ' + rows[i].phone + '      ' +  rows[i].birthday + '      ' +  rows[i].password);
                        }
                }
        });
        conn.end();
        res.writeHead(302, {'Location': '/'});
        res.end();
});

app.get('/login', function(req, res){
        res.render('login');
});

app.post('/logining', function(req, res) {
        var conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'westCircle1!',
                database: 'emr_data'
        });
        var data = {};

        conn.connect(function(err){
                if(err) {
                        console.error('mysql connection error');
                        console.error(err);
                        throw err;
                }
        });

        var sql = 'SELECT * FROM patient WHERE id = ? and password = ?';
        var params = [req.body.id, req.body.password];
                
        conn.query(sql, params, function(err, rows, fields) {
                if(err) 
                        console.log('Error while performing query.', err);
                else{

                        data = _.clone(rows[0]);
                        console.log(data);                        
                        if(data == undefined)       res.render('loginfail');     
                        else        res.render('mypage');

undefined

                }       
        });

        conn.end();


        
});

app.post('/reservation', function(req, res){
        res.render('reservation');
});

app.listen(3000, function(){
        console.log('connected 3000 port!');
});

