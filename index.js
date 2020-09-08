const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');
const connectDB = require('./config/db');

//connect to DB
connectDB();


// server
const server = new ApolloServer({
    typeDefs,
    resolvers
});


//start the server
server.listen().then( ({url}) => {
    console.log(`Server ready in ${url}`)
})
