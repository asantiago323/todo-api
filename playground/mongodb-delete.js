const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');

    // delete many - Todos

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete one - Todos
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // fine on and delete - Todos
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos: ', err);
    // });

    // delete many - Users

    db.collection('Users').deleteMany({name: 'Anthony Santiago'}).then((result) => {
        console.log('Deleted Many.');
    });

    // fine on and delete - Users
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c1126f5de8a0fdc7e603ea3")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user: ', err);
    });

    // db.close();
});