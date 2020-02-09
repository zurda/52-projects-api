const createProjectModel = db => {
  return {
    findMany(filter) {
      return db.get('project')
        .filter(filter)
        .value()
    },
    findOne(filter) {
      return db.get('project')
        .find(filter)
        .value()
    },
  }
}

module.exports = createProjectModel
