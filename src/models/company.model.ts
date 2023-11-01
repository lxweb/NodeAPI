import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize( 'bunker' , 'root', 'bunker', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

class Company extends Model{}

Company.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.ENUM,
    values: ['UY','BR','AR'],
    defaultValue: 'UY',
    allowNull: false
  },
  cant_employees:{
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'company',
  freezeTableName:true,
  timestamps: false
})

export default Company

