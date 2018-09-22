var express = require('express');
var router = express.Router();
const cities = require( '../data/cities.json' );

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render( 'index', {
        cities: cities
    });
});

router.get( '/:city', function( req, res ) {
    const city = req.params.city;
    
    res.render( 'city', {
        cities: cities,
        city: city,
        details: cities[req.params.city]
    });
});

module.exports = router;
