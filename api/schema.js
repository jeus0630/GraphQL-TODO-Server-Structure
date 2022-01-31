const {gql} = require('apollo-server');

exports.typeDefs = gql`
    type Query{
        todos: [todo!]
    }
    
    type Mutation{
        createTodo(description: String!): [todo!]
    }
    
    type todo{
        description: String!
        checked: Boolean!
    }
`