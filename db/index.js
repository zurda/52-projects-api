const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/db.json')
const db = low(adapter)

const createProjectModel = require('./project')

module.exports = {
  models: {
    Project: createProjectModel(db)
  },
  db
}
