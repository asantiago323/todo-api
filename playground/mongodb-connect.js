<<<<<<< HEAD
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo: ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    /*
     * Insert documents into the Users Collection
     * (name, age, location)
     */

    db.collection('Users').insertOne({
        name: 'Anthony Santiago',
        age: 34,
        location: 'Virginia, USA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user: ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
=======
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo: ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    /*
     * Insert documents into the Users Collection
     * (name, age, location)
     */

    db.collection('Users').insertOne({
        name: 'Anthony Santiago',
        age: 34,
        location: 'Virginia, USA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user: ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
>>>>>>> origin/master
});