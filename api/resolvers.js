module.exports = {
  Query: {
    projects(_, { input }, { models }) {
      return models.Project.findMany(input)
    },
    project(_, { input }, { models }) {
      return models.Project.findOne(input)
    },
  },
  Mutation: {
    createProject(_, { input }, { models }) {
      return models.Project.create(input)
    }
  },
  Project: {
    __resolveType(project) {
      return project.isComplete === true ? 'CompleteProject' : 'OngoingProject'
    }
  }
}
