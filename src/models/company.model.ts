import { DataTypes } from 'sequelize'

import Connection from './connection'

const Company = Connection.define('company',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
  modelName: 'company',
  freezeTableName:true,
  timestamps: false
})

export default Company

