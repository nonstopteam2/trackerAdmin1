
var express = require('express');
var app = module.exports = express();
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');
// pie chart settings
var pie = require('./pie');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/deleteperson', { redirect : false }));

app.get('/viewDeleteAccount/:routes', function (req, res, next) {

  var relative = path.relative(res.locals._admin.views, app.get('views'));

    res.locals.breadcrumbs = {
        links: [
            {url: '/', text: res.locals.string.home},
            {active: true, text: 'Result'}
        ]
    };
    
    res.locals.partials = {

        content: path.join(relative, 'form'),
        readme:  path.join(relative, 'readme')
    
    };



    // reuse the admin's database connection
    var db = res.locals._admin.db;
    var aid = req.params.routes.split(',');


    // get the month from the url

res.locals.aid=aid[0];


var j=aid[1];
var k='/view4/'+j;



    queryDatabase1(db, aid[0], function (err, rows, total) {
        if (err) return next(err);

        // pie chart's settings


        // month's select control data
        
res.redirect(k);


        next();


    });



});



function queryDatabase1 (db, formdata, cb) {
    // find the first and last date of the selected month (all test dates are in 2012)
    // var date  = moment('2012-'+month, 'YYYY-MMMM'),
    //     first = date.startOf('month').format('YYYY-MM-DD'),
    //     last  = date.endOf('month').format('YYYY-MM-DD');
    // group by item and sum its cache for the selected month
   


  var sql = "delete   \
                from `account` \
               where `account_id` = '"+formdata+"' ";

  db.client.query(sql, function (err, person_id) {
            if (err) return cb(err);            
            // queries results
cb(null);

     

          
        });

      
}

