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

server.listen(4000)
  .then(() => console.log('Listenning on port http://localhost:4000'));
