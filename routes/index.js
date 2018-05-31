const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mongo_path = 'mongodb://localhost/test';

const connection = mongoose.createConnection(mongo_path);
const Schema = mongoose.Schema;

const ImageURL = new Schema({
    user_id   : Number,
    image_url : String,
    link_url  : String,
});

const Following = new Schema({
    user_id       : Number,
    following_ids : Array,
});

const Url = connection.model('url', ImageURL);
const Follow = connection.model('follow', Following);

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.connect(mongo_path);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));

    Follow.find({user_id: 1}, function (err, follows_array) {
        const follows = follows_array[0].following_ids;
        Url.find({user_id: follows}, function (err, urls_array) {
            res.render('index', { title: 'Express', urls_array: urls_array });
        });
    });




});

module.exports = router;
