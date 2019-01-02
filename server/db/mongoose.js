var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // setting promise type
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};