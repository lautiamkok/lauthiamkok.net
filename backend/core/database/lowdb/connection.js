'use strict'

import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

// https://github.com/typicode/lowdb
const adapter = new FileSync('./db.json')
const db = low(adapter)

// https://github.com/typicode/lowdb
// Set some defaults (required if your JSON file is empty)
// db.defaults({ works: [], count: 0 })
//   .write()

export { db }
