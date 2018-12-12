var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // setting promise type
mongoose.connect('mongodb://localhost:27017/TodoApp'); // local mongodb

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner',
    completed: false,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log(e);
});
