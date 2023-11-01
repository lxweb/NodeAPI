import fs from 'fs'
import path from 'node:path' 
import { Sequelize } from 'sequelize'

const path_sql_file = path.join(__dirname, '..', '..', 'data', 'db_bunker_challenge.sql')
var sql_string = fs.readFileSync(path_sql_file, 'utf8')

const sequelize = new Sequelize('', 'root', 'bunker', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  }
});

sequelize.query(sql_string);