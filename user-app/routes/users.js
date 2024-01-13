var express = require('express');
var router = express.Router();

/* GET users listing. */

let data = ["A", "B"];
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

router.get('/:id', function(req, res, next) {
  res.send(JSON.stringify(data[req.params.id]));
});

router.post('/:id/:nom/:prenom', function(req, res, next) {
  data.push(req.params.nom);
  res.send(JSON.stringify(data[req.params.id]));
});

module.exports = router;
