const createProjectModel = db => {
  return {
    findMany(filter) {
      return db.get('project')
        .filter(filter)
        .value()
    }
  }
}

module.exports = createProjectModel
