import { Sequelize } from 'sequelize'
import { development } from '../config/config.json'

const Connection = new Sequelize( 
    development.database , 
    development.username, 
    development.password, {
        host: development.host,
        dialect: 'mysql',
        port: development.port}
    )

export default Connection;