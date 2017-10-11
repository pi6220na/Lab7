var express = require('express');
var router = express.Router();
var exchangerates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { name: 'Jeremy', description: 'Lab7 Node/Express simple currency application.' });
});

/* test gitignore */
router.get('/convert', function(req, res, next) {

    var currency = req.query.currency;
    var toCurrency = req.query.to_currency;
    var fromCurrency = req.query.from_currency;
    var cRate;

    if (fromCurrency === "EUR" && toCurrency === "USD") {
        cRate = "EtD";
    }
    if (fromCurrency === "EUR" && toCurrency === "JPY") {
        cRate = "EtY";
    }
    if (fromCurrency === "EUR" && toCurrency === "EUR") {
        cRate = "EtE";
    }
    if (fromCurrency === "USD" && toCurrency === "USD") {
        cRate = "DtD";
    }
    if (fromCurrency === "USD" && toCurrency === "JPY") {
        cRate = "DtY";
    }
    if (fromCurrency === "USD" && toCurrency === "EUR") {
        cRate = "DtE";
    }
    if (fromCurrency === "JPY" && toCurrency === "USD") {
        cRate = "YtD";
    }
    if (fromCurrency === "JPY" && toCurrency === "JPY") {
        cRate = "YtY";
    }
    if (fromCurrency === "JPY" && toCurrency === "EUR") {
        cRate = "YtE";
    }


    //console.log('dollars = ' + dollars);
    //console.log('toCurrency = ' + toCurrency);

    var converted = currency * exchangerates[cRate];

    //console.log('converted = ' + converted);


    res.render('results', {
        currency: currency,
        toCurrency: toCurrency,
        fromCurrency: fromCurrency,
        converted: converted}
    );
});


module.exports = router;
