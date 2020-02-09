require("dotenv").config();
const { ApolloServer } = require('apollo-server')
const { models, db } = require('../db')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
})

server.listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Listenning on ${url}`));
