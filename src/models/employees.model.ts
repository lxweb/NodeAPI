import { DataTypes } from 'sequelize'

import Connection from './connection'

const Employees = Connection.define('employees',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  company_name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
  modelName: 'employees',
  freezeTableName:true,
  timestamps: false
})


export default Employees

