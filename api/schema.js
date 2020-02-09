const { gql } = require('apollo-server')

const typeDefs = gql`
  type Project {
    name: String!
    id: String!
    repo: String
    url: String
    type: String
  }

  input ProjectsInput {
    type: String
  }

  input ProjectInput {
    name: String!
  }

  type Query {
    projects(input: ProjectsInput): [Project]!
    project(input:ProjectInput): Project
  }
`

module.exports = typeDefs
