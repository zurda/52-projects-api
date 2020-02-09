require("dotenv").config();
const { ApolloServer } = require('apollo-server')
const { models, db } = require('../db')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { PORT } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
})

server.listen(PORT)
  .then(() => console.log(`Listenning on port ${PORT}`));
