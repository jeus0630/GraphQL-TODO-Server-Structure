const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./api/schema');
const {resolvers} = require('./api/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url})=>{
    console.log(`server is running on ${url}`);
})