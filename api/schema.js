const { gql } = require('apollo-server')

const typeDefs = gql`
  enum ProjectType {
    FRONTEND 
    BACKEND 
    FULLSTACK
  }

  interface Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
  }

  type CompleteProject implements Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
    isComplete: Boolean!
  } 

    type OngoingProject implements Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
    isTested: Boolean!
    todo: [String]!
  } 

  input ProjectsInput {
    type: ProjectType
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
    type: ProjectType!
    number: Int!
  }

  type Mutation {
    createProject(input: NewProject): Project!
  }
`

module.exports = typeDefs
