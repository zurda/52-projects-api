module.exports = {
  Query: {
    projects(_, __, { models }) {
      return models.Project.findMany({})
    }
  }
}
