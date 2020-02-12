require("dotenv").config();
const { ApolloServer } = require('apollo-server')
const { models, db } = require('./db')
const typeDefs = require('./api/schema')
const resolvers = require('./api/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  },
  playground: true,
  introspection: true
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});