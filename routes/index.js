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
    var toLiteral;
    var fromLiteral;

    if (fromCurrency === "EUR" && toCurrency === "USD") {
        cRate = "EtD";
        fromLiteral = "Euros";
        toLiteral = "Dollars";
    } else
    if (fromCurrency === "EUR" && toCurrency === "JPY") {
        cRate = "EtY";
        fromLiteral = "Euros";
        toLiteral = "Yen";
    } else
    if (fromCurrency === "EUR" && toCurrency === "EUR") {
        cRate = "EtE";
        fromLiteral = "Euros";
        toLiteral = "Euros";
    } else
    if (fromCurrency === "USD" && toCurrency === "USD") {
        cRate = "DtD";
        fromLiteral = "Dollars";
        toLiteral = "Dollars";
    } else
    if (fromCurrency === "USD" && toCurrency === "JPY") {
        cRate = "DtY";
        fromLiteral = "Dollars";
        toLiteral = "Yen";
    } else
    if (fromCurrency === "USD" && toCurrency === "EUR") {
        cRate = "DtE";
        fromLiteral = "Dollars";
        toLiteral = "Euro";
    } else
    if (fromCurrency === "JPY" && toCurrency === "USD") {
        cRate = "YtD";
        fromLiteral = "Yen";
        toLiteral = "Dollars";
    } else
    if (fromCurrency === "JPY" && toCurrency === "JPY") {
        cRate = "YtY";
        fromLiteral = "Yen";
        toLiteral = "Yen";
    } else
    if (fromCurrency === "JPY" && toCurrency === "EUR") {
        cRate = "YtE";
        fromLiteral = "Yen";
        toLiteral = "Euro";
    }


    //console.log('dollars = ' + dollars);
    //console.log('toCurrency = ' + toCurrency);

    var converted = currency * exchangerates[cRate];

    //console.log('converted = ' + converted);


    res.render('results', {
        currency: currency,
        toCurrency: toCurrency,
        toLiteral: toLiteral,
        fromCurrency: fromCurrency,
        fromLiteral: fromLiteral,
        converted: converted}
    );
});


module.exports = router;
