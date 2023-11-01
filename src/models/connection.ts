import { Sequelize } from 'sequelize'

const Connection = new Sequelize( 'bunker' , 'root', 'bunker', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

export default Connection;