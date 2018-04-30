var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.query.id, req.query.pw);
  res.send('success1234')
});

module.exports = router;
