import Company from "./company.model";
import Employees from "./employees.model";

Company.hasMany(Employees, {
    foreignKey: 'company_name',
  sourceKey: 'name',
  as: 'employees'
})
Employees.belongsTo(Company, {
    foreignKey: 'company_name',
    targetKey: 'name',
    as: 'company',
})


export default {
    Company,
    Employees
}