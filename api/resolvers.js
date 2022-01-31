const {todos} = require('./resolvers/todos');

exports.resolvers = {
    Query: {
        todos
    }
}