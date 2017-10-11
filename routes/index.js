var express = require('express');
var router = express.Router();
var exchangerates = require('../model/currencyDB');

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

    var dollars = req.query.dollars;
    var toCurrency = req.query.to_currency;

    console.log('dollars = ' + dollars);
    console.log('toCurrency = ' + toCurrency);

    var converted = dollars * exchangerates[toCurrency];

    console.log('converted = ' + converted);

    res.render('results', {
        dollars: dollars,
        toCurrency: toCurrency,
        converted: converted}
    );
});


module.exports = router;
