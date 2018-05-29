var Schema = mongoose.Schema;

// スキーマ
var ImageURL = new Schema({
    _id: Number,
    url_string: String
});

// MongoDBへの接続
mongoose.connect('mongodb://localhost/test');

exports.ImageURL = mongoose.model('ImageURL', ImageURL);