const nanoid = require('nanoid')

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
    create(project) {
      const newProject = { id: nanoid(), createdAt: Date.now(), ...project }
      db.get('project')
        .push(newProject)
        .write()
      return newProject
    }
  }
}

module.exports = createProjectModel
