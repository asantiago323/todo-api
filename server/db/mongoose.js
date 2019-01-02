var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // setting promise type
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); // local mongodb

module.exports = {mongoose};