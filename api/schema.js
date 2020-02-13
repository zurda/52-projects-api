const { gql } = require('apollo-server')

const typeDefs = gql`
  type Project {
    name: String!
    id: String!
    number: Int!
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

  input NewProject {
    name: String! 
    type: String!
    number: Int!
  }

  type Mutation {
    createProject(input: NewProject): Project!
  }
`

module.exports = typeDefs
