const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mongo_path = 'mongodb://localhost/test';

const connection = mongoose.createConnection(mongo_path);
const Schema = mongoose.Schema;

const ImageURL = new Schema({
    user_id   : Number,
    image_url : String,
    link_url  : String
});

const Url = connection.model('url', ImageURL);

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.connect(mongo_path);
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));

    Url.find({}, function (err, urls_array) {
        res.render('index', { title: 'Express', urls_array: urls_array });
    });


});

module.exports = router;
