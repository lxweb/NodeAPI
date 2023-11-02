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
 * @param _ Unused param representing request
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
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}

export {
    getAllCompaniesWithEmployees,
    getCompanyWithEmployeesByName
}