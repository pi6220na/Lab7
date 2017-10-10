var express = require('express');
var router = express.Router();
var exchangerates = require('../model/currencyDB.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { name: 'My awesome site' });
});

/* test gitignore */
router.get('/convert', function(req, res, next) {
    var query = req.query;

    console.log("exchange file " + exchangerates);

    var dollars = req.query.dollars;
    var toCurrency = req.query.to_currency;

    var converted = dollars * exchangerates[toCurrency];



    res.send(dollars + ' in ' + toCurrency + ' is ' + converted);
});


module.exports = router;
