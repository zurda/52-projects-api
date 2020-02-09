const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type Project {
    name: String!
    number: Int!
    repo: String
    url: String
  }
  type Query {
    exampleProject: Project!
  }
`

const resolvers = {
  Query: {
    exampleProject: () => ({
      name: 'Hangman React',
      number: 1,
      repo: 'https://github.com/zurda/hangman-react',
      url: 'https://zurda.github.io/hangman-react/'
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000)
  .then(() => console.log('Listenning on port http://localhost:4000'));
