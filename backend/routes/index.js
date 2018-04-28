var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
// 뷰에서 컴파일한 내용을 전송
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
