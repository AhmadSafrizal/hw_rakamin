const pool = require('../database')
const fs = require('fs')

const seedData = async() => {
  try {
    const datas = JSON.parse(fs.readFileSync('seed/seeding.json', 'utf8'))

    for (const data of datas) {
      const query = 'INSERT INTO actor (first_name, last_name) VALUES ($1, $2)'
      const values = [data.first_name, data.last_name]
      await pool.query(query, values)
    }

    console.log('Seeding Success!')
  } catch (err) {
    console.log('Seeding Fail!' ,err)
  }

  pool.end()
}

seedData()
