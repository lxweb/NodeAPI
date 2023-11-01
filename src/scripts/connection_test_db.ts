import { Sequelize } from 'sequelize'
import {development} from '../config/config.json';

const sequelize = new Sequelize( 
  development.database, 
  development.username, 
  development.password, {
    host: development.host,
    dialect: 'mysql',
    port: development.port || 3306
})

const testConnection = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      sequelize.close()
      process.exit(0)
}

testConnection()