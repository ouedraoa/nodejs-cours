var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'users';
const collectionName = 'users';

/* GET users listing. */
router.get('/', async function (req, res, next) {
    let userList = [];
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected correctly to server");
    // find all users
    const users = await db.collection(collectionName).find({});
    await users.forEach(user => {
        userList.push(user);
    })
    console.log(userList);
    // send the result as JSON
    res.send(JSON.stringify(userList));
    //close the connection
    await client.close();
});

router.post('/', async function (req, res, next) {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected correctly to server");
    // insert in users collections
    await db.collection(collectionName).insertOne({"lastName": "lastName", "firstName": "firstName"});
    res.send("ok");
    //close the connection
    await client.close();
});


router.get('/callbacks', function (req, res, next) {
    let userList = [];
    const client = new MongoClient(url);
    console.log("Connected correctly to server");
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        db.collection(collectionName).find({}).forEach(user => {
            userList.push(user);
            res.send(JSON.stringify(userList));
            console.log(userList);
        })
    });
});

router.post('/callbacks', function (req, res, next) {
    const client = new MongoClient(url);
    console.log("Connected correctly to server");
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        db.collection(collectionName).insertOne({"name": "test"}, function (res) {
        });
    });
});

module.exports = router;
