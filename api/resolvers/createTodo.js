const {db} = require('../../db/db');

exports.createTodo = async (parent, {description}, context) => {
    console.log(description);
    await db.collection('graph').insertOne({
        description,
        checked : false
    });

    return await db.collection('graph').find().toArray();
}