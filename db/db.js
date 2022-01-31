require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://Jewoo:${process.env.DB_PW}@jewoo.xbkwj.mongodb.net/todoapp-graphql?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const db = client.db("todoapp-graphql");

module.exports = {
    client,
    db
}