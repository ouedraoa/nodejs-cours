var express = require('express');
var router = express.Router();
let data = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  data = data + 1;
  res.render('index', { title: 'Express', data: data });
});

router.post('/form', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  res.render('index', { title: 'done ', data: JSON.stringify(req.body)});
});

router.get('/form', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  res.render('index', { title: 'done ', data: JSON.stringify(req.body)});
});

module.exports = router;
