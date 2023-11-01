import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize( 'bunker' , 'root', 'bunker', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

class Employees extends Model{}

Employees.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  company_name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  document_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  first_name:{
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  date_admission:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'employees',
  freezeTableName:true,
  timestamps: false
})

export default Employees

