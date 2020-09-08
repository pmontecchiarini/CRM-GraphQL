const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');


// server
const server = new ApolloServer({
    typeDefs,
    resolvers
});


//start the server
server.listen().then( ({url}) => {
    console.log(`Server ready in ${url}`)
})
