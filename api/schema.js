const {gql} = require('apollo-server');

exports.typeDefs = gql`
    type Query{
        todos: [todo!]
    }
    
    type todo{
        description: String!
        checked: Boolean!
    }
`