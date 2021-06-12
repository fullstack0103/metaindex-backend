var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserIndex = new Schema({
  userId: String,
  image: String
}, {
  collection: 'userIndexs'
});

module.exports = mongoose.model('UserIndex', UserIndex);