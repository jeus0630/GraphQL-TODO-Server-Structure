const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./api/schema');
const {resolvers} = require('./api/resolvers');
const {client} = require('./db/db');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(async ({url})=>{
    await client.connect();
    console.log("DB Connection is Success");
    console.log(`server is running on ${url}`);
})