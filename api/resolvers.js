const {todos} = require('./resolvers/todos');
const {createTodo} = require('./resolvers/createTodo');

exports.resolvers = {
    Query: {
        todos
    },
    Mutation: {
        createTodo
    }
}