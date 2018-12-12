const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');

    // fine on and update - Todos
    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("5c112553de8a0fdc7e603e39")},
    //     { $set: { completed: true}},
    //     {returnOriginal: false}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos: ', err);
    // });

    // fine on and update - Users
    var updateParams = {
        id: {_id: new ObjectID("5c1126ddde8a0fdc7e603e9f")},
        set: { 
            $set: {
                location: 'TX, USA'
            },
            $inc: {
                age: 1
            }
        },
        return: { returnOriginal: false}
    };
    db.collection('Users').findOneAndUpdate(updateParams.id, updateParams.set, updateParams.return).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user: ', err);
    });

    // db.close();
});