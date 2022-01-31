const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./api/schema');
const {resolvers} = require('./api/resolvers');
const {client} = require('./db/db');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const main = async () => {
    await client.connect();
    const {url} = await server.listen();
    console.log('listening on ' + url);
}

main();