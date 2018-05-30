var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const mongo_path = 'mongodb://localhost/test';

var Schema = mongoose.Schema;

var ImageURL = new Schema({
    user_id   : Number,
    url_string: String
});

var Url = mongoose.model('url', ImageURL);

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.connect(mongo_path);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));
    var url_list = [];
    Url.find({ user_id: 1 }, 'url_string', function (err, urls) {
        urls.forEach( function (element) {
            url_list.push(element.url_string)
        });
        res.render('index', { title: 'Express', url: url_list });
    });


});

module.exports = router;
