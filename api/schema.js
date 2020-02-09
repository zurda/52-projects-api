const { gql } = require('apollo-server')

const typeDefs = gql`
  type Project {
    name: String!
    id: String!
    repo: String
    url: String
  }
  type Query {
    projects: [Project]!
  }
`

module.exports = typeDefs
