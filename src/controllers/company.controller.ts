import { Request, Response } from 'express';
import Models from '../models';
import { Op } from 'sequelize';

/**
 * Returns the complete list of companies with the list of employees
 * @param _ Unused param representing request
 * @param res Response Object
 */

const getAllCompaniesWithEmployees =  async (_:Request, res:Response): Promise<void>=> {
    try{
        const allCompanies = await Models.Company.findAll({
            include: 'employees',
          })
        res.status(200).send(allCompanies)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    } 
}

/**
 * 
 * @param req Request Object
 * @param res Response Object 
 */
const getCompanyWithEmployeesByName = async (req:Request, res:Response) => {
    try{
        const company = await Models.Company.findOne({
            where: { 
                name: { 
                    [Op.eq]: req.params.name
                }
            },
            include: 'employees',
          })
        res.status(200).send(company)
    }catch(error){
        console.error(error)
        res.status(500).json({ error: 'An error occurred while fetching data.' })
    }
}

/**
 * 
 * @param req Request Object
 * @param res Response Object 
 */
const createCompany = async (req:Request, res:Response) => {
    try {
        const { name, country, cant_employees} = req.body;
    
        // Use Sequelize to create a new company
        const newCompany = await Models.Company.create({
          name,
          country,
          cant_employees
        });
    
        res.status(201).json(newCompany);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the company.' });
      }
}

export {
    getAllCompaniesWithEmployees,
    getCompanyWithEmployeesByName,
    createCompany
}