const {db} = require('../../db/db');

exports.todos = async () => {
    return await db.collection('graph').find().toArray();
}