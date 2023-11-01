import { Sequelize } from 'sequelize'

const sequelize = new Sequelize( 'bunker' , 'root', 'bunker', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
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