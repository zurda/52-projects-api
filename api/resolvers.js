module.exports = {
  Query: {
    projects(_, { input }, { models }) {
      if (input.type) return models.Project
        .findMany({ type: input.type })
      return models.Project.findMany()
    },
    project(_, { input }, { models }) {
      return models.Project.findOne({ name: input.name })
    },
  }
}
