var Schema = mongoose.Schema;

// スキーマ
var ImageURL = new Schema({
    _id: Number,
    image_url: String
});

// MongoDBへの接続
mongoose.connect('mongodb://localhost/test');

exports.ImageURL = mongoose.model('ImageURL', ImageURL);