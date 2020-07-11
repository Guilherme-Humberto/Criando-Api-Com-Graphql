const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const userDatas = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${userDatas}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${userDatas}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`
module.exports = makeExecutableSchema({
     typeDefs,
     resolvers 
})